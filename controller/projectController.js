import bcrypt from 'bcryptjs'
import Project from '../model/projectSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const createProject = async (req,res,next) =>{

	const {name,repo,token,projectID} = req.body

	if(!name){
		return res.status(403).json("inputs cant be empty")
	}
	if(!repo){
		return res.status(403).json("inputs cant be empty")
	}

    const {id} = req.user
     try{
        const newProject = new Project({
    	  projectID,name,repo,token,by:id
        })
        await newProject.save()

		const payload ={
			projectID,id
		}

		const project_token = jwt.sign(payload,process.env.JWT_PROJECT_SECRET,{
			expiresIn:'1d'
		})
        return res.cookie('project_token',project_token ,{httpOnly:true,secure: false}).status(200).json(newProject);
     }
     catch(err){
       return next(err)
     }

}

export const deleteProject = async (req,res,next) =>{


    const {ID} = req.params
    // console.log(ID)
     try{
       await Project.deleteOne({_id:ID})
       return res.status(200).json("deleted")
     }
     catch(err){
       return next(err)
     }

}



export const getAllProjects = async (req,res,next) =>{

    const {id} = req.user

     try{
       const projectList = await Project.find({by:id})
       return res.status(200).json(projectList)
     }
     catch(err){
       return next(err)
     }

}

export const setProject = async (req , res, next) =>{
    
	const {projectID} = req.body
  const {id} = req.user

     try{
		const payload ={
			projectID,id
		}

		const project_token = jwt.sign(payload,process.env.JWT_PROJECT_SECRET,{
			expiresIn:'1d'
		})
        return res.cookie('project_token',project_token ,{httpOnly:true,secure: false}).status(200).json("cookie set");
     }
     catch(err){
       return next(err)
     }


}