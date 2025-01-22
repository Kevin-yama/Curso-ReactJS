import React from "react"
import './TitleApp.css'

function TitleApp({ total , completed }) {
    return (
      <React.Fragment>
        <h1 > 
          Tareas Completadas {completed} de {total}
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