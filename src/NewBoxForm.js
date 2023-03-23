import React from "react";
import { useState } from "react";

// NewBoxForm - this component should render a form that when submitted, creates a new Box. 
// You should be able to specify the Box’s width, height, and background color. 
// When the form is submitted, clear the input values.


const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {
        backgroundColor: "", 
        width: "", 
        height: ""
    }

    const [boxForm, setBoxForm] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target; // extracting e.target.name and e.target.value 
        setBoxForm(boxForm =>(
            {
                ...boxForm,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBox(boxForm);
        setBoxForm(INITIAL_STATE)
    }


    return (
        <>        
     <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundcolor">Background Color</label>
        <input id="backgroundcolor" name="backgroundColor" value={boxForm.backgroundColor} onChange={handleChange}/>
        <br></br>
        <label htmlFor="width">Box Width</label>
        <input id="width" name="width" value={boxForm.width} onChange={handleChange}/>
        <br></br>
        <label htmlFor="height">Box Height</label>
        <input id="height" name="height" value={boxForm.height} onChange={handleChange}/>
        <br></br>
        <button>Add Box!</button>
     </form>
        </>

    )
}






export default NewBoxForm;