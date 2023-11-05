import './App.css';
import Login from './components/Login'
import { Routes,Route} from "react-router-dom"; 

import SignUp from './components/SignUp';
import Header from './components/Header';
import React from 'react';

import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
import { useSelector } from 'react-redux';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';



function App() {
 

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
console.log(isLoggedIn); // Add this line for debugging



  return (<React.Fragment>
    <header>
      <Header />
    </header>
    <main>
    <Routes>
   
    <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/myblogs" element={<UserBlogs />}/>
      <Route path="/myblogs/:id" element={<BlogDetails/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/blogs/add" element={<AddBlog/>}/>
    </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
