import React from 'react';

const ExoplanetCard = ({name, mass, id, removePlanet, editText}) => {

  return(
    <div className="Card">
      <h3 name="planetName" contentEditable="true" id={id} onKeyUp={(e) => editText(e)}>{name}</h3>
      <p>{mass}</p>
      <button onClick={() => removePlanet(id)}>Delete</button>
    </div>
    )
}

export default ExoplanetCard