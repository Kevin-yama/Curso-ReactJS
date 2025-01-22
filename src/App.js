import { TitleApp } from './TitleApp';
import { SearchApp } from './SearchApp';
import { ListApp } from './ListApp';
import { TodoItem } from './TodoItem';
import { AddTodoButton } from './AddTodoButton';
import React from 'react';
import "./App.css"


const defaultTodo = [
  { text: 'lavar platos', completed: true },
  { text: 'Realizar Curso', completed: false },
  { text: 'leer ', completed: true },
  { text: 'lavar plato', completed: false },

];


function App() {
  // Creacion de estado { 
  // Estado por defecto
  const [ buscadorValue , setBuscadorValue] = React.useState('');
  console.log("Encontrado: " + buscadorValue);

  // Estado derivado 
  const [todos, setTodos] = React.useState(defaultTodo);

  // estado item 
  const [todoComple , setTodoComple] = React.useState();

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
    setTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = 
      newTodos.findIndex( 
        (todo) => todo.text == text
      );

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  

  return (
    <React.Fragment>

    <div className="ventana">
        <div className="barra-superior">
            <span className="titulo">App To do </span>     
            <div className="botones">
                <span className="boton minimizar" >🗕</span>
                <span className="boton cerrar" >❌</span>
            </div>      
            
                        
        </div>
        <div className="contenido">                             
          <TitleApp         
            completed={completedTodos} 
            total={totalTodos}/>
          <SearchApp 
            buscadorValue={buscadorValue}
            setBuscadorValue={setBuscadorValue}
          />

          <ListApp>
            {todosList.map(todo => (
              <TodoItem 
                key={todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onCompleted={() => compleTodo(todo.text)}
                onDelete ={ ()=> deleteTodo(todo.text)}
              />
            ))} 
            
          </ListApp>
          <AddTodoButton />
        </div>
    </div>



    </React.Fragment>
  );
}




export default App;

