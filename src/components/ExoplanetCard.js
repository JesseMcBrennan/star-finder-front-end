import React from 'react';

const ExoplanetCard = ({name, mass, id, removePlanet}) => {
  return(
    <div className="Card">
      <h3>{name}</h3>
      <p>{mass}</p>
      <button onClick={() => removePlanet(id)}>Delete</button>
    </div>
    )
}

export default ExoplanetCard