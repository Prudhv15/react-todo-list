import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  const handleClick = () => {
    setTaskList([...taskList, todo]);
    setTodo("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTodo(taskList[index]); // Set the current task as the input value
  };

  const handleSave = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = todo;
    setTaskList(updatedTasks);
    setEditIndex(null);
    setTodo("");
  };

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
            Add Task
          </button>
        ) : (
          ""
        )}
      </header>

      {taskList.length > 0 ? (
        <ul>
          {taskList.map((item, index) => (
            <div className="todo" key={index}>
              {editIndex === index ? (
                <>
                  <input type="text" value={todo} onChange={handleChange} />
                  <button onClick={() => handleSave(index)}> Save</button>
                </>
              ) : (
                <>
                  <li>{item}</li>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </>
              )}
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
        <p>***</p>
      )}
    </div>
  );
}

export default Todo;
