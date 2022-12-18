import express from 'express'
import {createTask,deleteTask,getAllTasks,deleteAllTasks,deleteAllTasksByProject,editTask} from '../controller/taskController.js'

const router = express.Router()

router.post('/',createTask)
router.delete('/delete/:ID',deleteTask)
router.get('/',getAllTasks)
router.delete('/deleteall',deleteAllTasks)
router.delete('/deleteall/:projectID',deleteAllTasksByProject)
router.put('/edit/:ID',editTask)



export default router