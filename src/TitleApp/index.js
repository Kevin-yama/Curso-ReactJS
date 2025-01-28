import React from "react"
import './TitleApp.css'
import { TodoContext } from "../TodoContext";

function TitleApp() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);
    return (
      <React.Fragment>
        
        <div className="barra-superior">
        <span className="titulo">App To do </span>     
        <div className="botones">
          <span className="boton minimizar" >🗕</span>
          <span className="boton cerrar" >❌</span>
        </div>                                          
      </div>
 
 
        <h1 > 
          Tareas Completadas {completedTodos} de {totalTodos}
        </h1>

      </React.Fragment>
      
    );
    
  }

export {TitleApp}