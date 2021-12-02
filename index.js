//import the express package
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
//create an instance of express server
const app = express();

//
app.use(express.json());

//const variable for our PORT number
const PORT = 5000;


app.get('/', (req, res) => {
    res.send("Hello World")

});

mongoose.connect(process.env.PRACTICE_MONGOOSE, (error) => {
    if (error) {
        return console.log("connection successful")
    } else {
        consloe.log("failed! unable to connect")
        app.listen(PORT, () => console.log(`server is ready and up and listening to PORT: ${PORT} `));
    }
})