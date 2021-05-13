import {useEffect, useContext, useState, ChangeEvent} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';
import DrinksCard from '../components/DrinksCard';
import instance from '../api/apiConfig';
const Homepage = () => {
    const { getDrinks, drinks} = useContext(GlobalContext);
    const[showDrinks, setShowDrinks] =useState<Drink[]>(drinks);
    // const [cocktails, setCocktails] = useState<Drink[]>(drinks);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const fetchDrinks = async () => {
      try{
         
        let {data}= await instance.get('api/json/v1/1/search.php?s=');
        let items = data.drinks;
          // console.log('books', data);
          //  setShowDrinks(items);
            // getDrinks()
          

      }
      catch (e){
          console.log(e)
      }
  }

 
    
    useEffect(() => {
        getDrinks()
      //  setCocktails(drinks)
      //  fetchDrinks()
        console.log('drinks-->',drinks)
        //  console.log('showDrinks', cocktails)
        // getSearchedDrink();
        const foundDrink = showDrinks.filter(dr => {
          // getDrinks()
            return dr.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
            
          });
          searchTerm === ''? setShowDrinks(drinks) : setShowDrinks(foundDrink);
          // console.log('cocktails--->', cocktails)
     
      },[searchTerm])

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        debugger;
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