import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {get_api} from '../misc/config';
const ShowPage = () => {
    const {id} =useParams();
    const [show,setShow]= useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        let isMounted =true;
        get_api(`shows/1?embed[]=seasons&embed[]=cast`).then(results =>
        {
            if(isMounted){
                setShow(results);
                setIsLoading(false);
            }
         }).catch(err=>{
             if(isMounted){
                setError(err.message);
                setIsLoading(false);
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
