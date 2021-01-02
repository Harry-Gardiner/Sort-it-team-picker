// imports
import { ReactComponent as Jersey } from '../../assets/icons/jersey.svg';
import Team1List from '../TeamList/Team1List';
import Team2List from '../TeamList/Team2List';
import BookiesFavourite from '../BookiesFavourite/index';

const TeamsDisplay = ({ team1Colour, team2Colour, team1Name, team2Name, team1Home, team2Home }) => {
    return (
        <>
            <div className="card title">
                <h2>Pre-match information</h2>
            </div>
            <div className="card">
                <div className="minorPadding">
                    <h3
                        className="minorPaddingBottom"
                    >
                        {team1Name}
                        <p>{team1Home}</p>
                    </h3>
                    <Jersey
                        style={{ width: "5rem" }}
                        fill={team1Colour}
                        className="minorPaddingBottom"
                    />
                    <Team1List />
                </div>
                <div className="minorPadding">
                    <h3
                        className="minorPaddingBottom"
                    >
                        {team2Name}
                        <p>{team2Home}</p>
                    </h3>
                    <Jersey
                        style={{ width: "5rem" }}
                        fill={team2Colour}
                        className="minorPaddingBottom"
                    />
                    <Team2List />
                </div>
                <BookiesFavourite />
            </div>
        </>
    )
};

export default TeamsDisplay;