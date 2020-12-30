// imports
import { connect } from 'react-redux';
import TeamNameInput from './TeamNameInput';
import { setTeamName } from '../../data/actions';

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(setTeamName(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(TeamNameInput)