import React,{useCallback} from 'react';
import NOT_FOUND_IMAGE from '../../images/not-found.png'
import { FlexGrid } from '../styled';
import ShowCard from './ShowCard';
import {useShows} from '../../misc/custom-hooks';
export const ShowGrid = ({data}) => {
    const [starredShows,dispatchStarred] = useShows();
    return <FlexGrid>
        {
            data.map(({show})=>{
                const isStarred = starredShows.includes(show.id);
                
                const onStarClick=useCallBack(()=>
                {
                    if(isStarred)
                    {
                        dispatchStarred({type:'REMOVE',showId:show.id});
                    }
                    else{
                        dispatchStarred({type:'ADD',showId:show.id});
                    }

                },[show.id,isStarred])
                return(<ShowCard key={show.id} 
                    id={show.id} 
                    name={show.name} 
                    image={show.image?show.image.medium:NOT_FOUND_IMAGE}
                    summary={show.summary}    
                    onStarClick={onStarClick}
                    isStarred={isStarred}
                />);
            })
        }
    </FlexGrid>
}

export default ShowGrid
