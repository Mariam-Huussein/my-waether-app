import React from 'react'
import CardAirQuality from './CardAirQuality';
import SunriseAndSunsetCard from './SunriseAndSunsetCard';
import DetailsCard from './DetailsCard';

const HighlightsSection = () => {
  return (
                <section className="section highlights">
                    <div className="card card-lg">

                        <h2 className="title-2">
                            Todays Highlights
                        </h2>

                        <div className="highlights-list">
                            <CardAirQuality  />
                            <SunriseAndSunsetCard />
                            <DetailsCard />
                        </div>
                    </div>
                </section>
  )
}

export default HighlightsSection