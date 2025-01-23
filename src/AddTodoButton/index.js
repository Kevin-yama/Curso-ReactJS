
import React from "react";
import "./AddTodoButton.css"    
import { TodoContext } from "../TodoContext";


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