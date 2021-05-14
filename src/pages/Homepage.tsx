import {useEffect, useContext, useState, ChangeEvent, useCallback, useRef} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';
import DrinksCard from '../components/DrinksCard';
import Loader from '../components/Loader';
import instance from '../api/apiConfig';

const Homepage = () => {
    const { getDrinks, drinks} = useContext(GlobalContext);
    const[showDrinks, setShowDrinks] =useState<Drink[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

  

  
   useEffect(() => {
         getDrinks()
        },[searchTerm])

      const foundDrink = drinks.filter(dr => {
         
        return dr.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
        
      });

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        setSearchTerm(event.target.value);
   }
  
    return (
    <div id='home'>
        <div className='row text-center'>
            <div className='col'>
                <h2>Home page</h2>
                <h3>You have {drinks.length} items to sell</h3>
            </div>
        </div>
          {/**Search filter */}
          <div className='row mt-5'>
        <div className='col'>
        <form action=''>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search for drinks...'
              />
            </div>
          </form>
        </div>
      </div>
        {/*** Drink map */}
        <div className= 'row mt-3'>
        {foundDrink.map((drink,index)=>{
                return(
                    <div className= 'col-sm-12 col-md-3 mb-3' key={index}>
                        {/***drink card */}
                        <DrinksCard drink={drink}/>
                    </div>
                )
            })}
            
            
    </div>

 </div>
    )
};

export default Homepage;