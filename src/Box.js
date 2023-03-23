import React from "react";


// Box- this component should display a div with a background color, 
// width and height based on the props passed to it.

const Box = ({backgroundColor, width, height, removeBox, id}) => {
console.log(id)
    return (
        <>       
           <div
           id={`${id}`}
           style={{
            backgroundColor: `${backgroundColor}`, 
            width: `${width}px`, 
            height:`${height}px`, 
            display:"flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            }}
            >
                <button
                id={`${id}`}
                style={{
                    position: "absolute",
                    textAlign:"center"
                    }}
                name={backgroundColor}
                onClick={removeBox}>
                    X
                </button>
           </div>

        </>

    )
}

export default Box;