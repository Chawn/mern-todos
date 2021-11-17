import mongoose from 'mongoose';
import Todo from '../models/todos.js';
export const readTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (err) {
		res.status(404).json({ err: err.message });
	}
};

export const createTodo = async (req, res) => {
	const todo = new Todo(req.body);
	try {
		await todo.save();
		res.status(201).json(todo);
	} catch (err) {
		res.status(400).json({ err: err.message });
	}
};

export const updateTodo = async (req, res) => {
	const {id} = req.params;
	const {title, content} = req.body;
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`The id ${id} is not valid`);
	}
	const todo = {title, content, _id:id};
	await Todo.findByIdAndUpdate(id, todo, {new: true});
	res.json(todo);

}

export const deleteTodo = async (req, res) => {
	const {id} = req.params;
	if(!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send(`The id ${id} is not valid`);
	}
	await Todo.findByIdAndRemove(id);
	res.json({message: 'Todo deleted successfully'});

}