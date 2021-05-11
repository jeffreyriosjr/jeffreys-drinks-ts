import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const AppRouter = () => {
    return (
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route/>
          </Switch>
        </div>
     
    );
  };
  
  export default AppRouter;
  
