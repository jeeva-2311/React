import { useRef, useState } from "react";

export default function Player() {
  const [ derivedPlayerName, setPlayerName ] = useState(null);
  const playerName = useRef();

  return (
    <section id="player">
      <h2>Welcome { derivedPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text"  ref={playerName} />
        <button onClick={ () => {setPlayerName(playerName.current.value)} }>Set Name</button>
      </p>
    </section>
  );
}
