import React, { useState } from 'react'

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleSetTodo(e) {
        setTodo({...todo, task: e.target.value});        
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(todo.task.trim()){
            addTodo({...todo, id: todo.task});
            // clear task
            setTodo({...todo, task:""});
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"
                    value= {todo.task}
                    onChange={handleSetTodo}
            />            
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm
