import React, { useState } from 'react';
const Tarefas = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Todo-input"
          placeholder="Digite"
          onChange={setNewTask}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default Tarefas;