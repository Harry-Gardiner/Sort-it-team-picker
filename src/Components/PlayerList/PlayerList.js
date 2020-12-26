const PlayerList = ({ players, handleClick }) => {
    return (
        <ul>
            { players.map((player, index) => {
                return (
                    <>
                        <li key={index}>
                            {player.name}
                        </li>
                        <button
                            onClick={() => handleClick(index)}
                        >
                            x
                        </button>
                    </>
                )
            })}
        </ul>
    )
}

export default PlayerList;