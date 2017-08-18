import axios from 'axios'

const API_KEY = '2a886772575f7469cb8e0db7dca02f15'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// We are using this variable to keep types consistent between action creator and reducer
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    // we will be creating a reducer to explicitly handle this type
    type: FETCH_WEATHER,
    // payload is an optional parameter which goes with type and contains data that describes this action
    payload: request 
  }
}
