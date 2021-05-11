import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import Navbar from '../components/Navbar';

const AppRouter = () => {
    return (
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/cocktails/:cocktailId'/>
            <Route/>
          </Switch>
        </div>
     
    );
  };
  
  export default AppRouter;
  
