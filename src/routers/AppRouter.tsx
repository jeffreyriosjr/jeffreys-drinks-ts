import { Switch, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import  Navbar  from '../components/Navbar';

const AppRouter = () => {
    return (

        <div className='container'>
          <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route/>
          </Switch>
        </div>
        </div>
     
    );
  };
  
  export default AppRouter;
  
