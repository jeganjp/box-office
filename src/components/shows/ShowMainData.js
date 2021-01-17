import React from 'react';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import {Star} from './../../components/styled';
import { MainDataWrapper,Headline,TagList } from './ShowMainData.styled';
const ShowMainData = ({image,name,rating,summary,geners}) => {
    return(<MainDataWrapper>
        {<img src={image?image.medium:IMAGE_NOT_FOUND} alt='poster' />}
        <div className='text-side'>
        <Headline><h2>{name}</h2>
        <div style={{margin:20}}>
        <Star active/>
        <span > {rating.average || 'N/A'}</span>
        </div>
        </Headline>
        <div className='summary' dangerouslySetInnerHTML={{__html:summary} }/>
            <div>
                Geners:{''}
                <TagList>
                    {geners.map((items,key)=>(<span key={key}>{items}</span>))}</TagList></div></div>
    </MainDataWrapper>)
}

export default ShowMainData
