import React, { useState } from "react";

function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    if (task === "") {
      alert("Pleas eneter");
    } else {
      taskList.push(task);
      console.log(taskList);
      setTaskList([...taskList]);
      setTask("");
    }
  };

  const edit = (index) => {
    const newValue = prompt("Enter new value", taskList[index]);
    console.log(newValue);
    if (newValue === "") {
      alert("enter modified val");
    } else {
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = newValue;
      setTaskList(updatedTaskList);
    }
  };

  const deletee = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <header>
        <input type="text" value={task} onChange={handleChange} />
        <button onClick={handleClick}>{"Add task"}</button>
      </header>

      <div>
        <ul>
          {taskList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => edit(index)}>Edit</button>
              <button onClick={() => deletee(index)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { ToDo };
