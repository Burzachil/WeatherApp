import React from "react"
import {useSelector} from "react-redux"
import {IAppState} from "../../store/types"
import './WeatherParams.scss'

const WeatherParams: React.FC = () => {

    const state = useSelector((state: IAppState) => state.currentCity)

    const windMap = ['северный', 'северо-восточный', 'восточный', 'юго-восточный',
        'южный', 'юго-западный', 'западный', 'северо-западный']

    const wind = state ?
        state.wind[0] + ' м/с, ' + windMap[Math.round(state.wind[1] / 45)]  : ''

    const pressure = state ? Math.round(state.pressure / 1.33) + ' мм рт. ст.' : ''

    const humidity = state ? state.humidity + '%' : ''

    // const chanceRain = state ? state.chanceRain + '%' : ''

    return (
        <div className='weather-params'>
            <div className="weather-params_col">
                <div className="subheader">Ветер</div>
                <div className="weather-info">{wind}</div>
            </div>
            <div className="weather-params_col">
                <div className="subheader">Давление</div>
                <div className="weather-info">{pressure}</div>
            </div>
            <div className="weather-params_col">
                <div className="subheader">Влажность</div>
                <div className="weather-info">{humidity}</div>
            </div>
            <div className="weather-params_col">
                <div className="subheader">Вероятность дождя</div>
                {/*<div className="weather-info">{chanceRain}</div>*/}
            </div>
        </div>
    )
}

export default WeatherParams