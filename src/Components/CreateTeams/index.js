//imports 
import { connect } from 'react-redux';
import CreateTeams from './CreateTeams';
import { createTeams } from '../../data/actions';

// state
const mapStateToProps = ({ requiredNumOfPlayers }) => {
    return {
        requiredNumOfPlayers,
    };
};

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(createTeams()) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeams);