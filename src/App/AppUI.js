import { TitleApp } from '../TitleApp';
import { SearchApp } from '../SearchApp';
import { ListApp } from '../ListApp';
import { TodoItem } from '../TodoItem';
import { AddTodoButton } from '../AddTodoButton';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import React from 'react';
import { TodoForm } from '../TodoForm';



function AppUI() {
  const {
    loading,
    error,
    todosList,
    compleTodo,
    deleteTodo,
    openModal,
    setopenModal,
  } = React.useContext(TodoContext);
  return (
    <>

      <div className="ventana">

        <TitleApp />


        <SearchApp />
        <ListApp>
          {loading && (
            <>
              <TodosLoading />
            </>
          )
          }
          {error && <TodosError />}
          {(!loading && todosList.length === 0) && <EmptyTodos />}
          {todosList.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => compleTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
          }
        </ListApp>
        <AddTodoButton
          setOpenModal={setopenModal}
        />

        {openModal &&
          <Modal>
            <TodoForm />
          </Modal>
        }
      </div>






    </>
  );
}

export { AppUI };