import axios from "axios";
import React from "react";
import Form from "./Form";

import TodoContainer from "./TodoContainer";

const Todos = () => {
    const [todos, setTodos] = React.useState([]);
    const [editTodo, setEditTodo] = React.useState({});

    const addTodo = form => {
        const getLastId = todos[todos.length - 1].id;
        const newTodos = [...todos, {
            id: getLastId + 1,
            title: form.title,
            description: form.description,
            status: 0,
        }];
        setTodos(newTodos);
    };

    const updateStatusTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: todo.status === 1 ? 0 : 1
                }
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const removeTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    const fetchTodos = () => {
        axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list").then((resp) => {
            console.log(resp.data);
            setTodos(resp.data);
        })
    };

    const onEditTodo = id => {
        const find = todos.find(todo => todo.id === id);
        setEditTodo(find);
    }

    const updateTodo = (id, value) => {
        const find = todos.find(todo => todo.id === id);
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    ...value,
                }
            }
            return todo;
        });
        setTodos(newTodos);
        setEditTodo({});
    }

    React.useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="todo-list">
            <Form addTodo={addTodo} editedData={editTodo} updateTodo={updateTodo} />
            <div className="container">
                <TodoContainer data={todos} updateTodo={updateStatusTodo} removeTodo={removeTodo} editTodo={onEditTodo} />
                <TodoContainer data={todos} completed updateTodo={updateStatusTodo} removeTodo={removeTodo} editTodo={onEditTodo} />
            </div>

        </div>
    )
}

export default Todos;