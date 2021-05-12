import {useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
const HomePage = () => {
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

        </div>
    )
};

export default HomePage;