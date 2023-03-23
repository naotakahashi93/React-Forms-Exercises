import React from "react";
import { useState } from "react";

// NewTodoForm - this component should render a form with one text input for the task to be created. 
// When this form is submitted, a new Todo component should be created. 



const NewTodoForm = ({addTodo}) => {

    const INITIAL_STATE = {
        todo: "",
    }

    const [todoForm, setTodoForm] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setTodoForm(todoForm =>(
            {
                ...todoForm,
                [name]: value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(todoForm);
        setTodoForm(INITIAL_STATE)
    }

    // console.log(todoForm)

    return (
        <>        
     <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <input id="todo" name="todo" value={todoForm.todo} onChange={handleChange}/>
       
        <button>Add!</button>
     </form>
        </>

    )
}






export default NewTodoForm;