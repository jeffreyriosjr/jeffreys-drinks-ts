
import React, {useContext} from 'react';
import{GlobalContext} from '../context/GlobalContext';


// interface SingleDrinkProps {
//     drink: Drink | undefined;
// }

const SingleDrinkComponent: React.FC= () => {
    const { drink } = useContext(GlobalContext);
    if (!drink) {
        return <div>There is no drink to show!</div>;
      }
      
    console.log('singlecard',drink);
    


    return(
        <div className='card'>
            <div className='row'>
                <h3>{drink.strDrink}</h3>
                <div className='col-sm-12 col-md-4'>
                    <div className='drink-img-container p-3'>
                        <div className='drink-img' style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>
                        </div>
                    </div>
                </div>

                <div className='sm-12 md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>{drink.strDrink}</h3>
                        <div className="card-details">
                            <h4>Category</h4>
                            <p>{drink.strCategory}</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
};

export default SingleDrinkComponent;