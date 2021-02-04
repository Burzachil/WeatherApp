import {IActions, IAppState, SET_CURRENT_CITY, SET_TEMPERATURE_MODE} from "./types"

const initialState: IAppState = {
    currentCity: null,
    temperatureMode: "celsius"
}

const reducers = (state = initialState, action: IActions) => {
    switch (action.type) {
        case SET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload
            }
        case SET_TEMPERATURE_MODE:
            return {
                ...state,
                temperatureMode: action.payload
            }
        default:
            return state
    }
}

export default reducers