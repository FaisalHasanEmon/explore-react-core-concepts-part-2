import "./App.css";

import Counter from "./Counter";
import Players from "./Players";
import Users from "./User";
import Friends from "./Friends";

function App() {
  function clickMe() {
    alert("You've clicked me");
  }
  const add = (number) => {
    alert("You've added: " + (number + 5));
  };
  return (
    <>
      <Counter></Counter>
      <Players></Players>
      <Users></Users>
      <Friends></Friends>

      <button onClick={clickMe}>Click Me</button>
      <button
        onClick={() => {
          alert("You've clicked me for 2nd time");
        }}
      >
        Click Me 2
      </button>
      <button
        onClick={() => {
          add(5);
        }}
      >
        Add 5
      </button>
    </>
  );
}

export default App;
