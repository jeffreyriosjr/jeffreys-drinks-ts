import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import {GlobalProvider} from './context/GlobalContext';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
      <AppRouter />

      </GlobalProvider>
      
       
    
    </Router>
  );
};

export default App;
