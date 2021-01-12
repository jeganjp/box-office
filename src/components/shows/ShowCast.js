import React from 'react';
import NOT_FOUND_IMG from '../../images/not-found.png';
import { CastList } from './ShowCast.styled';

const ShowCast = ({cast}) => {
    return (
        <CastList>
                {
                    cast.map(({person,character,voice},key)=>(
                        <div key={key} className='cast-item'>
                            <div className='pic-wrapper'>
                        {<img  src={person.image?person.image.medium:NOT_FOUND_IMG} alt='cast poster'/>}
                        </div>
                        <div className='actor'>
                        <span className='bold'>{person.name}</span><span> | {character.name} {voice ? '| Voice' : ''}</span></div>
                        </div>
                    ))
                }
        </CastList>
    )
}

export default ShowCast
