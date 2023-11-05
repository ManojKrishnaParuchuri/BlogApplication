import mongoose from "mongoose"
const Connection = async () =>{
    const URL = "mongodb+srv://admin:admin@cluster0.yftugmi.mongodb.net/Blog?retryWrites=true&w=majority";
    try{
       await mongoose.connect(URL, {useNewUrlParser : true})
       console.log("MongoDB Connected...")
    }catch(error){
        console.log("Error while connecting with db",error);
    }
}

export default Connection;

