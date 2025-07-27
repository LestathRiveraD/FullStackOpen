import axios from "axios"
import { useEffect, useState } from "react"

function Weather({ city }) {
    const API_KEY = import.meta.env.VITE_SOME_KEY

    const [weather, setWeather] = useState(null)


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => {
            setWeather(res.data)
        })
        .catch((err) => {
            console.log("Fatal error: ", err)
        })
    }, [city])
    
    if (weather === null)
        return null
    
    return <div>
        <h3>Weather in {city}</h3>
        <div>Temperature {weather.main.temp} Celsius</div>
        <div><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} /></div>
        <div>Wind {weather.wind.speed} m/s</div>
    </div>
}

export default Weather