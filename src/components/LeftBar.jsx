import CurrrentWeatherCard from "./CurrrentWeatherCard";
import ForecastSection from "./ForecastSection";

const LeftBar = () => {
  return (
      <div className="content-left">
        <section
          className="section current-weather"
          aria-label="current weather"
          data-current-weather
        >
          <CurrrentWeatherCard />
        </section>
        <ForecastSection />
      </div>
  );
};

export default LeftBar;
