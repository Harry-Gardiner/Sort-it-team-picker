//imports 
import { connect } from 'react-redux';
import CreateTeams from './CreateTeams';
import { createTeams } from '../../data/actions';

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(createTeams()) }
    }
}

export default connect(null, mapDispatchToProps)(CreateTeams);