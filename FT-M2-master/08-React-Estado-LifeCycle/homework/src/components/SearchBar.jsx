import React, { useState } from "react";
import './Search.css';

export default function SearchBar({onSearch}) {

  let [city, setCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        className="input"
        type="text"
        placeholder="Ciudad..."
        // value = {city}
        onChange={e => setCity(city = e.target.value)}
      />
      <input 
      className="boton" 
      type="submit" 
      value="Agregar"
      />
    </form>
  );
}
