import React from "react";

// Todo- this component should display a div with the task of the todo.

const Todo = ({todo, id, removeTodo}) => {
    return (
        <>       
           <div>
            <li>{todo}  
                <button 
                id={`${id}`}
                onClick={removeTodo}>
                    x
                </button>
            </li>
           </div>

        </>

    )
}

export default Todo;