import { setegid } from 'process';
import React, { useState } from 'react';
import { Component } from "react";
import Tarefas from "../component/Tarefas";
import ListItem from '../component/ListItem'

  interface IntrinsicElements {
      'onchange': any
  }
function App() {
  let [tech, setTech] =  useState([{index: 1 ,name:'um'},{index: 2 ,name: 'dois'},{index: 1 ,name:"feijao"} ]);
  const [newTech, setNewTech] : any =  useState();
  


  function handleUpdate(index: number) {
    const itensCopy : any  = Array.from(tech);
    itensCopy.splice(index, 1, { id: index });
    setTech(itensCopy);
  }
  function handleAdd() {    
    const itensCopy : any = Array.from(tech);
    itensCopy.push({id: newTech.length, value: tech});
    setTech(itensCopy);
  }
  function handleDelete(index: number ) {
    const itensCopy = Array.from(tech);
    itensCopy.splice(index, 1);
    setTech(itensCopy);
  }
 // useEffect(() => {
  //  const storageTech = localStorage.getItem('tech');
  //  if (storageTech) {
  //    setTech(JSON.parse(storageTech));
  //  }
 // }, []);
  return (
    <div className="App">
      <h1>Hello Code Challenge!</h1>
      
      <div id="42" className="listagem"> {tech.map( index => (
          <Tarefas onChange = {(event) => handleUpdate(event, index)}
            onDelete = {() => handleDelete(index)}></Tarefas>
        ))}</div>

        
      <button type="button" onClick={handleAdd} value={newTech} onBlur={usaEstado} >mais</button>
      <button type="button"  onClick={handleDelete} onBlur={usaEstado} > delete </button>
    </div>
  );
}

export default App;
