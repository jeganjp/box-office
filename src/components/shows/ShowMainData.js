import React from 'react';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import {Star} from './../../components/styled';
const ShowMainData = ({image,name,rating,summary,geners}) => {
    return(<div>
        <div>{<img src={image?image.medium:IMAGE_NOT_FOUND} alt='poster' />}</div>
        <div><h2>{name}</h2></div>
        <div><Star />
        <span>{rating.average || 'N/A'}</span></div>
        <p>Geners:{geners.map((items,key)=>(<span style={{padding:5}} key={key}>{items}</span>))}</p>
        <div dangerouslySetInnerHTML={{__html:summary} }/>
    </div>)
}

export default ShowMainData
