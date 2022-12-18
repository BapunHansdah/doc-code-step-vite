import express from 'express'
import {createProject,deleteProject,getAllProjects,setProject} from '../controller/projectController.js'


const router = express.Router()

router.post('/',createProject)
router.delete('/:ID',deleteProject)
router.get('/',getAllProjects)
router.post('/setproject',setProject)




export default router