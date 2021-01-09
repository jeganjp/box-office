import React from 'react';
import {StyledActorCard} from '../actors/StyledActorCard.styled';


const ActorCard = ({name,DOB,gender,deathday,image,country}) => {
    return (
        <StyledActorCard>
            <div className='img-wrapper'>
                <img src={image} alt="person poster"/>
            </div>
            <h1>{name}</h1>
            <p>Gender: {gender?gender:"Not found"}</p>
            <p>Country: {country}</p>
            <p>DateofBirth: {DOB?DOB:"Not found"}</p>
            <p className='deathday'>{deathday?`Death date: ${deathday}`:"Alive"}</p>
            
        </StyledActorCard>
    )
}

export default ActorCard