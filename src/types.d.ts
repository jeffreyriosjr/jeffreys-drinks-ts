/*
{
id:1,
title:'...',
price:'...',
category:'...',
description:'...',
image:'...'
},
*/

type Drink = {
    idDrink: number;
    strDrink: string;
    strCategory: string;
    strInstructions: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
  
}

type InitialStateType = {
    drinks: Drink[],
    // drink: Drink | undefined,
    is_loading: boolean,
    getDrinks: () => void,
    // getSingleDrink: (drinkId: number) => void,
};

//**** reference from shopsy ****/
// Define a state type
// type InitialStateType = {
//     products: Product[];
//     cart: Product[];
//     product: Product | undefined;
//     is_loading: boolean;
//     getProducts: () => void;
//     getSingleProduct: (productId:number) => void;
//     addToCart: (product:Product) => void;
// };