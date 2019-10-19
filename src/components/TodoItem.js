import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
        <input type="checkbox" checked={props.completed}/>
        <p>{props.name}</p>
    </div>
  );
}

export default TodoItem;
