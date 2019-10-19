import React, {useState} from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    const [checked, setChecked] = useState(props.item.completed)

    return (
        <div className="todo-item">
            <input type="checkbox" 
            checked={checked} 
            onChange={(e) => setChecked(e.target.checked)}
            />
            <p style={checked ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem