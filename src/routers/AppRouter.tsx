import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
    return (
        <div className='container'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/cocktails/:cocktailId'/>
            <Route/>
          </Switch>
        </div>
     
    );
  };
  
  export default AppRouter;
  
