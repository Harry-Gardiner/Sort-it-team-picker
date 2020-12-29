const TeamList = ({ teamPlayers, teamName }) => { // both teams will be passed into the same template, so prop is generic.
    return (
        <div>
            <h3>{teamName}</h3>
            <ul>
                {
                    teamPlayers.map((player, index) => {
                        return (
                            <li
                                key={index}
                                className="capitalize"
                            >
                                {player.name}
                                <span style={{ position: "absolute", right: "2rem" }}>skill: {player.skill}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TeamList;