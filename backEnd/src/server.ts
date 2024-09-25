import express from 'express'
import dotenv from 'dotenv'
import router from '../src/routers/cofreRouters'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
const PORT = process.env.PORT
app.use(bodyParser.json())
app.use(router)
app.listen(3000,()=>{
    console.log(`server running on port ${PORT}`)
})