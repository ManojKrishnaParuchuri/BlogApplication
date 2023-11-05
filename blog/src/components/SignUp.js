import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    mobile: "",
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
    try {
      const res = await axios.post("http://localhost:8000/api/user/signup", {
        username: inputs.username,
        mobile: inputs.mobile,
        email: inputs.email,
        password: inputs.password,
      });
      const data = res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  function handleLogin() {
    navigate("/login");
  }


  return (
    <>
    <body>
      <div className='sigbod'>
    <div className="containersig">
    <div className="sign-box">
      <h2>Register</h2>
      <form>
        <div >
          
          <label className="user-box"><input  name="username" placeholder='Username'  onChange={handleChange}
            value={inputs.username}
            type={"username"}required/></label>
        </div>
        <div >
            
            <label className="user-box"><input  name="mobile" placeholder='Mobile'  onChange={handleChange}
            value={inputs.mobile}
            type={"text"} required /></label>
          </div>
          <div >
           
            <label className="user-box" ><input  name="email" placeholder='Email' onChange={handleChange}
            value={inputs.email}
            type={"email"}required/></label>
          </div>
        <div >
          
          <label className="user-box"> <input  name="password" placeholder='password'  onChange={handleChange}
            value={inputs.password}
            type={"password"}required/></label>
        </div>
        <button type="submit" name="but" className="btn" onClick={handleSubmit} value="Submit">Submit</button>
        <p>Already Registered ? - <button onClick={handleLogin} className="btn">Login</button></p>
      </form>
    </div>
  </div>
  </div>
  </body>
  </>
  )
}
