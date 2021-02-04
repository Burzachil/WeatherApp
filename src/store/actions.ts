import {currentCityPayload, ITemperatureMode, SET_CURRENT_CITY, SET_TEMPERATURE_MODE} from "./types"

export const setCurrentCity = (city: currentCityPayload) => ({
    type: SET_CURRENT_CITY,
    payload: city
})

export const setTemperatureMode = (mode: ITemperatureMode) => ({
    type: SET_TEMPERATURE_MODE,
    payload: mode
})