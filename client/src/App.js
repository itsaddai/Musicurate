import {React} from 'react';
import Navbar from './components/navbar';
import Home from './pages/home'
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
 
  return (
    <div>
        <Navbar />
        <ToastContainer autoClose={3000} />
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








       