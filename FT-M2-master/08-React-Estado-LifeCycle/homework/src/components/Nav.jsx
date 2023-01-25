import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='contenedor'>
      <div className='titulo'>
      <img src={Logo} alt="asdasfs"/>
      <span className='texto'>Henry - Weather App</span>
      </div>
      <div className='search'>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

export default Nav;
