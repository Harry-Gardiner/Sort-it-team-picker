// imports
import { connect } from 'react-redux';
import TeamsConfirmed from './TeamsConfirmed';
import { setTeamName } from '../../data/actions';

const mapStateToProps = ({ teamsConfirmed, team1Name, team2Name }) => {
    return {
        teamsConfirmed,
        loggedTeam1Name: team1Name,
        loggedTeam2Name: team2Name,
    }
};

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(setTeamName(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsConfirmed)