//imports 
import { connect } from 'react-redux';
import InstructionsButton from './InstructionsButton';
import { toggleInstructions } from '../../data/actions';

//state
const mapStateToProps = ({ showInstructions }) => {
    return {
        showInstructions,
    };
};

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(toggleInstructions()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsButton);