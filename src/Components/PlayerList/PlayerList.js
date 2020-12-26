const PlayerList = ({ players, handleClick }) => {
    return (
        <ul>
            { players.map((player, index) => {
                return (
                    <div key={index}>
                        <li>
                            {player.name}
                        </li>
                        <button
                            onClick={() => handleClick(index)}
                        >
                            x
                        </button>
                    </div>
                )
            })}
        </ul>
    )
}

export default PlayerList;