import React from 'react';

//Nos traemos la información de los props y se renderiza en este componente
const Recipe = ({title, calories, image, ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""  />
        </div>
    );
}

export default Recipe;