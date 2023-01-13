import React from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({onNewTodo}) => {

    const {description, handleInputChange, handleResetForm} = useForm({
        description: '',
    });


    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);
        handleResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Qué hay que hacer?..."
                value={description}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2 btn-block"
            >
                Agregar
            </button>
        </form>
    )
}
