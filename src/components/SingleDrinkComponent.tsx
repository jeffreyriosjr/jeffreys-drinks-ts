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
            <div className="row align-items-center no-gutters d-flex">
              <div className="card-2 mt-1"style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
                  <div className='card-title-2'>
                      
                        <h5 className='text-info'>
                        <p className='text-warning'>
                        The Recipe :
                        </p>
                       <p>  {drink.strIngredient2}</p>
                        <p> {drink.strIngredient1}</p>
                        <p> {drink.strIngredient3}</p>
                        </h5>
                        <h3>
                        <h3 className="card-text text-right">
                            <p>The Build : </p>
                            {drink.strInstructions}</h3>
                        </h3>
                        <h3>Glass Type: {drink.strGlass}</h3>
                   </div>
                   </div>
                   </div>
                    </div>
    )
};

export default SingleDrinkComponent;