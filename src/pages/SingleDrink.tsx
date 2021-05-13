import React, { useContext, useEffect,useState } from 'react';
import { useParams} from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import   SingleDrinkComponent   from '../components/SingleDrinkComponent';

const SingleDrink = () => {
    const { drink,getSingleDrink } = useContext(GlobalContext);
    const { cocktailId } = useParams< {cocktailId: string}>();
    
  useEffect(() => {
    getSingleDrink(+cocktailId)
    }, [cocktailId]);

  return (
    <div id='single-page'>
      {drink ? (
        <div className='row mt-3'>
          <div className='col'>
           <SingleDrinkComponent drink={drink}/>
          </div>
        </div>
      ) : (
        <h2 className='text-center'>No drink by that id was found!</h2>
      )}
    </div>
  );
};
export default SingleDrink;