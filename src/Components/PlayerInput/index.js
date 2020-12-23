// imports
import { connect } from 'react-redux';
import PlayerInputForm from './PlayerInputForm';

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(addPlayer(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlayerInputForm)