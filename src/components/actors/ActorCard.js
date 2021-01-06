import React from 'react';


const ActorCard = ({name,DOB,gender,deathday,image,country}) => {
    return (
        <div>
            <div>
                <img src={image} alt="person poster"/>
            </div>
            <h1>{name}</h1>
            <p>Gender: {gender?gender:"Not found"}</p>
            <p>Country: {country}</p>
            <p>DateofBirth: {DOB?DOB:"Not found"}</p>
            <p>Deathdate: {deathday?deathday:"Alive"}</p>
            
        </div>
    )
}

export default ActorCard