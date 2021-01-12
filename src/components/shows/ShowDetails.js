import React from 'react'

const ShowDetails = ({lang,runtime,premiered,network,status}) => {
    return (
        <div>
            <div>
            <p>Status : {status?status:null}</p>
            <p>Language : {lang}</p>
            <p>Runtime : {runtime} mins</p>
            <p>Premiered : {premiered} '{network?network.name:null}'</p>
            </div>
            
        </div>
    )
}

export default ShowDetails;
