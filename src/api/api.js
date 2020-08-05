import axios from 'axios'

const todoApi = axios.create({
    baseURL: 'https://5e9ec500fb467500166c4658.mockapi.io'
});


export const getAllTodos = () => todoApi.get('/todos');

export const dropTodo = (id) => todoApi.delete('/todos/'+id)

