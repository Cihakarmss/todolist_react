import React, { useState } from "react";
import Modal from "./Modal";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todo, setTodo] = useState("");

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodo() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }
  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.length === 0 && <li>No todos available</li>}

        {todos.map((todo, id) => (
          <li key={ id}>
            <input type="checkbox" />
            {todo}
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
            <button
              onClick={() => {
                setTodo(todo);
                setIsModalOpen(true);
              }}
            >
              wiew
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal todo={todo} closeModal={closeModal} OnDelete={handleDeleteTodo}/>}
    </div>
  );
}
export default Todolist;
