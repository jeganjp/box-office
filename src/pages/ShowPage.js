import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {get_api} from '../misc/config';
const ShowPage = () => {
    const {id} =useParams();

    const [show,setShow]= useState(null);

    useEffect(()=>{
        get_api(`shows/1?embed[]=seasons&embed[]=cast`).then(results =>
        {
            setShow(results);
        })
    },[id]);
    console.log('show',show);
    return (
        <div>
            this is show pages
        </div>
    )
}

export default ShowPage
