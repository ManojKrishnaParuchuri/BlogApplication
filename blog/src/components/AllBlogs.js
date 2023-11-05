import React from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';
const AllBlogs = ({title,description,image,username , isUser}) => {
  console.log(title, isUser)
  return (
    <div>
      <Card sx={{ maxWidth: 345, marginLeft: "30px", width : '60%', mt: 8 , padding: "20px" , boxShadow : "25px 15px 20px #ccc", ":hover:":{
            boxShadow : "35px 30px 20px #ccc"
          } }}>
     {isUser && (
      <Box>
        <IconButton sx={{marginLeft: '250px' , marginBottom:'0px' }} ><ModeEditIcon/></IconButton>
        <IconButton ><DeleteIcon/></IconButton>
      </Box>
     )}
          
            
      <CardHeader
      
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
     

    </Card>
    </div>
  )
}

export default AllBlogs
