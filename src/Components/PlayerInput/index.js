// imports
import { connect } from 'react-redux';
import PlayerInputForm from './PlayerInputForm';
import { addPlayer } from '../../data/actions';

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(addPlayer(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerInputForm)