
import { todoModel } from "../model/todo_model";

//controller function to add todo
export const adddTodos = async (req, res) => {
    try {
        const newTodo = await todoModel.create({
            data: req.body.data,
            timeAdded: Date.now()
        })

        //this will save the data to the DB
        await newTodo.save();

        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

//controller function to get all todos
export const getAllTodos = async (req, res) => {
    try {
        //this will save the data to the DB
        const allTodos = await todoModel.find({}).sort({ 'timeAdded': -1 })

        return res.status(200).json(allTodos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

//controller function to toggle todo done
export const toggleTodoDone = async (req, res) => {
    try {

        const todoRef = await todoModel.findById(req.params.id);

        const todo = await todoModel.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )

        await todo.save()
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const updateTodo = async (req, res) => {
    try {

        await todoModel.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        const todo = await todoModel.findById(req.params.id)
        // await todo.save()
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteTodo = async (req, res) => {
    try {

        const todo = await todoModel.findByIdAndDelete(req.params.id)
        //another way
        // const todo = await todoModel.findOneAndDelete({_id: req.params.id})
        // await todo.save()
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}