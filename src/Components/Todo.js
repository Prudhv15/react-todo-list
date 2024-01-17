import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }
  const handleClick = () => {
    if (todo === "") {
      alert("Please enter task");
    } else {
      taskList.push(todo);
      setTaskList([...taskList]);
      setTodo("");
    }
  };
  function handleEdit(index) {
    const newVal = prompt("enter val", [taskList[index]]);
    const updatedTasks = [...taskList];
    updatedTasks[index] = newVal;
    setTaskList(updatedTasks);
  }
  function handleDelete(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  }

  return (
    <div id="todo-container">
      <h1>React TO DO</h1>
      <header className="input-wrapper">
        <input type="text" value={todo} onChange={handleChange} />
        {todo !== "" ? (
          <button onClick={handleClick} className="add-button">
            AddTask
          </button>
        ) : (
          ""
        )}
      </header>

      {taskList.length > 0 ? (
        <ul>
          {taskList.map((item, index) => (
            <div className="todo">
              <li key="index">{item}</li>
              <button onClick={() => handleEdit(index)} className="edit-button">
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p
          style={{
            color: "grey",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Tasks you added appear here!!
        </p>
      )}
    </div>
  );
}

export default Todo;
