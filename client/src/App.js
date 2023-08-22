import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home'
import Register from './pages/register';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
       
    </div>
    
  );
};

export default App;








       