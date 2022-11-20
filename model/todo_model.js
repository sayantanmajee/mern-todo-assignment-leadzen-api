import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false
    },
    timeAdded: {
        type: Date,
        default: Date.now()
    }
})


export const todoModel = mongoose.model('todo', TodoSchema);
