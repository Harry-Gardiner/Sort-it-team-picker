const TeamList = ({ teamPlayers }) => {
    return (
        <ul>
            {
                teamPlayers.map((player, index) => {
                    return (
                        <li key={index}>
                            {player.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}