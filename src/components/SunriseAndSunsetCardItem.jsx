import React from 'react'

const SunriseAndSunsetCardItem = ({title, time, imgSrc}) => {
  return (
    <div className="card-item">
        <img 
          src={imgSrc}
          alt={`${title} Icon`}
          loading='lazy'
          width="50"
        />
        <div>

            <p className="label-1">{title}</p>
            <p className="title-1">{time}</p>

        </div>
    </div>

  )
}

export default SunriseAndSunsetCardItem