/* import logo from './logo.svg'; */
/* import './App.css'; */
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';


const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar el Curso de Introducción a React', completed: false },
  { text: 'Llorar con la Llorona', completed: false }
]

function App() {
  return (
    <React.Fragment>  {/* //Es una etiqueta "transparente" porque react pide que retornnemos solo una etiqueta por componente */}
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
