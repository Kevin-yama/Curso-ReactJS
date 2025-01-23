import { TitleApp } from '../TitleApp';
import { SearchApp } from '../SearchApp';
import { ListApp } from '../ListApp';
import { TodoItem } from '../TodoItem';
import { AddTodoButton } from '../AddTodoButton';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext';



function AppUI() {
  return (
    <>

    <div className="ventana">
      <div className="barra-superior">
        <span className="titulo">App To do </span>     
        <div className="botones">
          <span className="boton minimizar" >🗕</span>
          <span className="boton cerrar" >❌</span>
        </div>                                          
      </div>

      <div className="container">                             
        <TitleApp />
        <SearchApp/>

        <TodoContext.Consumer> 
          {({
            loading,
            error,         
            todosList,
            compleTodo,
            deleteTodo
           }
          )=>(            
            <ListApp>
              {loading && (
                  <>
                    <TodosLoading />                             
                  </>
                )
              }
              {error && <TodosError/>} 
              {(!loading && todosList.length === 0) && <EmptyTodos />} 

              {todosList.map(todo => (                  
                  <TodoItem 
                    key={todo.text} 
                    text = {todo.text}
                    completed = {todo.completed}
                    onCompleted={() => compleTodo(todo.text)}
                    onDelete ={ ()=> deleteTodo(todo.text)}
                  />
                ))
              }             
          </ListApp>
          )}       
          
        </TodoContext.Consumer>
        <AddTodoButton />
      </div>
    </div>



    </>
  );
}

export { AppUI };