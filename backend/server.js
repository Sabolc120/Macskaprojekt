import express from 'express'
import router from './Routes/getRoutes.js';
import delrouter from './Routes/delRoutes.js';
import uprouter from './Routes/updRoutes.js';
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  allowedHeaders: ['Content-type', 'Authorization'] 
}));

app.use(express.json());

app.use(router)
app.use(uprouter)
app.use(delrouter)




const listener = app.listen(3000, ()=>{
    console.log(`Server started on port ${listener.address().port}`)
})
