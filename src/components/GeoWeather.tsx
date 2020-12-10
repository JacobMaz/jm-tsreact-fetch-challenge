import React, { Component } from 'react';
import GeoWeatherDisplay from './GeoWeatherDisplay';

type GeoWeatherState = {
    latitude: number,
    longitude: number,
    currentTemp: number,
    locationName: string,
    feelsLike: number

}

export default class GeoWeather extends Component<{}, GeoWeatherState>{
    constructor(props: any) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            currentTemp: 0,
            locationName: '',
            feelsLike: 0,
        }
    }

    success = (pos: any) => {
        const apiKey = 'e978d5a2fb247734c61c82b4a75e0e18'
        const lat: number = pos.coords.latitude
        const lon: number = pos.coords.longitude

        console.log(pos)
        console.log(pos.coords)
        console.log(pos.coords.latitude)
        console.log(pos.coords.longitude)
        this.setState({
            latitude: lat,
            longitude: lon
        })

        // 
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=${apiKey}`)
            .then(res=>res.json())
            .then(data=>{
                console.log('Data: ', data)
                console.log('Feels: ', data.main.feels_like)
                console.log('Location:', data.name)
                    this.setState({
                        currentTemp: data.main.temp,
                        locationName: data.name,
                        feelsLike: data.main.feels_like
                    })
            })

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.success)
    }


    render() {
        return (
            <div>
                <GeoWeatherDisplay locationName={this.state.locationName} currentTemp={this.state.currentTemp} feelsLike={this.state.feelsLike} />
            </div>
        )
    }
}