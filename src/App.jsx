import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import RightContent from "./components/RightContent";
import { useWeather } from "./components/contexts/WeatherContext";

function App() {
  const { weather, forecast, isLoading, errorMessage, fetchWeather } = useWeather();
  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      fetchWeather("Cairo");
    }
  }, []);

  return (
    <>
      {isLoading && <p>Loading....</p>}
      {!isLoading && errorMessage && <p>{errorMessage}</p>}
      {!isLoading && weather && forecast && (
        <>
          <Header />
          <article className="container">
            <LeftBar />
            <RightContent />
          </article>
        </>
      )}
    </>
  );
}

export default App;
