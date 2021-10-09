import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickFunction = (msg) => {
    alert(msg)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={ () => onClickFunction("Aquí debería abrirse el nodal") }
    >
      +
    </button>
  );
}

export { CreateTodoButton };