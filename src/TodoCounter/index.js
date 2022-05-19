import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <section>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} ToDo's</h2>
        </section>
    )
}

export { TodoCounter }