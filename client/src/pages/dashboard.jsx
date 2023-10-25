import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import './dashboard.css'



const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [firstName, setFirstName] = useState("");
  

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      //if user is logged in hide login and register buttons
      
      const { status, user } = data;
      setFirstName(user);
      if(status){
        
      }
      else{
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    toast.success(`Goodbye ${firstName}`, {
      position: "top-right",
    })
    removeCookie("token");
    navigate("/");
    
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{firstName}</span>
        </h4>
        <Link to="/create">
  <button className="spot">Manage Passwords</button>
</Link>
        <button className="logout" onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );

};

export default Home;