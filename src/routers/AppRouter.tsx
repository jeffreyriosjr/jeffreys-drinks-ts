import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
const AppRoutes = () => {
    return (
      <div>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={HomePage} />
           
          </Switch>
        </div>
      </div>
    );
  };
  
  export default AppRoutes;
  
