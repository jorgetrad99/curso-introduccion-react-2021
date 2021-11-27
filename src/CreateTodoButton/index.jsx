import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

  const { setOpenModal, openModal } = React.useContext(TodoContext);

  const onClickFunction = () => {
    setOpenModal(!openModal)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={ onClickFunction }
    >
      +
    </button>
  );
}

export { CreateTodoButton };