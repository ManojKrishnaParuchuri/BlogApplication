import  express  from "express";
import Router from "./routes/route.js";
import Connection from "./database/db.js";
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/user',Router);

app.use('/api/blog',blogRouter);


app.listen(8000, ()=>{
    console.log("Server is running");
});


Connection();
