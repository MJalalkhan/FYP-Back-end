import express from 'express';
import 'dotenv/config'
import Routes from './Routes/index.js';
import  mongoose  from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
// express app
const app = express();

app.use(express.json());
app.use(cookieParser());

const port = 3000
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// const cors=require("cors");
import cors from 'cors'
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors());

//connect to mongodb
const dbUrl = process.env.mongodbString;
mongoose.connect(dbUrl)
.then((result) => {
console.log(`Connected to Mongo DB`);})
.catch((err)=>console.log(err));

// listen for requests
app.listen(port ,()=>{
    console.log(`Server started on Port: ${port}`);
});

app.use('/api', Routes);

export default app;
