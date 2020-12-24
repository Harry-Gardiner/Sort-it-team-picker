const PlayerList = ({ players }) => {
    return (
        <ul>
            { players.map((player, index) => {
                return (
                    <li key={index}>
                        { player.name}
                    </li>
                )
            })}
        </ul>
    )
}

export default PlayerList;