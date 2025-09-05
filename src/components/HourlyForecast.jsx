import { useWeather } from "./contexts/WeatherContext";
import HourlyForeCastCard from "./HourlyForeCastCard";

const HourlyForecast = () => {
  const { forecast } = useWeather();

  if (!forecast?.forecast?.forecastday) return null;

  const todayHours = forecast.forecast.forecastday[0].hour;
  const tomorrowHours = forecast.forecast.forecastday[1]?.hour || [];
  const currentHour = new Date();

  const nextTodayHours = todayHours.filter(h => new Date(h.time) >= currentHour);

  let displayHours = nextTodayHours.slice(0, 8);
  if (displayHours.length < 8) {
    const remaining = 8 - displayHours.length;
    displayHours = [...displayHours, ...tomorrowHours.slice(0, remaining)];
  }

  const formatHour = (time) => {
    const [hourStr, minute] = time.split(":");
    let hour = parseInt(hourStr, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;
    return `${hour}:${minute} ${suffix}`;
  };

  return (
    <section className="section hourly-forecast">
      <h2 className="title-2">Upcoming Hours</h2>

      <div className="slider-container">
        <ul className="slider-list">
          {displayHours.map(hour => (
            <HourlyForeCastCard
              key={`temp-${hour.time_epoch}`}
              hour={formatHour(hour.time.split(" ")[1])}
              icon={hour.condition.icon}
              rate={`${hour.temp_c}°C`}
              title="Temperature"
            />
          ))}
        </ul>

        <ul className="slider-list">
          {displayHours.map(hour => (
            <HourlyForeCastCard
              key={`wind-${hour.time_epoch}`}
              hour={formatHour(hour.time.split(" ")[1])}
              icon="/images/weather_icons/direction.png"
              rate={`${hour.wind_kph} km/h`}
              title="Wind Speed"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HourlyForecast;
