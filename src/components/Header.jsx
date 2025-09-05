import React from "react";
import { useWeather } from "./contexts/WeatherContext";
import { WiDayCloudyGusts } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  const { city, setCity, fetchWeather } = useWeather();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <header className="header">
      <div className="container">
        <h2 className="logo title-2">
          <WiDayCloudyGusts size={50} />
          Weather Now
        </h2>

        <div className="search-view">
          <form className="search-wrapper" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              placeholder="Search City..."
              className="search-field"
              autoComplete="off"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button type="submit" className="icon-btn leading-icon has-state">
              <span className="m-icon">
                <FaSearch />
              </span>
            </button>
          </form>
        </div>

        <div className="header-actions">
          <button
            type="button"
            className="btn-primary has-state"
            onClick={() => {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                  const { latitude, longitude } = pos.coords;
                  fetchWeather(`${latitude},${longitude}`);
                });
              } else {
                alert("Geolocation not supported.");
              }
            }}
          >
                <span className="m-icon"><FaLocationDot /></span>
                <span className="span">Current Location</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
