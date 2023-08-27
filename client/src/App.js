import {React, useState} from 'react';
import Navbar from './components/navbar';
import Home from './pages/home'
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';



const App = () => {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
        <Navbar />
        
        <Routes>
           
        <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
       
    </div>
    
  );
};

export default App;








       