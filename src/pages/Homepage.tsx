import {useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {Link,useHistory} from 'react-router-dom';
import '../App.css';
const Homepage = () => {
    const { getDrinks, drinks} = useContext(GlobalContext)
    const history = useHistory();
    useEffect(() => {
        getDrinks() ;
     
      },[])
    return (
    <div id='home'>
        <div className='row text-center'>
            <div className='col'>
                <h2>Home page</h2>
                <h3>You have {drinks.length} items to sell</h3>
            </div>
        </div>
        {/*** Drink map */}
        <div className= 'row '>
        {drinks.map((drink,index)=>{
                return(
                    <div className= 'col-sm-12 col-md-3 mb-3' key={index}>
                        {/***drink card */}
                        <div className='card '>
                     <span onClick={() => history.push(`/cocktails/${drink.idDrink}`)}>
                         {/* image top*/}
                   
                     <div className='dr-bg-img' style = {{ backgroundImage: `url(${drink.strDrinkThumb})`}}>
                  
                  </div>
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

        </div>
                )
            })}
            
            
    </div>

 </div>
    )
};

export default Homepage;