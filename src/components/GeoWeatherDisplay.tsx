import React from 'react';


const GeoWeatherDisplay = (props: any) => {
    console.log(props.results)

    return (
        <div>
            <h1>Current Weather</h1>
            <h3>Location: {props.locationName}</h3>
            <h5>Currnet Temp: {props.currentTemp} &deg;F</h5>
            <p>Feels like: {props.feelsLike} &deg;F</p>
        </div>
    )
}

export default GeoWeatherDisplay;

