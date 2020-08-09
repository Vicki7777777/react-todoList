import axios from 'axios'

const todoApi = axios.create({
    baseURL: 'http://localhost:3500'
});


export const getAllTodos = () => todoApi.get('/todos');

export const dropTodo = (id) => todoApi.delete('/todos/'+id);

export const updateTodo = (content,status) =>todoApi.post('/todos/',{
    content: content,
    status: status
})

export const putTodo = (id,status)=> todoApi.put('/todos/'+id,{status: status})

