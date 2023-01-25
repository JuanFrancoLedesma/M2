import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input id='input' type="text" placeholder='Ciudad...' />
    <button onClick={() => props.onSearch('alta gracia papaaa')}>Agregar</button>
  </div>
};