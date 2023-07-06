import './App.css';
import React, {useState} from 'react'

import {TodoTable} from './components/TodoTable';
import {NewToDoForm} from './components/NewToDoForm';

export const App = () => {

  const [showAddToDoButton, setAddToDoButton] = useState(false);

  const [todos,setTodos] = useState([
    {rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One"},
    {rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two"},
    {rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User One"}
  ]
  );

  const addTodo = (description: string, assigned: string) => {
    let rowNumber=0
    if(todos.length>0){
      rowNumber = todos[todos.length-1].rowNumber+1;
    }
    else{
      rowNumber=1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
  };

  const deleteToDo = (deleteTodoRowNumber: number) => {

    let newTodos: ToDoModel[] = [];
    let index: number=0;
    for(let todo of todos){
      if(deleteTodoRowNumber!==todo.rowNumber){
        newTodos.push(todo); 
      }
      else{
        index = todo.rowNumber-1;
        break;
      }
    }

    for(let i = index+1; i<todos.length; ++i){
      todos[i].rowNumber-=1;
      newTodos.push(todos[i]); 
    }
    console.log(newTodos);
    setTodos(newTodos);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your ToDo's
        </div>
        <div className="card-body">
          <TodoTable todos = {todos} deleteToDo={deleteToDo}/>
          <button className="btn btn-primary" onClick={() => setAddToDoButton(!showAddToDoButton)}>
            {showAddToDoButton ? "close Add New Todo" : "Add New Todo"}
          </button>
          {showAddToDoButton && <NewToDoForm addTodo = {addTodo}/>}
          
        </div>
      </div>
    </div>
  );
}

