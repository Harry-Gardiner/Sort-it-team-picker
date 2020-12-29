const PlayerList = ({ players, handleClick }) => {
    return (
        <ul>
            { players.map((player, index) => {
                return (
                    <div key={index}>
                        <li>
                            {player.name}
                            <span style={{ position: "absolute", right: "2rem" }}>skill: {player.skill}</span>
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