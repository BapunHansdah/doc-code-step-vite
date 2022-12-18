import express from 'express'
import authRoutes from './authRoute.js'
import userRoutes from './userRoute.js'
import projectRoutes from './projectRoute.js'
import taskRoutes from './taskRoute.js'
import questionRoutes from './questionRoute.js'
import noteRoutes from './noteRoute.js'


import auth from '../middleware/auth.js'
import project from '../middleware/project.js'



const router = express.Router()

router.use('/auth',authRoutes)
router.use('/user',auth,userRoutes)
router.use('/project',auth,projectRoutes)
router.use('/task',auth,project,taskRoutes)
router.use('/note',auth,project,noteRoutes)
router.use('/question',auth,project,questionRoutes)



export default router