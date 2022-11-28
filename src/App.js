
import './App.css';
import React, {useState} from 'react';

function App() {
    const  [items, setItems] = useState( [
      { name: "Buy shopping", priority: "high" },
      { name: "Clean bathroom", priority: "low" },
      { name: "Car's MOT", priority: "high" }
    ] )



    const [newItem, setNewItem] = useState("");
    const itemNodes = items.map((item, index) => {
      return (

        <li key = {index} className={
          item.highPriority ? "high" : "low"
        }>
          <span>{item.name}</span>
          { item.highPriority ?
          <span className="High">High</span>
          : <radio onBlur = {() => givePriority(index)}></radio>}

        </li>
      )
    })

    const handleInputChange = (event) => {
      setNewItem(event.target.value)
    }

    const saveNewItem = (event)=>{
      event.preventDefault();
      const newItemsArr = [...items];
      newItemsArr.push({name:newItem, priority:"high"})
      setItems(newItemsArr)
      setNewItem("")
    }

    const givePriority = (index) => {
      const newPriority = [...items];
      newPriority[index].priority = "low"
      setItems(newPriority)
    }

  
  return (
    <div className="App">
      <h1>ToDo's</h1>
      <form onSubmit ={saveNewItem}>
        <label htmlFor = "new-item">Add new todo</label>
        <input

          type = "text"
          id = "new-item"
          value = {newItem}
          onChange = {handleInputChange}

        ></input>
        <input type = "submit" value = "Save new item"/>
        <label htmlFor = "priority">High</label>
        <input type="radio"
          name= "priority" value ="high">
        </input>
        <label htmlFor = "priority">Low</label>
        <input type="radio"
          name= "priority" value ="Low">
        </input>
      </form>
      


      <ul> 
        {itemNodes}
      </ul>

      
    </div>
  );
}

export default App;
