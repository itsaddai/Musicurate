import {React} from 'react';
import Home from './pages/home'
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AuthRouteGuard from './components/AuthRouteGuard';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Create from './pages/create';



const App = () => {



  return (
    <div>
        <ToastContainer autoClose={3000} />
        <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/dashboard' element={<AuthRouteGuard element = {<Dashboard />} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<AuthRouteGuard element = {<Create />} />} />

        </Routes>
    </div>
    
  );
};

export default App;








       