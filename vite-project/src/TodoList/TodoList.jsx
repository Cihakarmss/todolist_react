import React, { useState } from "react";
import Modal from "./Modal";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
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

        {todos.map((todo, index) => (
          <li key={9999 + index}>
            <input type="checkbox" />
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={openModal}>wiew</button>
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal todo={inputValue} closeModal={closeModal} />}
    </div>
  );
}
export default Todolist;
