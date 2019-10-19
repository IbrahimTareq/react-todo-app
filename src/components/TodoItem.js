import React, {useState} from "react"

function TodoItem(props) {
    const [ checked, setChecked ] = useState(props.item.completed)

    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={checked} 
            onChange={(e) => setChecked(e.target.checked)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem