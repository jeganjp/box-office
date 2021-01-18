import React from 'react';
import {useParams} from 'react-router-dom';
// import {get_api} from '../misc/config';
// import NOT_FOUND_IMG from '../images/not-found.png';
import ShowMainData from '../components/shows/ShowMainData';
import ShowDetails from '../components/shows/ShowDetails';
import ShowSeasons from '../components/shows/ShowSeasons';
import ShowCast from '../components/shows/ShowCast';
import {ShowPageWrapper} from './Show.styled';
import { InfoBlock } from './Show.styled';
import { useShow } from '../misc/custom-hooks';
const ShowPage = () => {
    const {id} =useParams();

    const {show,isLoading,error}=useShow(id);
    
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
