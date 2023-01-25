import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // <Cards
  //         cities={data}
  //       />
  return <div>
    {
      props.cities
      ? 
      props.cities.map(c => (
        <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
        />
      )) :
      <h4>No hay ciudades</h4> 
    }
  </div>
};