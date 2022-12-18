import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import allRoutes from './routes/index.js'
import cookieparser from 'cookie-parser'
import cors from'cors'

//deployment
import http from 'http'
import path from 'path'
const __dirname = path.resolve()


dotenv.config()

const port = process.env.PORT || 4000

const app = express()

app.use(cookieparser())
app.use(cors())
app.use(express.json())
app.use('/api',allRoutes)

const httpServer = http.createServer(app)

if(process.env.NODE_ENV==="development"){
   app.use(express.static('code-step-vite/dist'))

   app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'code-step-vite','dist','index.html'))
    })
}

else{

app.get("/api",(req,res)=>{
      res.send("api running")
})

}

// await server.start();
// app.applyMiddleware({
//      path:'/api' 
// })

app.listen(port,()=>{
   connectDB()   
	console.log(`app started at port ${port}`)
})





// G_CLIENT_ID=367945946573-275i74rm24fqb9vheo30sunkdk8pjbtd.apps.googleusercontent.com
// JWT_PROJECT_SECRET=adams
// REFRESH_TOKEN=carlsen
// ACTIVATION_TOKEN=alaska
// MONGO_URI=mongodb+srv://bapun:barun123@cluster0.ngyuagu.mongodb.net/?retryWrites=true&w=majority
// G_CLIENT_SECRET=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
// ADMIN_EMAIL=alienx121212@gmail.com
// ACCESS_TOKEN=Holmes
// G_REFRESH_TOKEN=1//04gaDWbaW3VriCgYIARAAGAQSNwF-L9IrYLqUIVyq-WFUWZRJ8Ngoq5f_WbOrp6wpc1G5ZaC0Hdc4TQ4w-ZTx9Dge6pznjsTZK_w