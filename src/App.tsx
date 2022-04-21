import { ChangeEvent, FunctionComponent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./models";

const App: FunctionComponent = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [taskAdded, setTaskAdded] = useState<string>("");
  // const [deadlineAdded, setDeadlineAdded] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            placeholder="Task..."
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            placeholder="Do (in Days)"
            value={deadline}
            onChange={handleChange}
          />
        </div>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => (
          <TodoTask key={key} task={task} completedTask={completeTask} />
        ))}
      </div>
    </div>
  );
};

export default App;

/* <select onChange={(disable) => setDisable(disable.target.value)}>
<option hidden disabled selected>
  {" "}
  select something
</option>

<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
<button disabled={disable === ""}>Click</button> */
