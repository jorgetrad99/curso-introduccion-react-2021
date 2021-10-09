import React from 'react';
import './TodoCounter.css';

/* const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
} */

function TodoCounter({ total, completed }) {
    
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODO's</h2>
    );
}

export { TodoCounter };