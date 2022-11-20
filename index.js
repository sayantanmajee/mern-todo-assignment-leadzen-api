import express from 'express';
// import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser'
import routes from './routes/routes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';


const app = express()
dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/', routes);


const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

let PORT = process.env.PORT;
if (PORT == null || PORT === "") {
    PORT = 8000;
}



const MONGODB_URI = `mongodb+srv://${username}:${password}@mern-todo.1mfmzz8.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('Database connected successfully'))

mongoose.connection.on('disconnected', () => console.log('Database disconnected'))

mongoose.connection.on('error', (error) => console.log('Error while connecting with the DB ', error.message))





app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))