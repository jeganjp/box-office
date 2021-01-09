import React from 'react';
import ActorCard from './ActorCard';
import NOT_FOUND_IMAGE from '../../images/not-found.png';
// import {StyledActorCard} from '../StyledActorCard';
import { FlexGrid } from '../styled';

const ActorGrid = ({data}) => {
    return <FlexGrid>
    {
        data.map(({person})=>(<ActorCard 
            key={person.id} 
            name={person.name} 
            id={person.id}
            DOB={person.birthday}
            country={person.country?person.country.name:"Not found"}
            gender={person.gender}
            deathday={person.deathday}
            image={person.image?person.image.medium:NOT_FOUND_IMAGE}
            
            />))
    }
</FlexGrid>
}

export default ActorGrid
