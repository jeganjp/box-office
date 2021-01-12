import React from 'react'

const ShowSeasons = ({seasons}) => {
    return (
        <div>
            <div><p>Total Seasons: {seasons.length}</p></div>
            <div>{seasons.map((season)=>(
                <div key={season.id}>
                    <p>Season : {season.number}</p>
                    <p>
        Episodes in total:{' '}
        <span>
          {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
                    <p>Aired : {season.premiereDate} - {season.endDate} </p>
                </div>
            ))}</div>
        </div>
    )
}

export default ShowSeasons
