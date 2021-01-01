const PlayerList = ({ players, handleClick }) => {
    return (
        <div className="card">
            <h3>Player List</h3>
            <ul className="list-group">
                {players.map((player, index) => {
                    return (
                        <div key={index} className="flex">
                            <li
                                key={index}
                                className="capitalize list-group-item flexList"
                            >
                                <p>
                                    {player.name}
                                </p>
                                <p className="smallText">skill: {player.skill}</p>
                            </li>
                            <button
                                onClick={() => handleClick(index)}
                                className="delete"
                            >
                                x
                            </button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default PlayerList;