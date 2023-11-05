
import User from "../model/User.js";
import bcrypt from 'bcryptjs';

export const signupUser =  async (req,res,next) =>{
    let users;
    try{
       users = await User.find();
    }catch(error){
        return res.status(500).json({msg:  'Error while signup with user'});
    }
    if( !users ){
        return res.status(404).json({message : "No users found"});
    }
    return res.status(200).json({users});
}


export const signup = async (req, res, next) => {
    const { username, mobile,email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exists! Login Instead" });
    }
    const hashedPassword = bcrypt.hashSync(password);
  
    const user = new User({
      username,
      mobile,
      email,
      password: hashedPassword,
      blogs: [],
    });
  
    try {
      await user.save();
    } catch (err) {
      return console.log(err);
    }
    return res.status(201).json({ user });
  };

export const loginuser = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
      existingUser = await User.findOne({ email });
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      
      return res.status(404).json({ message: "Couldnt Find User By This Email" });
    }
  
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
   
     return res.status(403).json({ message: "Invalid Password!" });
   
    }
    return res.status(200).json({ message : "Login Successfull" , user: existingUser});
   
  };