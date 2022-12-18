import express from 'express'
import {createNote,deleteNote,getAllNotes,deleteAllNotes,deleteAllNotesByProject,editNote} from '../controller/noteController.js'

const router = express.Router()

router.post('/',createNote)
router.delete('/delete/:ID',deleteNote)
router.get('/',getAllNotes)
router.delete('/deleteall',deleteAllNotes)
router.delete('/deleteall/:projectID',deleteAllNotesByProject)
router.put('/edit/:ID',editNote)



export default router