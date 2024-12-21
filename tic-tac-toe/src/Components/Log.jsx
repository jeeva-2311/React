export default function Log({gameTurns}){
    return (
        <ol id="log">
            {gameTurns.map((item, index) => (
                <li key = {index}>
                    {item.player} selected {item.square.row+1 * item.square.col+1}
                </li>
            ))}
        </ol>
    );
}