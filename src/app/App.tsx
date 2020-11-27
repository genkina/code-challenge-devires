import React, { useState } from 'react';
import { Component } from "react";
import Tarefas from "../component/Tarefas";

function App() {
  let [tech, setTech] =  useState(['um', 'dois', 'feijao','com','arroz']);
  const [newTech, setNewTech] =  useState('');

  function usaEstado(){
    setTech([...tech, 'tres', 'quatro','feijao','no prato']);
  }
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  function handleDelete(){
    setTech([...tech, tech[1]]);
  }
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);
  return (
    <div className="App">
      <h1>Hello Code Challenge!</h1>
      <Tarefas/>
      <div> {tech.map(t => (
          <li key={t}>{t}</li>
        ))}</div>

        
      <button type="text" onClick={usaEstado} value={newTech}  onChange={e  =>  setNewTech(e.target.value)}  />
    </div>
  );
}

export default App;
