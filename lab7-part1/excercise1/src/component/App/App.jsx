import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { addTodo, removeTodo } from '../../TodoList/action';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../1.avif';
export default function App() {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const todoSumitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCounter(counter + 1);
      setTodo("");
    }
  }
  return (
    <div className='App'>
      <img src={logo} alt="" />
      <div className="content">
        <h1 className='text-center text-light'>To do list</h1>
        <div class="input-group">
                <input class="form-control border-end-0 border rounded-pill bg-opacity-10 bg-light text-light text-center" type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)} id="example-search-input"/>
                <span class="input-group-append">
                <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5 bg-opacity-10 text-light" type="button" onClick={todoSumitHandler}>
                Add todo
                    </button>
                </span>
            </div>
        <div >
          <ul >
            {todos?.map((todo) => (
              <li key={todo.id} className='d-flex justify-content-evenly align-items-center mt-3' >
                <p className=' fs-5 text-white fw-semibold border-bottom border-light'>{todo.task}</p>
                <button class="btn btn-outline-secondary bg-danger border-bottom-0 border rounded-pill ms-n5 bg-opacity-10 text-light " type="button" onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
                    </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <footer>
        <p className='text-center fs-2 text-light'>&copy; Nanaliuchuang-2022</p>
      </footer>
    </div>
  )
}
