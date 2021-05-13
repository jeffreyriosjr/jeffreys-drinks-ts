import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import  Navbar  from '../components/Navbar';
import SingleDrink from '../pages/SingleDrink';

const AppRouter = () => {
    return (

        <div className='container'>
          <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/cocktails/:cocktailId' component={SingleDrink}/>
            
          </Switch>
        </div>
        </div>
     
    );
  };
  
  export default AppRouter;
  
