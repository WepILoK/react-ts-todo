import React from "react";

import {ITodo} from "./interfaces";

type TodoListProps = {
    todos: ITodo[],
    onToggle: (id: number) => void,
    onRemove: (id: number) => void
}

export const TodoList = ({todos, onRemove, onToggle}: TodoListProps) => {
    if (todos.length === 0) {
        return <p className="center">Пока дел нет</p>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id)
    };

    return (
        <ul>
            {todos.map((todo) =>
                <li key={todo.id} className={todo.completed ? "todo completed" : "todo"}>
                    <label>
                        <input type="checkbox"
                               checked={todo.completed}
                               onChange={onToggle.bind(null, todo.id)}/>
                        <span>{todo.title}</span>
                        <i className="material-icons red-text"
                           onClick={event => removeHandler(event, todo.id)}>delete</i>
                    </label>
                </li>
            )}
        </ul>
    )
};