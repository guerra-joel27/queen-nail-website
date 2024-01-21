import express, { response } from "express";
import {PORT,mongoDB_URL} from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./dataModels/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from 'cors';


// a variable that run express
// run using 'npm run dev'
    //must be in the backend folder first
// you can also check by pasting this to your browser 'localhost:5555'
    // this can be use to check endpoint created in this server
const app = express();

//Middleware for parsing json request body
app.use(express.json());

//Middleware for CORS POLICY
//Option 1: Allow all origins with defaults of cors(*)   ''
app.use(cors());
//Option 2: Only Allow Custom Origins
/*
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type']
    })
);
*/


// a simple get function
app.get('/',(request, response)=>{
    //console.log(request);
    console.log("Init Call Successed!");
    return response.status(234).send('Init Call Successed!');
});


// IMPORTANT, MAKE THE APP USE ROUTE FROM BOOKROUTE, use the endpoint from here
    // enpoint extension is from bookRoute.js
app.use('/books',bookRoute);

// establish connection to mongoDB, then/catch for error catching
mongoose
    .connect(mongoDB_URL)
    .then(()=>{
        console.log('Connect to mongoDB Successfully!');

        // Start the server
        app.listen(PORT, ()=>{
            console.log(`Server Started on PORT: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });