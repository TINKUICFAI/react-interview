import { useState } from "react";
import "./App.css";

function App() {
  const handleCount = (iniVal) => {
    const [count, setCount] = useState(iniVal);

    function increment() {
      setCount(count + 1);
    }

    function decrement() {
      setCount(count - 1);
    }

    function reset() {
      setCount(iniVal);
    }
    return { count, increment, decrement, reset };
  };

  const { count, increment, decrement, reset } = handleCount(0);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
