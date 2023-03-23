import React from "react";
import { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import { v4 as uuidv4 } from 'uuid'

// BoxList - Place your state that contains all of the boxes here. 
// This component should render all of the Box components along with the NewBoxForm component

const BoxList = () => {
    const INITIAL_STATE = [
     
        
    ];
    const [boxes, setBoxes] = useState(INITIAL_STATE);


    const addBox = (box) => { // fucntion to add a new box, takes in the information for a box (an obj with backgroundColor, width, length)
        let newBox = { // creating a new box (basically the details of the box in the input form but with a diff reference - hence rest operator )
            ...box,
            id: uuidv4()
        }
        setBoxes(boxes => [...boxes, newBox]) // setting the array of all boxes with the new box added

    }

    const removeBox = (e) => {
        console.log(e.target.id)
        setBoxes(boxes.filter(b => 
            b.id !== e.target.id))

    }

    console.log(boxes, "ALL BOXESSS")

    return (
        <>   
        <NewBoxForm addBox={addBox}/>     

            {boxes.map((b) => <Box 
            backgroundColor={b.backgroundColor} 
            width={b.width} 
            height={b.height} 
            key={b.id} 
            id={b.id}
            removeBox={removeBox}
            /> )}

        </>

    )
}

export default BoxList;