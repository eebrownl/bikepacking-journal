import React from 'react';
import locationMarker from '../assets/location.png'


const Trip = (props) => {
    return (
        <div className='container'>
            <div className='container--left'>
                <img src={props.image} alt='bike' className='trip--image'></img>
            </div>
            <div className='container--right'>
                <div className='trip--location-info'>
                    <img src={locationMarker} alt='marker' className='trip--marker'></img>
                    <span className='trip--location-span'>{props.location.toUpperCase()}</span>
                    <a href={props.mapLink}>View on Google Maps</a>
                </div>
                <div className='trip--location-name'>
                    <span>{props.title}</span>
                </div>
                <div className='trip--dates'>
                    <span>{props.startDate} - {props.endDate}</span>
                </div>
                <div className='trip--description'>
                    <span>{props.description}</span>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Trip;