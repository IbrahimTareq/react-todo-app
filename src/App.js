import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from './todosData';
import './App.css';

function App() {
  const todoComponents = todosData.map(todo => <TodoItem key={todo.id} name={todo.text} completed={todo.completed}/>)
  
  return (
    <div className="todo-list">
      {todoComponents}
    </div>
  );
}

export default App;
