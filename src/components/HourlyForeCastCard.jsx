const HourlyForeCastCard = ({ hour, icon, rate, title }) => {
      const zTranslate =
    title == "Wind Speed"
      ? parseFloat(rate)
      : 0;

  return (
    <li className="slider-item">
      <div className="card card-sm slider-card">
        <p className="body-3">{hour}</p>
        <img
          src={icon}
          width="48"
          height="48"
          loading="lazy"
          alt={title}
          className="weather-icon"
          style={
            title == "Wind Speed"
              ? { transform: `rotateZ(${zTranslate}deg)` }
              : {}
          }
        />
        <p className="body-3">{rate}</p>
      </div>
    </li>
  );
};

export default HourlyForeCastCard;
