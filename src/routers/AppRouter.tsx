import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import  Navbar  from '../components/Navbar';

const AppRouter = () => {
    return (

        <div className='container'>
          <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route/>
          </Switch>
        </div>
        </div>
     
    );
  };
  
  export default AppRouter;
  
