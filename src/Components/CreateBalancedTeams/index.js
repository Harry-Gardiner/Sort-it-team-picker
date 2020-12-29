//imports 
import { connect } from 'react-redux';
import CreateBalancedTeams from './CreateBalancedTeams';
import { createBalancedTeams } from '../../data/actions';

// state
const mapStateToProps = ({ requiredNumOfPlayers, teamsPicked }) => {
    return {
        requiredNumOfPlayers: requiredNumOfPlayers,
        teamsPicked: teamsPicked,
    }
}

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(createBalancedTeams()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBalancedTeams);