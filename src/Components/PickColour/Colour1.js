// imports
import { connect } from 'react-redux';
import PickColour from './PickColour';
import { setColour1 } from '../../data/actions';

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleColour: data => { dispatch(setColour1(data)) },
    };
};

export default connect(null, mapDispatchToProps)(PickColour)