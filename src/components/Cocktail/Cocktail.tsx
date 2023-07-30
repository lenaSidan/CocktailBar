import React, { useEffect, useState } from 'react';
import styles from './Cocktail.module.css';

export default function Cocktail(): JSX.Element {
  const initialValue = {
    idDrink: '',
    strDrink: '',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: '',
    strIBA: null,
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
    strInstructionsES: null,
    strInstructionsDE: null,
    strInstructionsFR: null,
    strInstructionsIT: null,
    strInstructionsZH_HANS: null,
    strInstructionsZH_HANT: null,
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource: null,
    strImageAttribution: null,
    strCreativeCommonsConfirmed: '',
    dateModified: '',
  };

  const [cocktail, setCocktail] = useState(initialValue);

  async function loadCocktail(): Promise<void> {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await res.json();
    setCocktail(data.drinks[0]);
  }

  useEffect(() => {
    loadCocktail();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <button type="button" onClick={loadCocktail}>New Cocktail</button>
      <div className={styles.text}>
        <h1>{cocktail.strDrink}</h1>
        <p>
          <strong>Category:</strong> {cocktail.strCategory}
        </p>
        <p>
          <strong>Alcoholic:</strong> {cocktail.strAlcoholic}
        </p>
        <p>
          <strong>Glass:</strong> {cocktail.strGlass}
        </p>
        <h2>Instructions:</h2>
        <p>{cocktail.strInstructions}</p>
        <h2>Ingredients:</h2>
        <ul>
          <li>{cocktail.strMeasure1} {cocktail.strIngredient1}</li>
          <li>{cocktail.strMeasure2} {cocktail.strIngredient2}</li>
          <li>{cocktail.strMeasure3} {cocktail.strIngredient3}</li>
          <li>{cocktail.strMeasure4} {cocktail.strIngredient4}</li>
          <li>{cocktail.strMeasure5} {cocktail.strIngredient5}</li>
          <li>{cocktail.strMeasure7} {cocktail.strIngredient7}</li>
          <li>{cocktail.strMeasure8} {cocktail.strIngredient8}</li>
          <li>{cocktail.strMeasure9} {cocktail.strIngredient9}</li>
          <li>{cocktail.strMeasure10} {cocktail.strIngredient10}</li>
          <li>{cocktail.strMeasure11} {cocktail.strIngredient11}</li>
          <li>{cocktail.strMeasure12} {cocktail.strIngredient12}</li>
          <li>{cocktail.strMeasure13} {cocktail.strIngredient13}</li>
          <li>{cocktail.strMeasure14} {cocktail.strIngredient14}</li>
          <li>{cocktail.strMeasure15} {cocktail.strIngredient15}</li>
        </ul>
      </div>
    </div>
  );
}
