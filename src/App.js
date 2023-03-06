
// import './App.css';
// import React,{ useState, useRef } from 'react';

// function App() {
//   const [list, setList] = useState([
//     { id: 1, name: "play", done: false },
//     { id: 2, name: "eat", done: false }
//   ])

//   return (
//     <div className="App">
//       <h2>Hello welcome to React.js Library</h2>
//       <ul>
//         {list.map((l) => (
//           <li key={l.id}>{l.name}</li>
//         ))}
//       </ul>
//       <AddTodolist setList={setList} />
//     </div>
//   );
// }

// function AddTodolist({ setList }) {
//   const inputRef = React.useRef()
//   function handleSubmit(event) {
//     event.preventDefault();
//     const text = event.target.elements.task.value;
//     const newlist = { id: 3, name: text, done: false }
//     setList(prelist => {
//       return prelist.concat(newlist);
//     })
//     inputRef.current.value= ""
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="enter list.." name='task' ref={inputRef}/>
//       <button type="submit">submit</button>
//     </form>
//   )
// }

// export default App;

import "./App.css";
import React from "react";
import { useState, useRef } from "react";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "mani", done: false },
    { id: 2, name: "basava", done: false }
  ])

  function handleUpdate(id) {
    const newList = list.map((item) => {
      return id === item.id ? {...item, done: true } : item
    })
    setList(newList)
  }
  return (
    <>
      <div className="App">
        <h2>crud operation in React</h2>
        <ul>
          {list.map((item) => (
            <li onClick={() => handleUpdate(item.id)} style={{ textDecoration: item.done ? "line-through" : "" }} key={item.id}>{item.name}</li>
          ))}
        </ul>
        <AddList setList={setList} />
      </div>
    </>
  )
};

function AddList({ setList }) {
  const clearInput = React.useRef();
  function hanleClick(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const addlist = { id: 3, name: name, done: false };
    setList(prevlist => {
      return prevlist.concat(addlist)
    });
    clearInput.current.value = ""
  }
  return (
    <form onSubmit={hanleClick}>
      <input type="text" placeholder="enter a list......" name="name" ref={clearInput} />
      <button type="submit" >Add</button>
    </form>
  )
}

export default App;

