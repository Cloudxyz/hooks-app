import React from 'react';
import { TodoTime } from './TodoTime';

export const TodoItem = ({todo, onRemoveTodo, onToggleTodo}) => {
  return (
    <li className={`d-flex justify-content-between alert ${ (todo.done == true) ? 'alert-success' : 'alert-danger'} `} onClick={() => onToggleTodo(todo.id)}>
        <span className='align-self-center'>{todo.description}</span>
        <button className='btn btn-danger ml-2' onClick={() => onRemoveTodo(todo.id)}>Borrar</button>
        <span className='align-self-center'><TodoTime /></span>
    </li>
  )
}
