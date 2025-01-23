import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const {
        addTodo,
        setopenModal,        
    } = React.useContext(TodoContext)

    const [NewValue , setNewValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(NewValue);
        setopenModal(false)
        

    }
    const onCancel = (event) => {
        event.preventDefault();
        setopenModal(false)
        
    }
    const onChange = (event) => {
        setNewValue(event.target.value);                
        
    }

    return (
        <form className="ventana-add"
            onSubmit={onSubmit}
        >            
            <label> Crea una tarea </label>
            <textarea 
                value={NewValue}
                onChange={onChange}
                placeholder="cocinar la cena"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="submit"
                className="TodoForm-button 
                TodoForm-button-acept"> 
                    acept
                </button>
                <button 
                type="button"
                className="TodoForm-button 
                TodoForm-button-cancel"
                onClick={onCancel}>
                    cancel
                </button>
            </div>
            
        </form>
        
    );
}
export { TodoForm };