import React, { useState } from "react";
import Todolist from "./Todolist";
import "./App.css";
const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [Items, SetItems] = useState([]);

  const itemEvent = (e) => {
    setinputlist(e.target.value);
  };
  const listOfItem = () => {
    SetItems((oldvalue) => {
      return [...oldvalue, inputlist];
    });
    setinputlist("");
  };
  const deleteItem=(id)=>{
   console.log("clicked");
   SetItems((olditem)=>{
    return olditem.filter((arrEle,index)=>{
      return index!==id;
    });
   });
  };
  return (
    <div className="main">
      <h1>ToDo List</h1>
      <div className="inp">
        <input
          type="text"
          placeholder="Enter the task"
          value={inputlist}
          onChange={itemEvent}
        />
        <button className="btn" onClick={listOfItem}>
          +
        </button>
      </div>
      <ol>
        {Items.map((itemval ,index) => {
          return (
              <Todolist   key={index} id={index}  itemval1={itemval} onSelect={deleteItem} />
          );
        })}
      </ol>
    </div>
  );
};

export default App;
