import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const log = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:8000/api/user/login`, {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
      sendRequest()
        // In the Login component
.then((data) => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userId", data.user._id);
  dispath(authActions.login());
})

        .then(() => naviagte("/blogs"));
    
  };


 
 
  return (
    <>
    
  
    <div className='bod'>
    <div className="containerlog">
      <div className="loginbox">
        <img src={log} alt="logo" height={90} />
        <form  onSubmit={handleSubmit} method="post">

          
       
            <label className="userbox">Email<input name="email" id="email"  onChange={handleChange}
            value={inputs.email}
            type={"email"}placeholder='Email' required/></label>
          
      
            <label className="userbox">Password<input  id="password" name="password" onChange={handleChange}
            value={inputs.password}
            type={"password"} placeholder='Password' required/></label>
         
          
          <button className="btn"  type="submit">Login</button>
          
           </form>
           
      </div>
    </div>
    </div>
    </>
  );
}

export default Login;
