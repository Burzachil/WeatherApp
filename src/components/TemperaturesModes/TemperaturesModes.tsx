import React from "react"
import './TemperaturesModes.scss'
import {useDispatch, useSelector} from "react-redux"
import {IAppState} from "../../store/types"
import {setTemperatureMode} from "../../store/actions";

const TemperaturesModes: React.FC = () => {

    const temperatureMode = useSelector((state: IAppState) => state.temperatureMode)
    const dispatch = useDispatch()

    return (
        <div className='temperature-modes'>
            <div
                className={`temperature-modes_half${temperatureMode === 'celsius' ? ' selected' : ''}`}
                onClick={() => dispatch(setTemperatureMode('celsius'))}
            >C</div>
            <div
                className={`temperature-modes_half${temperatureMode === 'fahrenheit' ? ' selected' : ''}`}
                onClick={() => dispatch(setTemperatureMode('fahrenheit'))}
            >F</div>
        </div>
    )
}

export default TemperaturesModes