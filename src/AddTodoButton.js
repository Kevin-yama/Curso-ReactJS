
import "./AddTodoButton.css"    


function AddTodoButton (){
    return(
        <button 
            onClick={
                (event) => {
                    console.log("click")
                    console.log(event.target)
                }

            }>
            añadir tarea            
        </button>
    );
  };
  export {AddTodoButton}