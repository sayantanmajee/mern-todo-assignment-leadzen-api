import express from 'express'
import { adddTodos, getAllTodos, toggleTodoDone,updateTodo, deleteTodo } from '../controller/todoController.mjs';


const routes = express.Router()

routes.post('/todos', adddTodos)
routes.get('/alltodos', getAllTodos)
routes.get('/alltodos/:id', toggleTodoDone)
routes.put('/alltodos/:id', updateTodo);
routes.delete('/alltodos/:id', deleteTodo);

export default routes;