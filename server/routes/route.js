import express from 'express';
import { loginuser, signup, signupUser } from '../controller/user-controller.js';



const router = express.Router();


router.get('/',signupUser);
router.post("/signup" , signup);
router.post("/login",loginuser);
export default router;
