import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav';
import Cards from './components/Cards'

export default function App() {
  const [cities, setCities] = useState([]);

  const apiKey = 'addee5a4f12c1c96e936647799badb18'


  function onSearch(ciudad) {
    console.log(ciudad)
    let apiKey = 'addee5a4f12c1c96e936647799badb18'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

    }

    function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className="App">
      { /* Tu código acá: */ }
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards cities = {cities} onClose = {onClose}
        />
      </div>
      
    </div>
  );
}
