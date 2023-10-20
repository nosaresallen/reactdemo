import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const newTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <main className='container p-5'>
      <h1 className='fw-bold'>📝To-do list</h1>
      
      <label htmlFor="newtodo">Add new task:</label>
      <input className='form-control' value={input} type="text" name="" id="newtodo" onChange={(e)=>{
        setInput(e.target.value)
      }} />
      <button className="button btn btn-primary mt-2 " onClick={newTodo}>New task</button>

      <div className='card mt-3 p-3'>
        {
          todos.map((todo, index) =>(
            <div className='alert bg-light' key={index}>{todo}</div>
          ))
        }

      </div>
    </main>
  )
}

export default App
