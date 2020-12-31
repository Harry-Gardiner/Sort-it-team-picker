const PlayerList = ({ players, handleClick }) => {
    return (
        <ul>
            { players.map((player, index) => {
                return (
                    <div key={index}>
                        <li
                            key={index}
                            className="capitalize"
                        >
                            {player.name}
                            <span>skill: {player.skill}</span>
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