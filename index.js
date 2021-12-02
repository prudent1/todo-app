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
const PORT = process.env.PORT ?? 5000;


app.get('/', (req, res) => {
    res.send("Hello World")

});

//make the handler an async function by adding the async keyword
app.post('/todo', (res, res)=>{
//extrate the necessary field from the body    
    const {title, description, datetime,  isCompleted} = req.body;
//craete a Todo model with the necessary field    
    const newTodo = Todo({
        title: title,
        description: description,
        datetime: datetime,
        isCompleted: isCompleted
    });
//save the Todo model and await the result
const resul= await newTodo.save();
//send back a response with the result in a json format
res.json(result)

})

//connect to MOngoDBAtlas
mongoose.connect(process.env.PRACTICE_MONGOOSE, (error) => {
    if (error) {
        return console.log("connection successful")
    } else {
        consloe.log("failed! unable to connect")
        app.listen(PORT, () => console.log(`server is ready and up and listening to PORT: ${PORT} `));
    }
})