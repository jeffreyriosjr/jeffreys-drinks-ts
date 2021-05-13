import {useEffect, useContext, useState, ChangeEvent} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';
import DrinksCard from '../components/DrinksCard';
import instance from '../api/apiConfig';
const Homepage = () => {
    const { getDrinks, drinks} = useContext(GlobalContext);
    const[showDrinks, setShowDrinks] =useState<Drink[]>([]);
    // const [cocktails, setCocktails] = useState<Drink[]>(drinks);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchDrinks = async () => {
      try{
         
        let {data}= await instance.get('api/json/v1/1/search.php?s=');
        let items = data.drinks;
          
             setShowDrinks(items);
            console.log('showdrinks-->',showDrinks)
           getDrinks()
           console.log('drinks-->',drinks)
          

      }
      catch (e){
          console.log(e)
      }
  }

 
    
    useEffect(() => {
        // getDrinks()
        //setShowDrinks(drinks)
      //  setCocktails(drinks)
        fetchDrinks()
        console.log('useeffectdrinks-->',drinks)
        //  console.log('showDrinks', cocktails)
      
        const foundDrink = showDrinks.filter(dr => {
         
            return dr.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
            
            
          });
          console.log('searchdrinks-->',drinks)
          searchTerm === ''? setShowDrinks(showDrinks) : setShowDrinks(foundDrink);
         
     
      },[searchTerm])

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
        {showDrinks.map((drink,index)=>{
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