export const SET_CURRENT_CITY = 'SET_CURRENT_CITY'
export const SET_TEMPERATURE_MODE = 'SET_TEMPERATURE_MODE'

export type IActions = SetCurrentCity | SetTemperatureMode

export interface IAppState {
    currentCity: currentCityPayload | null
    temperatureMode: ITemperatureMode
}

export type currentCityPayload = {
    name: string,
    lat: number,
    lon: number,
    temp: number,
    description: string,
    wind: number[],
    pressure: number,
    humidity: number,
    chanceRain: number
}

export type ITemperatureMode = 'celsius' | 'fahrenheit'

export interface SetCurrentCity {
    type: typeof SET_CURRENT_CITY,
    payload: currentCityPayload
}

export interface SetTemperatureMode {
    type: typeof SET_TEMPERATURE_MODE,
    payload: ITemperatureMode
}