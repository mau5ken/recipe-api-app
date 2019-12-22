import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const APP_ID = 'aba9d0e3';
  const APP_KEY = 'cc403e21ac05575b1e71cc585661d9ac';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    console.log('effect has been run');
  });
  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">search</button>
      </form>
    </div>
  )
}

export default App;
