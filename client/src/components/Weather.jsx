import React, { useEffect, useState } from 'react'
import HomeButton from './HomeButton'
import axios from 'axios'
import Top from './Top'

const apiKey = process.env.REACT_APP_WEATHER_API
const cities = ['New York', 'Cupertino', 'Seattle', 'Seoul']

function Weather() {
    const [weathers, setWeathers] = useState([])

    useEffect(() => {
        Promise.all(
            cities.map(city => {
                const apiURI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
                return axios.get(apiURI).then(response => response.data)
            })
        ).then(results => setWeathers(results))
            .catch(err => console.log(err))
    }, [])


    const convertToFahrenheit = kelvin => {
        return Math.round((kelvin - 273.15) * 9 / 5 + 32)
    }

    const getLocalTime = (timezone) => {
        const date = new Date()
        const localTime = date.getTime()
        const localOffset = date.getTimezoneOffset() * 60000
        const utc = localTime + localOffset
        const cityOffset = timezone * 1000
        const cityTime = utc + cityOffset
        const cityDate = new Date(cityTime)
        return cityDate.toLocaleTimeString()
    }

    return (
        <div>
            <Top />
            {weathers.map((weather, index) => (
                <div key={index} className="weather_box">
                    <div>
                        <h5>{weather.name}</h5>
                        <p id='weather_time'>{getLocalTime(weather.timezone)}</p>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                    </div>
                    <div className='weather_temp_text p-2'>
                        <p> {convertToFahrenheit(weather.main.temp)}°F </p>
                        <p id='max_min'> H: {convertToFahrenheit(weather.main.temp_max)}°F / L: {convertToFahrenheit(weather.main.temp_min)}°F</p>
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            ))}
            <HomeButton />
        </div>
    )
}

export default Weather
