const TeamList = ({ teamPlayers }) => { // both teams will be passed into the same template, so prop is generic.
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

export default TeamList;