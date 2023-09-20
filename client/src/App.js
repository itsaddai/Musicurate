import {React} from 'react';

import Home from './pages/home'
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AuthRouteGuard from './components/AuthRouteGuard';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
 
  return (
    <div>
        <ToastContainer autoClose={3000} />
        <Routes>
        <Route path='/' element={<AuthRouteGuard element = {<Home />} />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/register' element={<AuthRouteGuard element = {<Register />} />} />
            <Route path='/login' element={<AuthRouteGuard element = {<Login />} />} />
        </Routes>
    </div>
    
  );
};

export default App;








       