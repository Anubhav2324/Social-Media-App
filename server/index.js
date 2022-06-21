import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';

//Routes


const app = express();

//Middleware
app.use(bodyParser.json({limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }));

dotenv.config()

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true});


//Routes usage
app.use('/auth',AuthRoute);





app.listen(process.env.PORT,()=>{
    console.log(`Server running at port ${process.env.PORT}`)
});