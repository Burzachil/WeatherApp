import React from "react"
import './HomePage.scss'
import Location from "../../components/Location/Location"
import DisplayWeather from "../../components/DisplayWeather/DisplayWeather"
import WeatherParams from "../../components/WeatherParams/WeatherParams"
import TemperaturesModes from "../../components/TemperaturesModes/TemperaturesModes"

const HomePage: React.FC = () => {

    return (
        <div className='home-page'>
            <Location />
            <TemperaturesModes />
            <DisplayWeather />
            <WeatherParams />
        </div>
    )
}

export default HomePage