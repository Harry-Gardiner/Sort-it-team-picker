// imports
import { ReactComponent as Jersey } from '../../assets/icons/jersey.svg';
import Team1List from '../TeamList/Team1List';
import Team2List from '../TeamList/Team2List';
import BookiesFavourite from '../BookiesFavourite/index';

const TeamsDisplay = ({ team1Colour, team2Colour, team1Name, team2Name, team1Home, team2Home }) => {
    return (
        <div>
            <div>
                <h3>{team1Name} <span>{team1Home}</span></h3>
                <Jersey style={{ width: "5rem" }} fill={team1Colour} />
                <Team1List />
            </div>
            <div>
                <h3>{team2Name} <span>{team2Home}</span></h3>
                <Jersey style={{ width: "5rem" }} fill={team2Colour} />
                <Team2List />
            </div>
            <BookiesFavourite />
        </div>
    )
};

export default TeamsDisplay;