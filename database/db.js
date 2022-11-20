import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
 

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${username}:${password}@mern-todo.1mfmzz8.mongodb.net/?retryWrites=true&w=majority`


    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => console.log('Database connected successfully'))

    mongoose.connection.on('disconnected', () => console.log('Database disconnected'))

    mongoose.connection.on('error', (error) => console.log('Error while connecting with the DB ',error.message))

    
}


export default Connection;