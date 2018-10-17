import React from 'react';
import ExoplanetCard from './ExoplanetCard';

const CardContainer = ({exoplanets, removePlanet}) => {
  const details = exoplanets.map(exoplanet => {
    <ExoplanetCard   {...exoplanet}
          key={exoplanet.id}
          removeIdea={removePlanet}
    />
  })

  return(
    <div className='Container'>
      {details}
    </div>
  )
}

export default CardContainer