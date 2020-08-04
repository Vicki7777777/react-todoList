import React from 'react';
import './App.css';
import TodoList from '../src/components/TodoList'
import TodoForm from '../src/components/TodoForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
