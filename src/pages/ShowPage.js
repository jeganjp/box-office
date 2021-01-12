import React,{useEffect,useReducer} from 'react';
import {useParams} from 'react-router-dom';
import {get_api} from '../misc/config';
// import NOT_FOUND_IMG from '../images/not-found.png';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import ShowSeasons from '../components/shows/ShowSeasons';
import ShowCast from '../components/shows/ShowCast';
import {ShowPageWrapper} from './Show.styled';
import { InfoBlock } from './Show.styled';
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
        get_api(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>
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
    // const image=<img src='show.image.medium' alt='display poster'></img>
    // console.log(show.image.medium)
    return (
        <ShowPageWrapper>
        <ShowMainData image={show.image} name={show.name} rating={show.rating} geners={show.genres} summary={show.summary}/>
        <InfoBlock>
        <h3>Details</h3>
        <ShowDetails lang={show.language}  runtime={show.runtime} premiered={show.premiered} network={show.network} status={show.status}
         />
        </InfoBlock>
        <InfoBlock>
        <h3>Seasons</h3>
        <ShowSeasons seasons={show._embedded.seasons}/>
        </InfoBlock>
        <InfoBlock>
        <h3>Cast</h3>
        <ShowCast cast={show._embedded.cast}/>
        </InfoBlock>
         </ShowPageWrapper>
    )
}

export default ShowPage
