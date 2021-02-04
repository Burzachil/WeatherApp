import axios from 'axios'

const weatherURL = 'https://api.openweathermap.org/data/2.5/'

const instance = axios.create({
    baseURL: weatherURL,
    params: {
        "appid": "d080a2fcd3f992aa58dda06c188dac33",
        "units": 'metric',
        "lang": "ru"
    }
})

export const weatherAPI = {
    getLocalWeather(lat: number, lon: number) {
        return instance.get(`weather?lat=${lat}&lon=${lon}`).then(res => res.data)
    },
    getWeatherByName(name: string) {
        return instance.get(`weather?q=${name}`).then(res => res.data)
    }
}

