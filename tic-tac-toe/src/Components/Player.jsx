import { useState } from "react"

export default function Player({initialName, symbol, activePlayer}){

    const [name, changeName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => setIsEditing((editing) => !editing);
    const changeHandler = (event)=> changeName(event.target.value);

    let playerName = isEditing ? <input type="text" value = {name} onChange={changeHandler}/> : name;

    return(
        <li className = {symbol === activePlayer ? "active" : undefined}>
            <span className="player">
                <span className="player-name">{playerName}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}