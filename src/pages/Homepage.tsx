import {useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';
import DrinksCard from '../components/DrinksCard';
const Homepage = () => {
    const { getDrinks, drinks} = useContext(GlobalContext)
    
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
                        <DrinksCard drink={drink}/>
                    </div>
                )
            })}
            
            
    </div>

 </div>
    )
};

export default Homepage;