import React from 'react';


interface SingleDrinkProps  {
    drink: Drink;
 }

const SingleDrinkComponent: React.FC<SingleDrinkProps> = ({ drink }) => {
    if (!drink) {
        return <div>There is no drink by that name..</div>
    }

    console.log('singlecard',drink);
    return(
            <div className="container">
            <div className="row align-items-center no-gutters">
              <div className="card-2 mt-5"style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
                  <div className='card-title-2'>
                      
                        <h5 className='text-info'>
                        <p>
                        The Recipe:
                        </p>
                        {drink.strIngredient2}
                        {drink.strIngredient1}
                        {drink.strIngredient3}
                        </h5>
                        <h3>
                        <p className="card-text">{drink.strInstructions}</p>
                        </h3>
                        <h3>Glass Type: {drink.strGlass}</h3>
                   </div>
                   </div>
                   </div>
                    </div>
    )
};

export default SingleDrinkComponent;