import { useState } from "react";

export default function Players() {
  const design = {
    border: "1px solid yellow",
    marginBottom: "10px",
    borderRadius: "10px",
    padding: "10px",
  };

  const [player, playerHandler] = useState(11);

  function addPlayer() {
    const modifyPlayer = player + 1;
    playerHandler(modifyPlayer);
  }

  //   function removePlayer() {
  //     playerHandler(player - 1);
  //   }
  const removePlayer = () => playerHandler(player - 1);

  return (
    <div style={design}>
      <h3>Available Players: {player} </h3>
      <button onClick={addPlayer}>Add Player</button>
      <button onClick={removePlayer}>Remove Player</button>
    </div>
  );
}
