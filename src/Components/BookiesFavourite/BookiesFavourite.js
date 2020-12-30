const BookiesFavourite = ({ team1Name, team2Name, teamsPicked, bookiesFavouriteInfo, showBookiesFavourite, handleClick, team1Home }) => {

    const { bookiesFavTeam, favTeamSkill, otherTeamSkill } = bookiesFavouriteInfo;

    return (
        <div>
            { teamsPicked === false ? null :
                <div className="dropdown">
                    <button
                        className="dropbtn"
                        onClick={handleClick}
                    >
                        Bookies Favourtie
                    </button>
                    {showBookiesFavourite === false ? null :
                        <div className="dropdown-content">
                            <p>{bookiesFavTeam === "team1" ? team1Name : team2Name} are tipped to win.</p>
                            <p>{team1Name} skill total: {bookiesFavTeam === "team1" ? favTeamSkill : otherTeamSkill} </p>
                            <p>{team2Name} skill total: {bookiesFavTeam === "team2" ? favTeamSkill : otherTeamSkill}</p>
                            <p>*home team has an advantage of +20% applied</p>
                        </div>
                    }
                </div>
            }
        </div>
    )
};

export default BookiesFavourite;