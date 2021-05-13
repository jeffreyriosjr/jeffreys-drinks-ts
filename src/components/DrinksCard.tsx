import React from 'react';
import {Link,useHistory} from 'react-router-dom';
interface DrinksProps  {
   drink: Drink;
}
const DrinksCard:React.FC<DrinksProps > = ({drink}) => {
    const history = useHistory();
    return(
        <div className='card '>
            <span onClick={() => history.push(`/cocktails/${drink.idDrink}`)}>
                           {/* image top*/}
               <div className='dr-bg-img' style = {{ backgroundImage: `url(${drink.strDrinkThumb})`}}></div>
                           {/* card body */}
               <div className='card-body'>
                   <h4 className='card-title text-center'>
                      <Link to={`/products/${drink.idDrink}`}>{drink.strDrink}</Link></h4>
                   <div className='text-center'>
                        <h5 className='card-title'>{drink.strCategory}</h5>
                        <h6 className='card-title'>{drink.strAlcoholic}</h6>
                        <h6 className='card-title'>{drink.strGlass}</h6>
                   </div>
               </div>
           </span>
      </div>
    )
}
export default DrinksCard;