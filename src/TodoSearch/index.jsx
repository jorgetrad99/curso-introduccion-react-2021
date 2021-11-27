import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };
  
  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        /* onChange={onSearchValueChange} */
        value={ searchValue }
        onChange={ onSearchValueChange }
      />
    </React.Fragment>
  );
}

export { TodoSearch };