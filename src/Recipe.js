import React from 'react';

//Nos traemos la información de los props y se renderiza en este componente
const Recipe = ({title, calories, image, ingredients}) =>{
    return(    
        <div className="col l4">
            <div className="card z-depth-2">
                <div className="card-image">
                    <img src={image} alt=""  />
                    <span className="card-title">{title}</span>
                </div>
                <div className="card-content">
                <span className="card-title">Ingredients</span>
                    <ul className="">
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                    <p> <strong>Calories:</strong> {calories}</p>
                </div>    
            </div>
        </div>
    );
}



export default Recipe;