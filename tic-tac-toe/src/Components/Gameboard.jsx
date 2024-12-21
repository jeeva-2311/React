export default function Gameboard({ gameBoard, onSelectPlayer}){    
    return ( 
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <ol key = {rowIndex}>
                    {row.map((item,colIndex) => <li key={colIndex}>
                        <button onClick={()=>onSelectPlayer(rowIndex, colIndex)} disabled={item ? true : false}>{item}
                        </button>
                        </li>)}
                </ol>
            ))}
        </ol>
    );
}

