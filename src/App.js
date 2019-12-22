import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  //API de Edamam
  const APP_ID = 'aba9d0e3';
  const APP_KEY = 'cc403e21ac05575b1e71cc585661d9ac';
  //Las recetas quedan dentro de este estado
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    getRecipes();
  }, []);
  
  //Obtenemos el request y hacemos fetch a la petición
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
    //Se extraen los hits del request, que es donde se provee info como: Ingredientes, calorías porciones etc.
    setRecipes(data.hits);
  }

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
