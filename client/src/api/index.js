import axios from 'axios'
// const url = "http://localhost:5000/todos";
const url = "https://chawput-mern-todos.herokuapp.com/todos"

export const readTodos = () => axios.get(url);
export const createTodo = (todo) => axios.post(url, todo);
export const updateTodo = (id, updatedTodo) => axios.patch(`${url}/${id}`, updatedTodo);
export const deleteTodo = (id) => axios.delete(`${url}/${id}`);