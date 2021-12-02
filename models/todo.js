//importthe mongoose package 
import mongoose, { Mongoose } from 'mongoose'
//unpackschema& model from mongooe
const { Schema, model } = Mongoose;
//the schema defines thestructureof our collection(Table)n MongoDB
//the model definesow data will modeled for our collection
//and come along with biult in manipulate the data

//create a new schema instance specifying which
//field(column) we want in our collection(Table)
const todoschema = schema({
    title: String,
    description: String,
    dataTime: String,
    isComplete: Boolean
})


// then we make a model
//by passing in the name and a schema for or model
const Todo = model('todo', todoschema);