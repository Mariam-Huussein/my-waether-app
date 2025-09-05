const ForecastCard = ({ temp, state, icon, date }) => {
  const dateObj = new Date(date);

  const weekday = dateObj.toLocaleDateString("en-GB", { weekday: "long" });
  const day = dateObj.toLocaleDateString("en-GB", { day: "numeric" });
  const month = dateObj.toLocaleDateString("en-GB", { month: "short" });

  return (
    <li className="card-item">
      <div className="icon-wrapper">
        <img
          src={`https:${icon}`}
          alt={state}
          width="36"
          height="36"
          className="weather-icon"
        />
        <span className="span">
          <p className="title-2">{temp}°</p>
        </span>
      </div>

      <p className="label-1">
        {day} {month}
      </p>
      <p className="label-1">{weekday}</p>
    </li>
  );
};

export default ForecastCard;
