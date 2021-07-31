import React from "react";

const Todo = ({ todo, index, updateTodo, removeTodo, editTodo, completed }) => {
    return (
        <div className="todo">
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>
                <button onClick={() => updateTodo(todo.id)}>{!completed ? 'done': 'ongoing'}</button>
                <button onClick={() => editTodo(todo.id)}>Edit</button>
                {todo.status == 0 && (
                    <button onClick={() => removeTodo(todo.id)}>x</button>
                )}
            </div>
      
        </div>
    );
}

export default Todo;