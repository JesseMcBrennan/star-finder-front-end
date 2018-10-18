import React from 'react';
import ExoplanetCard from './ExoplanetCard';

const CardContainer = ({exoplanets, removePlanet, editText}) => {
  const details = exoplanets.map(exoplanet => {
    return <ExoplanetCard   {...exoplanet}
          key={exoplanet.id}
          removePlanet={removePlanet}
          editText={editText}
    />
  })

  return(
    <div className='Container'>
      {details}
    </div>
  )
}

export default CardContainer