import React from "react"
import {useSelector} from "react-redux"
import {IAppState} from "../../store/types"
import arrow from '../../assets/Path.png'
import './LocationDisplay.scss'

type LocationDisplayProps = {
    activationChangeMode: Function,
    GetCurrentCoordinates: Function
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({activationChangeMode, GetCurrentCoordinates}) => {
    const cityName = useSelector((state: IAppState) => state.currentCity?.name)

    return (
        <div className='location-display'>
            <div className="location_header">
                {cityName}
            </div>
            <div className="location_footer">
                <button onClick={() => activationChangeMode()}>Сменить город</button>
                <button onClick={() => GetCurrentCoordinates()}><img src={arrow}/>Мое местоположение</button>
            </div>
        </div>
    )
}

export default LocationDisplay

