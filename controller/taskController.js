import bcrypt from 'bcryptjs'
import Task from '../model/taskSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const createTask = async (req,res,next) =>{

	const {title , description } = req.body
  const {projectID} = req.project
  const {id} = req.user

	if(!title){
		return res.status(403).json("inputs cant be empty")
	}
	

     try{
        const newTask = new Task({
    	    title,description,by:id,projectID
        })
        await newTask.save()
        return res.status(200).json(newTask)
     }
     catch(err){
       return next(err)
     }

}

export const deleteTask = async (req,res,next) =>{


    const {ID} = req.params
    const {id} = req.user



     try{
       await Task.deleteOne({_id:ID,by:id})
       return res.status(200).json("deleted")
     }
     catch(err){
       return next(err)
     }

}



export const getAllTasks = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.project

  
     try{
       const taskList = await Task.find({by:id,projectID})
       return res.status(200).json(taskList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllTasks = async (req,res,next) =>{


    const {id} = req.user
    const {projectID} = req.project


     try{
       const taskList = await Task.deleteMany({by:id,projectID})
       return res.status(200).json(taskList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllTasksByProject = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.params


     try{
       const taskList = await Task.deleteMany({by:id,projectID})
       return res.status(200).json(taskList)
     }
     catch(err){
       return next(err)
     }

}

export const editTask = async (req,res,next) =>{

    const {id} = req.user
    const {ID} = req.params
    const {projectID} = req.project
    const {title,description,status} = req.body

    // console.log(id,ID,title,description)


     try{
          if(!ID.match(/^[0-9a-fA-F]{24}$/)){
                 return res.status(404).json('invalid task')
          }

          const task = await Task.findById({_id:ID})

          if(!task){
            return res.status(404).json('task not found')
          }

          if(task.by !== id){
            return res.status(401).json('its not your task')
          }

          if(task.projectID !== projectID){
            return res.status(401).json('its not your project')
          }

          const updatedTask = await Task.findByIdAndUpdate(ID,{title,description,status},{new:true})
          return res.status(200).json(updatedTask)
     }
     catch(err){
       return next(err)
     }

}