import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'

// TodoList - this component should render the NewTodoForm component and should render the list of Todo components. 
// Place your state that contains all of the todos in this component.

const TodoList = () => {
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE);
    // console.log(todos, "ALL TODOs")

    const addTodo = (todo) => { 
        let newTodo = { 
            ...todo,
            id: uuidv4()
        }
        setTodos(todos => [...todos, newTodo]) // setting the array of all boxes with the new box added

    }

    const removeTodo = (e) => {
        console.log(e.target.id)
        setTodos(todos.filter(t => 
            t.id !== e.target.id))

    }



    return (
        <>   
        <NewTodoForm addTodo={addTodo}/>     

            {todos.map((t) => <Todo
            todo={t.todo}
            key={t.id} 
            id={t.id}
            removeTodo={removeTodo}
            /> )}

        </>

    )
}

export default TodoList;