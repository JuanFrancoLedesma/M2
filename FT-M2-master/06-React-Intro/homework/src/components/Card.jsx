import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  // <Card
  //         max={Cairns.main.temp_max}
  //         min={Cairns.main.temp_min}
  //         name={Cairns.name}
  //         img={Cairns.weather[0].icon}
  //         onClose={() => alert(Cairns.name)}
  //       />
  return <div>
    <button onClick={onClose}>X</button>
    <h4>{name}</h4>
    <p>Min</p>
    <p>{min}</p>
    <p>Max</p>
    <p>{max}</p>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
  </div>
};

