import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
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
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
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
        <button className="search" onClick={() => navigate("/search")}>SEARCH</button>
        <button className="logout" onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );

};

export default Home;