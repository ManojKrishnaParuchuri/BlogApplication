
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
const navigate = useNavigate();
const [inputs, setInputs] = useState({
  title:"",
  description: "",
  image: "",
});

const sendRequest = async () =>{
  const res = await axios.post("http://localhost:8000/api/blog/add",{
    title : inputs.title,
    description: inputs.description,
    image: inputs.image,
    user: localStorage.getItem("userId")

  }).catch((error)=>{
    console.log(error);
  });
  const data = await res.data;
  return data;
}

const handlechange= (e) =>{
  setInputs((prevState) =>({
    ...prevState,
    [e.target.name] : e.target.value 
  }));
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(inputs);
  sendRequest().then((data) => console.log(data)).then(() => navigate("/blogs"));
}
  return (
<div>
  <form onSubmit={handleSubmit}>
    <Box border={3} borderColor="black" borderRadius={5}
     boxShadow="10px 10px 20px #ccc" padding={3} margin={10} marginLeft='460px' display="flex" flexDirection={'column'} width='30%'>
      <Typography fontSize={22} fontWeight={600} textAlign={'center'}>
        Post Your Blog
      </Typography>
      <InputLabel sx={{fontSize: '18px',fontWeight: '600', }}>Title</InputLabel>
      <TextField name="title" onChange={handlechange} value={inputs.title} margin='normal' variant='outlined'/>
      <InputLabel sx={{fontSize: '18px',fontWeight: '600', }}>Description</InputLabel>
      <TextField  name="description" onChange={handlechange} value={inputs.description} margin='normal' variant='outlined'/>
      <InputLabel sx={{fontSize: '18px',fontWeight: '600', }}>ImageURL</InputLabel>
      <TextField  name="image" onChange={handlechange} value={inputs.image} margin='normal' variant='outlined'/>

      <Button sx={{borderRadius: 7 , marginTop: '13px'}} variant='contained' color='secondary' type="Submit">Submit</Button>
    </Box>
  </form>
</div>
  )
}

export default AddBlog
