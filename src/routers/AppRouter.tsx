import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Homepage from '../pages/Homepage';
import  Navbar  from '../components/Navbar';
=======
import HomePage from '../pages/Homepage';
import Navbar from '../components/Navbar';
>>>>>>> 998559b24a5036d90de4038894006363efba2212

const AppRouter = () => {
    return (

        <div className='container'>
<<<<<<< HEAD
          <div>
=======
>>>>>>> 998559b24a5036d90de4038894006363efba2212
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
  
