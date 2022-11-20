import express from 'express';
import Connection from './database/db.js';
import cors  from 'cors';
import bodyParser from 'body-parser'
import routes from './routes/routes.mjs'

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/',routes);

let PORT = process.env.PORT;
if (PORT == null || PORT === "") {
    PORT = 8000;
}

Connection();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))