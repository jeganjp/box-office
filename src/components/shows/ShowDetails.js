import React from 'react'
import { DetailsWrapper } from './ShowDetails.styled';

const ShowDetails = ({lang,runtime,premiered,network,status}) => {
    return (
        <DetailsWrapper>
            <p>Status : <span>{status?status:null}</span> </p>
            <p>Language : {lang}</p>
            <p>Runtime : {runtime} mins</p>
            <p>Premiered : {premiered} '{network?network.name:null}'</p>
            
        </DetailsWrapper>
    )
}

export default ShowDetails;
