import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import './Location.scss'
import {setCurrentCity} from "../../store/actions"
import {weatherAPI} from "../../service/data"
import LocationDisplay from "../LocationDisplay/LocationDisplay"
import LocationInput from "../LocationInput/LocationInput"

const Location: React.FC = () => {
    const [changeMode, setChangeMode] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        GetCurrentCoordinates()
    }, [])

    const GetCurrentCoordinates = (): void => {
        navigator.geolocation.getCurrentPosition((pos) => {

            const lat = pos.coords.latitude
            const lon = pos.coords.longitude

            weatherAPI.getLocalWeather(lat, lon).then(res => {
                const payload = {
                    name: res.name,
                    description: res.weather[0].description,
                    temp: res.main.temp,
                    wind: [res.wind.speed, res.wind.deg],
                    pressure: res.main.pressure,
                    humidity: res.main.humidity,
                    chanceRain: res.main.feels_like,
                    lat,
                    lon
                }
                dispatch(setCurrentCity(payload))
            })
        })
    }

    const Location = changeMode ?
        <LocationInput disableChangeMode={() => setChangeMode(false)}/> :
        <LocationDisplay
            activationChangeMode={() => setChangeMode(true)}
            GetCurrentCoordinates={GetCurrentCoordinates}
        />


    return (
        <div className='location'>
            {Location}
        </div>
    )
}

export default Location