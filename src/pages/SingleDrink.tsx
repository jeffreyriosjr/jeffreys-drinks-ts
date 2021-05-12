import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import   SingleDrinkComponent   from '../components/SingleDrinkComponent';


const SingleDrink = () => {
    const { drink, getSingleDrink } = useContext(GlobalContext);
    const { drinkId } = useParams<{ drinkId: string }>();


  useEffect(() => {
    getSingleDrink(+drinkId);
  }, [drinkId]);

  

  return (
    <div>
        <SingleDrinkComponent drink={drink}/>
    </div>

          
  );
};



export default SingleDrink;