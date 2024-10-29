import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'



dotenv.config();



const app = express()
app.use(cors());
app.use(express.json({limit:'50mb'}))
//middleware
app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',dalleRoutes)

app.get('/',async(req,res)=>{
    res.send('hii');

})

const startServer= async()=>{
    connectDB(process.env.MONGO_URL);
    app.listen(8080,()=>console.log('Server is running on port http://localhost:8080'))
}
startServer();