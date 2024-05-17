import './App.css';
import Router from './lib/components/Router';
import UserContextProvider from './lib/context/UserContextProvider';
// import UserContextProvider from '../context/UserContextProvider'
import { useContext } from 'react'
import UserContext from './lib/context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const {user} = useContext(UserContext);
  return (
<div className='App'>
    <UserContextProvider>
    <Router/>
    </UserContextProvider>
  </div>

  );
}

export default App;
