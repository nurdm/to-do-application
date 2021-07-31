import React from "react";
import Todo from "./Todo";

const TodoContainer = ({data, completed, updateTodo, removeTodo, editTodo}) => {
    let todos = data;
    if (!completed){ 
        todos = data.filter(todo => todo.status === 0);
    }else{
        todos = data.filter(todo => todo.status === 1);
    }
    return (
        <div>
            <h1>{completed ? 'completed' : 'ongoing'}</h1>
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                    completed={completed}
                />
            ))}
        </div>
    );
}

export default TodoContainer;