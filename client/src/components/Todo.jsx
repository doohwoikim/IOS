import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import DeleteButton from './DeleteButton';
import { useNavigate } from 'react-router-dom';
import HomeButton from './HomeButton';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/todos")
            .then(response => {
                console.log("Get All", response.data);
                setTodos(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/todos", data)
            .then(response => {
                console.log(response);
                setTodos([...todos, response.data]);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    };


    const handleEdit = (e, todo) => {
        e.preventDefault();
        const updatedTodo = {
            todo: e.target.updatedTodo.value,
            complete: todo.complete
        };
        axios.put(`http://localhost:8000/api/todos/${todo._id}`, updatedTodo)
            .then(response => {
                console.log(response)
                navigate('/todo');
                setTodos(todos.map(item => {
                    if (item._id === todo._id) {
                        return { ...item, ...updatedTodo };
                    }
                    return item;
                }));
                setEditingTodo(null);
            })
            .catch(err => {
                console.log(err);
            });
    };


    const handleToggle = (idx) => {
        const newTodos = [...todos];
        const todo = newTodos[idx];
        todo.complete = !todo.complete;
        axios.put(`http://localhost:8000/api/todos/${todo._id}`, todo)
            .then(response => {
                setTodos(newTodos);
            })
            .catch(err => {
                console.log(err);
            });
    };


    const removeFromDom = todoId => {
        setTodos(todos.filter(todo => todo._id !== todoId));
    };

    const editTodo = (idx) => {
        setEditingTodo(idx);
    };

    return (
        <div>
            <div className="container p-5">
                <Form onSubmitHandler={onSubmitHandler} />
                <hr />
                {todos.map((todo, i) => {
                    const todoClass = [];
                    if (todo.complete) {
                        todoClass.push("line-through");
                    }
                    if (editingTodo === i) {
                        return (
                            <form key={i} onSubmit={(e) => handleEdit(e, todo)}>
                                <input type="text" name="updatedTodo" defaultValue={todo.todo} />
                                <button className="btn btn-primary">Update</button>
                            </form>
                        );
                    }
                    return (
                        <p key={i}>
                            <input type="checkbox" onChange={() => handleToggle(i)} checked={todo.complete} />
                            <span className={todoClass}>{todo.todo}</span>
                            <button className='btn btn-success' onClick={() => editTodo(i)}>Edit</button>
                            <DeleteButton id={todo._id} removeFromDom={removeFromDom} />
                        </p>
                    );
                })}
            </div>
            <HomeButton />
        </div>
    );
}

export default Todo;
