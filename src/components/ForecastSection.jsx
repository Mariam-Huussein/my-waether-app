import { useWeather } from "./contexts/WeatherContext";
import ForecastCard from "./ForecastCard";

const ForecastSection = () => {
  const { forecast } = useWeather();

  if (!forecast || !forecast.forecast || !forecast.forecast.forecastday) {
    return null;
  }

  return (
    <section
      className="section forecast"
      aria-labelledby="forecast-label"
    >
      <h2 className="title-2" id="forecast-label">
        5 Days Forecast
      </h2>

      <div className="card card-lg forecast-card">
        <ul>
          {forecast.forecast.forecastday.map((forecastday) => (
            <ForecastCard
              key={forecastday.date_epoch}
              temp={forecastday.day.avgtemp_c}
              state={forecastday.day.condition.text}
              icon={forecastday.day.condition.icon}
              date={forecastday.date}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ForecastSection;
