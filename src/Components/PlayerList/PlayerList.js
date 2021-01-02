//imports
import CreateTeams from '../CreateTeams';
import CreateBalancedTeams from '../CreateBalancedTeams';

const PlayerList = ({ players, handleClick }) => {
    return (
        <div className="card">
            <h3>Player List<i className="fas fa-users"></i></h3>
            <ul className="list-group">
                {players.map((player, index) => {
                    return (
                        <div key={index} className="flexLi">
                            <li
                                className="capitalize list-group-item flexList"
                            >
                                <p>
                                    <i className="fas fa-male"></i>
                                    {player.name}
                                </p>
                                <p className="smallText">skill: {player.skill}</p>
                            </li>
                            <button
                                onClick={() => handleClick(index)}
                                className="delete"
                            >
                                <i className="fas fa-user-times smallIcon"></i>
                            </button>
                        </div>
                    )
                })}
            </ul>
            <div>
                <CreateTeams />
                <CreateBalancedTeams />
            </div>
        </div>
    )
}

export default PlayerList;