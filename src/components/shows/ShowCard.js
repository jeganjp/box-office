import React from 'react';
import {Link} from 'react-router-dom';

const ShowCard = ({id,image,summary,name}) => {
    const summaryAsText=summary?`${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...`:'No description';
    return (
        <div>
            <div>
                <img src={image} alt="show poster"/>
            </div>
            <h1>{name}</h1>
            <p>{summaryAsText}</p>
            <div>
                <Link to={`/show/${id}`}>Read more....</Link>
                <button type="button">Star me</button>
            </div>
        </div>
    )
}

export default ShowCard
