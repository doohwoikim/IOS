import React, { useState } from 'react'

function Form(props) {
    const { onSubmitHandler, initialTodo } = props;
    const [todo, setTodo] = useState(initialTodo);

    return (
        <form onSubmit={e => { onSubmitHandler(e, { todo }) }}>
            <input type="text" name='todo' onChange={e => { setTodo(e.target.value) }} value={todo} />
            <button className='btn btn-primary' type="submit">Add</button>
        </form>
    )
}

export default Form