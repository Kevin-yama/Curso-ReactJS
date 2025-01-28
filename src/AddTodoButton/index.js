
import React from "react";
import "./AddTodoButton.css"    


function AddTodoButton ({setOpenModal}){
    
    return(
        <button 
            onClick={
                () => {
                    setOpenModal(state => !state)
                    console.log("click")
                    
                }

            }>
            añadir tarea            
        </button>
    );
  };
  export {AddTodoButton}