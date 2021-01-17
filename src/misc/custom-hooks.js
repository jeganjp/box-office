import {useReducer,useEffect} from 'react';

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