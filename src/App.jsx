import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 flex-grow"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            className="bg-blue-500 text-white p-2 ml-2"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="border-b py-2">{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
