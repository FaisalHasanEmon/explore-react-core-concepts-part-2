import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
  const [friends, handleFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rem) => rem.json())
      .then((data) => handleFriends(data));
  }, []);

  return (
    <div
      style={{
        border: "2px solid white",
        padding: "5px",
        borderRadius: "6px",
        backgroundColor: "lightsteelblue",
        marginTop: "10px",
        marginBottom: "10px",
        color: "black",
      }}
    >
      <h3>Friends Information</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
