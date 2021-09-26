import React from 'react';
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backgroundColor: 'yellow',
}

function TodoCounter() {
    return (
        <h2 className="TodoCounter">Has completado 2 de 3 TODO's</h2>
    );
}

export { TodoCounter };