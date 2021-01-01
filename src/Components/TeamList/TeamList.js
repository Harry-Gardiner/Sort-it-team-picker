const TeamList = ({ teamPlayers, teamColour }) => { // both teams will be passed into the same template, so prop is generic.
    return (
        <div>
            <ul className="list-group">
                {
                    teamPlayers.map((player, index) => {
                        return (
                            <div key={index} className="flex">
                                <li
                                    className="capitalize list-group-item flexList"
                                >
                                    <p>
                                        <i className="fas fa-male" style={{ color: teamColour }}></i>
                                        {player.name}
                                    </p>
                                    <span>skill: {player.skill}</span>
                                </li>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TeamList;