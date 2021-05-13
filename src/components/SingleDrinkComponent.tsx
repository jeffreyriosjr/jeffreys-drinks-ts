import {Link,  useHistory } from 'react-router-dom';
import React from 'react';


interface SingleDrinkProps  {
    drink: Drink;
 }

const SingleDrinkComponent: React.FC<SingleDrinkProps> = ({ drink }) => {
  
    // const history = useHistory();

    console.log('singlecard',drink);
    return(
      
              <div className="card1 col-sm-12 col-md-4 mt-5 text-center">
                  <div className="single-drink"style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
                  </div>
                  <h2>{drink.strDrink}</h2>
                  <h2>{drink.strGlass}</h2>
                  <h2>{drink.strAlcoholic}</h2>

                  


                </div>                  
                  
            
      
    )
};

export default SingleDrinkComponent;