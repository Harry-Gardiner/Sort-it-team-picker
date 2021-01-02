//imports 
import { connect } from 'react-redux';
import CreateBalancedTeams from './CreateBalancedTeams';
import { createBalancedTeams } from '../../data/actions';

// state
const mapStateToProps = ({ requiredNumOfPlayers }) => {
    return {
        requiredNumOfPlayers: requiredNumOfPlayers,
    };
};

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(createBalancedTeams()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBalancedTeams);