// Presentational component to handle displaying the todos
import React from "react";

// each todo rendered as a list item
const Todo = props => {
    return (
        <li>{props.text}</li>
    )
}

export default Todo;