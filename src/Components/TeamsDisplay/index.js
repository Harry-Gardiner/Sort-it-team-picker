// imports
import { connect } from 'react-redux';
import TeamsDisplay from './TeamsDisplay';

// map state
const mapStateToProps = ({ team1Colour, team2Colour, team1Name, team2Name, team1Home }) => {
    return {
        team1Colour,
        team2Colour,
        team1Name,
        team2Name,
        team1Home: team1Home ? "(Home)" : "(Away)",
        team2Home: !team1Home ? "(Home)" : "(Away)",
    };
};

export default connect(mapStateToProps)(TeamsDisplay);
