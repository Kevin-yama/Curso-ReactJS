import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('Retro_do_v1', []);
      
    //let parseTodos = JSON.parse(localStorageTodo);
    //const [todos, saveTodos] = useLocalStorage('Retro_do_v1', []);
    
    // Creacion de estado { 
    // Estado por defecto
    const [ buscadorValue , setBuscadorValue] = React.useState('');
    //console.log("Encontrado: " + buscadorValue);

    // Estado derivado 
    //const [todos, setTodos] = React.useState(parseTodos);

    // estado item 
    //const [todoComple , setTodoComple] = React.useState();

    // Total de tareas 
    const totalTodos = todos.length;


    // Filtra la cantidad de tareas completadas 
    const completedTodos = todos.filter(
        // (!!) transforma la variable en booleano 
        todo => !!todo.completed 
    ).length;
    
    // Busca concidencias en las tareas 
    const todosList = todos.filter(
        (todo) => {
        return todo.text.toLowerCase().includes(
            buscadorValue.toLowerCase()
            )

        }
    )

    const compleTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = 
        newTodos.findIndex( 
            (todo) => todo.text === text
        );

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            buscadorValue,
            setBuscadorValue,
            todosList,
            compleTodo,
            deleteTodo,
          }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext , TodoProvider };