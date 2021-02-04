import React, {useState} from "react"
import './LocationInput.scss'
import {weatherAPI} from "../../service/data"
import {useDispatch} from "react-redux"
import {setCurrentCity} from "../../store/actions"

type LocationInputProps = {
    disableChangeMode: Function
}

const LocationInput: React.FC<LocationInputProps> = ({disableChangeMode}) => {

    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const getWeatherByCityName = (): void => {

        weatherAPI.getWeatherByName(inputValue).then((res) => {
            const payload = {
                name: res.name,
                lat: res.coord.lat,
                lon: res.coord.lon,
                description: res.weather[0].description,
                temp: res.main.temp,
                wind: [res.wind.speed, res.wind.deg],
                pressure: res.main.pressure,
                humidity: res.main.humidity,
                chanceRain: res.main.feels_like
            }
            dispatch(setCurrentCity(payload))
            disableChangeMode()
        })
    }
    return (
        <div
            className='location-input'
            onClick={() => disableChangeMode()}
        >
            <div className='location-input_container'>
                <div
                    className='location-input_work'
                    onClick={event => event.stopPropagation()}
                >
                    <input
                        className='location-input_input'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder='Введите название города'
                    />
                    <button onClick={() => getWeatherByCityName()}>OK</button>
                </div>

            </div>

        </div>
    )
}

export default LocationInput