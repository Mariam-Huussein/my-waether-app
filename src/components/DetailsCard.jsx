import DetailsCardItem from './DetailsCardItem'
import { useWeather } from './contexts/WeatherContext';
import { WiHumidity, WiBarometer, WiThermometer } from "react-icons/wi";
import { GiHeatHaze } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";

const DetailsCard = () => {
  const { weather} = useWeather();
  
  if (!weather || !weather.current) return null;
  
  return (
    <>
        <DetailsCardItem
        title="Humidity"
        icon={<WiHumidity />}
        quantity={weather.current.humidity}
        rate=" %"
        />
        <DetailsCardItem
        title="Pressure"
        icon={<GiHeatHaze />}
        quantity={weather.current.pressure_mb}
        rate=" hPa"
        />
        <DetailsCardItem
        title="visibility"
        icon={<MdVisibility />}
        quantity={weather.current.vis_km}
        rate=" %"
        />
        <DetailsCardItem
        title="feels Like"
        icon={<WiThermometer />}
        quantity={weather.current.feelslike_c}
        rate=" °C"
        />
    </>
  )
}

export default DetailsCard