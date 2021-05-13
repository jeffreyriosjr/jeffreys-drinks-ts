import React, { useContext, useEffect,useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import   SingleDrinkComponent   from '../components/SingleDrinkComponent';


const SingleDrink = () => {
    const { drinks, drink,getSingleDrink } = useContext(GlobalContext);
    // const [singledrink, setSingleDrink] = useState<Drink>();
    const { cocktailId } = useParams< {cocktailId: string}>();


  useEffect(() => {
    getSingleDrink(+cocktailId)
   
      // let foundDrink = drinks.find(
      //   pd => pd.idDrink === +cocktailId 
      // );
      
      // setSingleDrink(foundDrink );
    }, [cocktailId]);
  //   getSingleDrink(+cocktailId );
  // }, [cocktailId]);

  

  return (
    <div id='single-page'>
      {drink ? (
        <div className='row mt-3'>
          <div className='col'>
           <SingleDrinkComponent drink={drink}/>
          </div>
        </div>
      ) : (
        <h2 className='text-center'>No Pokemon by that name was found!</h2>
      )}
    </div>
  );
};



export default SingleDrink;