import bcrypt from 'bcryptjs'
import Note from '../model/noteSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const createNote = async (req,res,next) =>{

  const {notes} = req.body
  const {projectID} = req.project
  const {id} = req.user
    // console.log(notes,"notes")
     try{
        const newNote = new Note({
          notes,by:id,projectID
        })
        await newNote.save()
        return res.status(200).json(newNote)
     }
     catch(err){
       return next(err)
     }

}

export const deleteNote = async (req,res,next) =>{


    const {ID} = req.params
    const {id} = req.user



     try{
       await Note.deleteOne({_id:ID,by:id})
       return res.status(200).json("deleted")
     }
     catch(err){
       return next(err)
     }

}



export const getAllNotes = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.project

  
     try{
       const noteList = await Note.find({by:id,projectID})
       return res.status(200).json(noteList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllNotes = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.project


     try{
       const noteList = await Note.deleteMany({by:id,projectID})
       return res.status(200).json(noteList)
     }
     catch(err){
       return next(err)
     }

}

export const deleteAllNotesByProject = async (req,res,next) =>{

    const {id} = req.user
    const {projectID} = req.params


     try{
       const NoteList = await Note.deleteMany({by:id,projectID})
       return res.status(200).json(NoteList)
     }
     catch(err){
       return next(err)
     }

}

export const editNote = async (req,res,next) =>{

    const {id} = req.user
    const {ID} = req.params
    const {projectID} = req.project
    const {notes} = req.body

    // console.log(id,ID,title,description)


     try{
          if(!ID.match(/^[0-9a-fA-F]{24}$/)){
                 return res.status(404).json('invalid note')
          }

          const note = await Note.findById({_id:ID})

          if(!note){
            return res.status(404).json('note not found')
          }

          if(note.by !== id){
            return res.status(401).json('its not your note')
          }

          if(note.projectID !== projectID){
            return res.status(401).json('its not your project')
          }

          const updatedNote = await Note.findByIdAndUpdate(ID,{notes},{new:true})
          return res.status(200).json(updatedNote)
     }
     catch(err){
       return next(err)
     }

}