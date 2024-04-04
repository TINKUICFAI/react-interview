import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const handleTask = () => {
    setTask(task);
  };

  console.log(task);
  return (
    <>
      <div>
        <input type="text" />
        <button onClick={handleTask}>add task</button>
      </div>
    </>
  );
}

export default App;
