import React from 'react';
import {Link,useHistory} from 'react-router-dom';
interface DrinksProps  {
   drink: Drink;
}
const DrinksCard:React.FC<DrinksProps > = ({drink}) => {
    const history = useHistory();
    return(
        <div className="body">
        <div className='container'>
            <div className="card">
            <div className="card-header">
            <div className='card-img text-center' style = {{ backgroundImage: `url(${drink.strDrinkThumb})`}}>
                   <h4 className='card-title text-center'>
                      <Link to={`/cocktails/${drink.idDrink}`}>The: {drink.strDrink}</Link>
                   </h4>
               </div>
           </div>
           </div>
           </div>
      </div>
    )
}
export default DrinksCard;