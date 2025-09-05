import { MdOutlineAir } from 'react-icons/md';
import CardItemAirQuality from './CardItemAirQuality'
import { useWeather } from './contexts/WeatherContext';

const CardAirQuality = () => {
    const { weather } = useWeather();
    const getAqiInfo = (index) => {
    switch (index) {
        case 1: return { text: "Good", className: "aqi-good" };
        case 2: return { text: "Moderate", className: "aqi-moderate" };
        case 3: return { text: "Unhealthy for Sensitive Groups", className: "aqi-sensitive" };
        case 4: return { text: "Unhealthy", className: "aqi-unhealthy" };
        case 5: return { text: "Very Unhealthy", className: "aqi-very-unhealthy" };
        case 6: return { text: "Hazardous", className: "aqi-hazardous" };
        default: return { text: "Unknown", className: "aqi-unknown" };
    }
    };

    const aqiIndex = weather.current.air_quality["us-epa-index"];
    const { text, className } = getAqiInfo(aqiIndex);



  return (
        <>
            <div className="card card-sm highlight-card one">

            <h3 className="title-3">Air Quality</h3>
            
            <div className="wrapper">
                <span className="m-icon"><MdOutlineAir /></span>

                <ul className="card-list">
                    <CardItemAirQuality
                    quantity={weather.current.air_quality.pm2_5.toFixed(1)}
                    chemicalCompound="PM"
                    parity="2.5"
                    />
                    <CardItemAirQuality
                    quantity={weather.current.air_quality.so2.toFixed(1)}
                    chemicalCompound="SO"
                    parity="2"
                    />
                    <CardItemAirQuality
                    quantity={weather.current.air_quality.no2.toFixed(1)}
                    chemicalCompound="No"
                    parity="2"
                    />
                    <CardItemAirQuality
                    quantity={weather.current.air_quality.o3.toFixed(1)}
                    chemicalCompound="O"
                    parity="3"
                    />
                </ul>
            </div>

            <span className={`badge ${className}`}>{text}</span>

            </div>
        </>
  )
}

export default CardAirQuality