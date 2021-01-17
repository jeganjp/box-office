import {useReducer,useEffect,useState} from 'react';
import { get_api } from './config';

function showReducer(pervState,action)
{
    switch(action.type)
    {
        case 'ADD':
            {
                return [...pervState,action.showId]
            }
        case 'REMOVE':
            {
                return pervState.filter((showId)=>showId!==action.showId)
            }
        default: return pervState;
    }
}

function usePersistantReducer(reducer,initialState,key)
{
    const [state,dispatch] = useReducer(reducer,initialState,(initial)=>{
        const persisted = localStorage.getItem(key);
        return persisted?JSON.parse(persisted):initial;
    })

    useEffect(()=>
    {
        localStorage.setItem(key,JSON.stringify(state))
    },[state,key])

    return [state,dispatch];
}

export function useShows(key='shows')
{
    return usePersistantReducer(showReducer,[],key)
}

export function useLastQuery(key='lastQuery')
{
    const [input,setInput]= useState(()=>{
        const persisted = sessionStorage.getItem(key);
        return persisted?JSON.parse(persisted):"";
    });
    const setPersistedInput=(newState)=>{
        setInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState))
    };
    return [input,setPersistedInput]
}

const reducer=(prevState,action)=>{
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return {show:action.show,isLoading:false,error:null}
        case 'FETCH_FAILED':
            return {...prevState,isLoading:false,error:action.error}
        default: return prevState
        }
    
}


export function useShow(showId)
{
    const [state,dispatch] =useReducer(reducer,
        {show:null,
        isLoading:true,
        error:null,
        });  

    useEffect(()=>{
        let isMounted =true;
        get_api(`shows/${showId}?embed[]=seasons&embed[]=cast`).then(results =>
        {
            if(isMounted){
                dispatch({type:'FETCH_SUCCESS',show:results})
            }
         }).catch(err=>{
             if(isMounted){
                dispatch({type:'FETCH_FAILED', error:err.message})
             }
            
        })
        return ()=>{isMounted = false}
    },[showId]);
    return state;
}