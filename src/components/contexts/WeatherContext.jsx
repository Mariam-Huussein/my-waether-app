import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [city, setCity] = useState("Cairo");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (selectedCity = city) => {
    try {
      setIsLoading(true);
      setErrorMessage("");

      const resCurrent = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${selectedCity}&aqi=yes`
      );
      const resForecast = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${selectedCity}&days=5`
      );
      const dataCurrent = await resCurrent.json();
      const dataForecast = await resForecast.json();
      console.log('city', city , dataCurrent ,dataForecast);

      if (resCurrent.ok && resForecast.ok) {
        setWeather(dataCurrent);
        setForecast(dataForecast);
        setCity(selectedCity);
      } else {
        setWeather(null);
        setForecast(null);
        setErrorMessage("City not found or API ERROR");
      }
    } catch (error) {
      setWeather(null);
      setForecast(null);
      setErrorMessage(error.message || "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        forecast,
        isLoading,
        errorMessage,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
