// import { useState } from "react";
import "./App.css";
import { useState } from "react";
import Button from "./components/button";
function App() {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <Button onIncrement={handleIncreament} onDecrement={handleDecrement} />
    </>
  );
}

export default App;
