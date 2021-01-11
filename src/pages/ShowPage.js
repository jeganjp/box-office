import React,{useEffect,useReducer} from 'react';
import {useParams} from 'react-router-dom';
import {get_api} from '../misc/config';
const ShowPage = () => {
    const {id} =useParams();
    // const [show,setShow]= useState(null);
    // const [isLoading,setIsLoading]=useState(true);
    // const [error,setError]=useState(null);

    const initialState ={
        show:null,isLoading:true,error:null,
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

    const [{show,isLoading,error},dispatch] =useReducer(reducer,initialState);  

    useEffect(()=>{
        let isMounted =true;
        get_api(`shows/1?embed[]=seasons&embed[]=cast`).then(results =>
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
    },[id]);
    console.log('show',show);
    if(isLoading)
    {
        return (<div>Page is loading</div>);
    }
    if(error)
    {
        return (<div>Error is : {error}</div>)
    }
    return (
        <div>
            this is show pages
        </div>
    )
}

export default ShowPage
