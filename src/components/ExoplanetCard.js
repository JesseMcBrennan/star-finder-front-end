import React from 'react';

const ExoplanetCard = ({name, mass, id, removePlanet, editPlanet}) => {
  return(
    <div className="Card">
      <h3 contenteditable="true" onClick={() => editPlanet(id)}>{name}</h3>
      <p>{mass}</p>
      <button onClick={() => removePlanet(id)}>Delete</button>
    </div>
    )
}

export default ExoplanetCard