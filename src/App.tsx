import './App.css';
import {UserContextProvider} from './lib/context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';



function App() {
  return (
<div className='App'>
    <UserContextProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
    </BrowserRouter>
    </UserContextProvider>
  </div>

  );
}

export default App;
