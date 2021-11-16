import React, { useState , useEffect, useRef } from 'react';

function Form(properties) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const autoChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        properties.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Agrega una tarea'
            value={input}
            name='text'
            className='todo-input'
            onChange={autoChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default Form
