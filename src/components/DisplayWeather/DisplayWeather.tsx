import React from "react"
import {useSelector} from "react-redux"
import {IAppState} from "../../store/types"
import './DisplayWeather.scss'

const DisplayWeather: React.FC = () => {

    const state = useSelector((state: IAppState) => state.currentCity)
    const temperatureMode = useSelector((state: IAppState) => state.temperatureMode)

    const getTemp = () => {
        if (state) {
            const temp = Number(state.temp.toFixed(0))
            const res = temperatureMode === 'celsius' ?
                temp + '°' :
                Math.round(temp * 1.8 + 32) + '°F'
            return res
        } else {
            return ''
        }
    }

    return (
        <div className='display-weather'>
            <div className="display-weather_top">
                <div className="img"></div>
                <div className="temperature">{getTemp()}</div>
            </div>
            <div className="description">{state?.description}</div>
        </div>
    )
}

export default DisplayWeather