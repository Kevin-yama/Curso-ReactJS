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
        <h1 > 
          Tareas Completadas {completedTodos} de {totalTodos}
        </h1>

        <h4 style={{
          fontSize: '15px',
          textAlign: "center",
          margin: 0,
          padding: '5px'

        }}>
          [============= 5% completed ]
        </h4>
      </React.Fragment>
      
    );
    
  }

export {TitleApp}