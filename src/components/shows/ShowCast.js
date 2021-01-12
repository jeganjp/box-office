import React from 'react';
import NOT_FOUND_IMG from '../../images/not-found.png';

const ShowCast = ({cast}) => {
    return (
        <div>
            <div>
                {
                    cast.map(({person,character,voice},key)=>(
                        <div key={key}>
                        {<img src={person.image?person.image.medium:NOT_FOUND_IMG} alt='cast poster'/>}
                        <p>{person.name} | {character.name} {voice ? '| Voice' : ''}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ShowCast
