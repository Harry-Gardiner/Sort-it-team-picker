// imports
import { connect } from 'react-redux';
import PlayerInputForm from './PlayerInputForm';
import { addPlayer } from '../../data/actions';

// State
const mapStateToProps = ({ requiredNumOfPlayers }) => {
    return {
        requiredNumOfPlayers,
    };
};

// Dispatch 
const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => { dispatch(addPlayer(data)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInputForm)