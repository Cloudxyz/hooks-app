import React from 'react';
import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';


export const TodoApp = () => {

    const {todos, todoCount, todoPending, handleAddTodo, handleRemoveTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>TodoApp {todoCount} <small>pendientes: {todoPending}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo}/>
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleAddTodo}/>
                </div>
            </div>
        </>
    )
}
