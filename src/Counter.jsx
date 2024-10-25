import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const increaseCount = count + 1;
    setCount(increaseCount);
  };
  const downGradeCount = () => {
    const decreaseCount = count - 1;
    setCount(decreaseCount);
  };
  const design = {
    border: "1px solid red",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "8px",
  };
  return (
    <div style={design}>
      <h3>Counter: {count} </h3>
      <button onClick={updateCount}>Add</button>
      <button onClick={downGradeCount}>Reduce</button>
    </div>
  );
}
