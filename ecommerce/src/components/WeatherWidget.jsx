import { useState, useEffect, useRef } from "react"
import { FiX } from 'react-icons/fi';
import { Button } from "./Button";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

export const WeatherWidget = () => {
    const [isVisible, setIsVisible] = useState(true)

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [failedCities, setFailedCities] = useState(new Set())
    const [city, setCity] = useState("Тюмень")
    const [inputCity, setInputCity] = useState("")
    const [weather, setWeather] = useState(null)
    const abortControllerRef = useRef(null)

    const fetchWeatherFlow = async (cityName) => {
        if (failedCities.has(cityName.toLowerCase())) {
            setError(`Вы уже вводили "${cityName.toUpperCase()}", и данных для города нет`)
            return
        }

        if (abortControllerRef.current) abortControllerRef.current.abort()
        abortControllerRef.current = new AbortController()

        setIsLoading(true)
        setError(null)

        try{
            const geoRes = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}&lang=ru`,
                {signal: abortControllerRef.current.signal}
            );
            const geoData = await geoRes.json();

            if (geoData.length === 0) {
                setFailedCities(prev => new Set(prev).add(cityName.toLowerCase()))
                setInputCity("")
                throw new Error("Не удалось получить данные для города " + `"${cityName.toUpperCase()}"`);
            }

            const {lat, lon, name} = geoData[0];

            const weatherRes = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`,
                {signal: abortControllerRef.current.signal}
            );

            if (!weatherRes.ok) {
                throw new Error("Не удалось получить данные");
            }

            const weatherData = await weatherRes.json();
            setWeather(weatherData)
            setCity(name)
            setInputCity(name)
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(err.message)
            } 
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchWeatherFlow(city);
        return () => {
            if (abortControllerRef.current) abortControllerRef.current.abort()
        }
    }, [])

    const formatCity = (city) => {
        return `в г. ${city}`
    }

    if (!isVisible) return null;
    return(
        <div className="relative flex flex-col gap-2 bg-linear-to-r from-blue-400 to-blue-700 rounded-xl text-white p-5 shadow-md shadow-blue-200">
            <div>
                <p className="text-lg font-medium">Погода {city ? formatCity(city) : ""}</p>
                <Button
                    onClick = {() => setIsVisible(false)}
                    className="absolute top-2 right-2"
                >
                    <FiX />
                </Button>
            </div>
            <div className="text-white">
                {weather && (
                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-lg p-4 mt-2">
                        <div className="flex justify-center items-center gap-4">
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt="weather icon"
                                className="w-16 h-16"
                            />
                            <div className="text-4xl font-bold">
                                {Math.round(weather.main.temp)}°
                            </div>
                        </div>

                        <p className="text-lg capitalize font-medium">{weather.weather[0].description}</p>

                        <div className="grid grid-cols-2 gap-4 w-full mt-4 pt-4 border-t border-white/20 text-sm">
                            <div className="flex flex-col items-center">
                                <span className="opacity-70">Влажность</span>
                                <span className="font-bold">{weather.main.humidity}%</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="opacity-70">Ветер</span>
                                <span className="font-bold">{Math.round(weather.wind.speed)} м/с</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <input 
                    type="text" 
                    name="town" 
                    id="wether=town" 
                    className="w-full px-2 py-2 bg-white border border-gray-300 rounded-lg text-black text-sm focus:border-black outline-none transition-colors"
                    disabled={isLoading}
                    value={inputCity}
                    onChange={(e) => {
                        setInputCity(e.target.value)
                        setError(null)
                    }}
                />

                {error && (
                    <p className="bg-white rounded-lg p-2 mt-2 border border-gray-500 shadow-sm text-xs text-red-600">
                        {error}
                    </p>
                )}
            </div>
            
            <Button
                className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
                disabled={isLoading}
                onClick={() => fetchWeatherFlow(inputCity)}
            >
                {isLoading ? "Загрузка..." : "Получить погоду"}
            </Button>
        </div>
    )
}