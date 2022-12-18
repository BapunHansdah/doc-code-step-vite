import bcrypt from 'bcryptjs'
import User from '../model/userSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const userInfo = async (req,res,next)=>{
	const {id} = req.user
	try{
		const user = await User.findOne({_id:id}).select("username email avatar")
	    return res.status(200).json(user);
	}catch(err){
		next(err)
	}
}