const BookiesFavourite = (
    {
        team1Name,
        team2Name,
        teamsPicked,
        bookiesFavouriteInfo,
        showBookiesFavourite,
        handleClick,
        team1Home
    }) => {

    const {
        bookiesFavTeam,
        favTeamSkill,
        otherTeamSkill
    } = bookiesFavouriteInfo;

    return (
        <div>
            { teamsPicked === false ? null :
                <div>
                    <button
                        onClick={handleClick}
                    >
                        Bookies Favourtie
                    </button>
                    {showBookiesFavourite === false ? null :
                        <div className="bookies">
                            <p>
                                {bookiesFavTeam === "team1" ? team1Name : team2Name} are tipped to win
                                <i className="fas fa-trophy"></i>
                            </p>
                            <p className="smallText">
                                {team1Name} skill total: {bookiesFavTeam === "team1" ? favTeamSkill : otherTeamSkill}{team1Home ? "*" : ""}
                            </p>
                            <p className="smallText">
                                {team2Name} skill total: {bookiesFavTeam === "team2" ? favTeamSkill : otherTeamSkill}{!team1Home ? "*" : ""}
                            </p>
                            <p className="vSmallText">
                                *home team advantage of +20% applied
                            </p>
                        </div>
                    }
                </div>
            }
        </div>
    )
};

export default BookiesFavourite;