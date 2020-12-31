// imports
import { connect } from 'react-redux';
import TeamNameInput from './TeamNameInput';
import { setTeamName } from '../../data/actions';

const mapStateToProps = ({ teamNamesConfirmed, team1Name, team2Name }) => {
    return {
        teamNamesConfirmed,
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamNameInput)