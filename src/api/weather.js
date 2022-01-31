import axios from "axios";
import _ from "lodash";
import Config from "../config";

const WEATHER_BASE_URL = "http://api.openweathermap.org";

const api = axios.create({
  baseURL: WEATHER_BASE_URL,
})

const getCurrentWeather = (longitude, latitude) => {
  return api.get('/data/2.5/weather', {
    params: {
      lat: latitude,
      lon: longitude,
      units: 'metric',
      appid: Config.WEATHER_API_KEY,
    }
  }).then(({ data }) => {
    const temperature = data?.main?.temp;
    return {
      temperature: _.round(temperature) === 0 ? 0 : _.round(temperature),
      weatherType: _.get(data, 'weather[0].main', undefined),
      weatherCode: _.get(data, 'weather[0].id', undefined),
    }
  })

}

export {
  getCurrentWeather,
}
