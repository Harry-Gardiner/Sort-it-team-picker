const TeamList = ({ teamPlayers, teamName }) => { // both teams will be passed into the same template, so prop is generic.
    return (
        <div>
            <h3>{teamName}</h3>
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
        </div>
    )
}

export default TeamList;