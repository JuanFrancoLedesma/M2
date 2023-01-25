import React from 'react';
import estilo from './Card.module.css'

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  // <Card
  //         max={Cairns.main.temp_max}
  //         min={Cairns.main.temp_min}
  //         name={Cairns.name}
  //         img={Cairns.weather[0].icon}
  //         onClose={() => alert(Cairns.name)}
  //       />
  return <div className={estilo.contenedor}>
    <button className={estilo.boton} onClick={onClose}>X</button>
    <h4>{name}</h4>
    <div className={estilo.informacion}>
      <div>
      <p>Min</p>
      <p>{min}</p>
      </div>
      <div>
      <p>Max</p>
      <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
    </div>

  </div>
};
