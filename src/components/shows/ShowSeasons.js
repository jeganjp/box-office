import React from 'react';
import { SeasonList, SeasonsWrapper } from './Seasons.styled';

const ShowSeasons = ({seasons}) => {
    return (
        <SeasonsWrapper>
            <div><p>Total Seasons: {seasons.length}</p></div>
            <SeasonList>{seasons.map((season)=>(
                <div key={season.id} className="season-item">
                    <p className="left">Season : {season.number}
        <p>Episodes in total:{' '}
        <span> 
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
        </p>    
      </p>
                    <p className="right">Aired : {season.premiereDate} - {season.endDate} </p>
                </div>
            ))}</SeasonList>
        </SeasonsWrapper>
    )
}

export default ShowSeasons
