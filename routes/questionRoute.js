import express from 'express'
import {createQuestion,deleteQuestion,getAllQuestions,deleteAllQuestions,deleteAllQuestionsByProject,editQuestion} from '../controller/QuestionController.js'

const router = express.Router()

router.post('/',createQuestion)
router.delete('/delete/:ID',deleteQuestion)
router.get('/',getAllQuestions)
router.delete('/deleteall',deleteAllQuestions)
router.delete('/deleteall/:projectID',deleteAllQuestionsByProject)
router.put('/edit/:ID',editQuestion)



export default router