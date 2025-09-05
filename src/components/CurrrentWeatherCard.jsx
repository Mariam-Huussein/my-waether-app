import { useWeather } from "./contexts/WeatherContext";
import { FaLocationDot, FaRegCalendar, FaClock  } from "react-icons/fa6";


const CurrrentWeatherCard = () => {
    const { weather } = useWeather();
    const formattedDate = new Date(weather.location.localtime).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    });

  return (
    <div className="card card-lg current-weather-card">
        <h2 className="title-2 card-title">Now</h2>
        <div className="weapper">
            <p className="heading">{weather.current.temp_c}<sub>°C</sub></p>
            <img src={weather.current.condition.icon} width="64" height="64"
                alt={weather.current.condition.text} className="weather-icon"/>
        </div>
        <p className="body-3">{weather.current.condition.text}</p>
        <ul className="meta-list">
            <li className="meta-items day-details" style={{flexDirection:"row"}}>
                <span className="m-icon"><FaRegCalendar /></span>
                <p className="title-3 meta-text">{formattedDate}</p>
            </li>
            <li className="meta-items day-details" style={{flexDirection:"row"}}>
                <span className="m-icon"><FaLocationDot /></span>
                <p className="title-3 meta-text">{weather.location.name}</p>
            </li>
        </ul>
    </div>
  )
}

export default CurrrentWeatherCard