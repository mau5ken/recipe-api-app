import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  
  //API de Edamam
  const APP_ID = 'aba9d0e3';
  const APP_KEY = 'cc403e21ac05575b1e71cc585661d9ac';
  
  
  //Las recetas quedan dentro de este state
  const [recipes, setRecipes] = useState([]);
  //Se crea un segundo state para que el buscador funcione dependiendo de lo que buscamos
  const[search, setSearch] = useState('');

  const[query, setQuery] = useState('chicken')



  //Nuestro useEffect nos devuelve el un query de la API cuando buscamos algo en especifico y nos lo devuelve en la url
  useEffect(() => {
    getRecipes();
  }, [query]);
  
  //Obtenemos el request y hacemos fetch a la petición
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    //Se extraen los hits del request, que es donde se provee info como: Ingredientes, calorías porciones etc.
    setRecipes(data.hits);
    console.log(data.hits);
  }


  //Actualiza nuestros resultados con un evento 
  const updateSearch = e => {
    setSearch(e.target.value);
  }

//Creamos un getSearch event para que nos de nuestro resultado sin consultar muchas veces la APi. Se consulta
//solo si le damos click a nuestro formulario
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} />
        <button className="search-button" type="submit">search</button>
      </form>
      
      	
		<div className="row">
			{recipes.map(recipe =>(
				//Se usa una prop para poder acceder a los objetos que nos trae la API accediendo a Recipe => Recipe y despues al objeto children
				//Se accede por el state que tenemos en useEffect
				<Recipe
				key={recipe.recipe.label}  
				title={recipe.recipe.label}
				calories={recipe.recipe.calories} 
				image={recipe.recipe.image}
				ingredients={recipe.recipe.ingredients}
				/>
			))}
		</div>
    </div>
  )
}

export default App;
