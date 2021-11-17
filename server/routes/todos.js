import express from 'express';
// import { Todo } from '../models/todo';
import { createTodo, readTodos, updateTodo, deleteTodo } from '../controller/todos.js'
const router = express.Router();
router.get("/", readTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;