import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  function printName(name) {
    return <li> {name.name}</li>;
  }

  return (
    <div
      style={{
        border: "1px solid orange",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <h3>Total User : {users.length}</h3>
      <div>
        <h4
          style={{
            borderBottom: "5px solid white",
            width: "30%",
            margin: "0 auto",
          }}
        >
          Names
        </h4>
        <ul style={{ listStyleType: "decimal", textAlign: "left" }}>
          {users.map(printName)}
        </ul>
      </div>
    </div>
  );
}
