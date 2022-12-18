import bcrypt from 'bcryptjs'
import Question from '../model/questionSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const createQuestion = async (req,res,next) =>{

	const {title , description,answer } = req.body
  const {projectID} = req.project
  const {id} = req.user

	if(!title){
		return res.status(403).json("inputs cant be empty")
	}
	

     try{
        const newQuestion = new Question({
    	    title,description,by:id,projectID,answer
        })
        await newQuestion.save()
        return res.status(200).json(newQuestion)
     }
     catch(err){
       return next(err)
     }

}

export const deleteQuestion = async (req,res,next) =>{


    const {ID} = req.params
    const {id} = req.user



     try{
       await Question.deleteOne({_id:ID,by:id})
       return res.status(200).json("deleted")
     }
     catch(err){
       return next(err)
     }

}



export const getAllQuestions = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.project

  
     try{
       const questionList = await Question.find({by:id,projectID})
       return res.status(200).json(questionList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllQuestions = async (req,res,next) =>{


    const {id} = req.user
    const {projectID} = req.project


     try{
       const questionList = await Question.deleteMany({by:id,projectID})
       return res.status(200).json(questionList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllQuestionsByProject = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.params


     try{
       const questionList = await Question.deleteMany({by:id,projectID})
       return res.status(200).json(questionList)
     }
     catch(err){
       return next(err)
     }

}

export const editQuestion = async (req,res,next) =>{

    const {id} = req.user
    const {ID} = req.params
    const {projectID} = req.project
    const {title,description,status,answer} = req.body

    // console.log(id,ID,title,description)


     try{
          if(!ID.match(/^[0-9a-fA-F]{24}$/)){
                 return res.status(404).json('invalid question')
          }

          const question = await Question.findById({_id:ID})

          if(!question){
            return res.status(404).json('question not found')
          }

          if(question.by !== id){
            return res.status(401).json('its not your question')
          }

          if(question.projectID !== projectID){
            return res.status(401).json('its not your project')
          }

          const updatedQuestion = await Question.findByIdAndUpdate(ID,{title,description,status,answer},{new:true})
          return res.status(200).json(updatedQuestion)
     }
     catch(err){
       return next(err)
     }

}