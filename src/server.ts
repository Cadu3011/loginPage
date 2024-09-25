import express from 'express'
import dotenv from 'dotenv'
import router from '../src/routers/cofreRouters'
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(router)
app.listen(3000,()=>{
    console.log(`server running on port ${PORT}`)
})