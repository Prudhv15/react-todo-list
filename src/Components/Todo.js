import { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

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
      <span className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
        ></span>
      </span>

      <header className="input-wrapper">
        <input
          type="text"
          value={editIndex !== null ? "" : todo}
          onChange={handleChange}
        />
        {todo !== "" ? (
          <button onClick={handleClick} className="add-button">
            Add Task
          </button>
        ) : (
          ""
        )}
      </header>
      <p>Tasks {taskList.length}</p>
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
