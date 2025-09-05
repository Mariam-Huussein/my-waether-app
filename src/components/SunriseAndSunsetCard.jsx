import { useWeather } from './contexts/WeatherContext';
import SunriseAndSunsetCardItem from './SunriseAndSunsetCardItem'

const SunriseAndSunsetCard = () => {
    const { forecast } = useWeather();
    let todayAstro =[];
    if (forecast && forecast.forecast && forecast.forecast.forecastday) {
        todayAstro = forecast.forecast.forecastday[0].astro;
    }
  return (
        <>
            <div className="card card-sm highlight-card two">

                <h3 className="title-3">Sunrise & Sunset</h3>

                <div className="card-list">
                    <SunriseAndSunsetCardItem
                    title="Sunrise"
                    time={todayAstro.sunrise}
                    imgSrc={"/images/weather_icons/sun.png"}
                    />
                    <SunriseAndSunsetCardItem
                    title="Sunset"
                    time={todayAstro.sunset}
                    imgSrc={"/images/weather_icons/moon.png"}
                    />
                </div>

            </div>

        </>
  )
}

export default SunriseAndSunsetCard