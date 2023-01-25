import React from 'react';
import estilo from './Search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div className={estilo.search}>
    <input id='input' type="text" placeholder='Ciudad...' />
    <button className={estilo.boton} onClick={() => props.onSearch('alta gracia papaaa')}>Agregar</button>
  </div>
};