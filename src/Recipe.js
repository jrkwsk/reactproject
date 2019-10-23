import React from 'react';

const Recipe = ({title, calories,image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredients =>
                <li>{ingredients.text}</li>
                    )}
            </ul>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;