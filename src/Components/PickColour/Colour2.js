// imports
import { connect } from 'react-redux';
import PickColour from './PickColour';
import { setColour2 } from '../../data/actions';

const mapDispatchToProps = dispatch => {
    return {
        handleColour: data => { dispatch(setColour2(data)) },
    };
};

export default connect(null, mapDispatchToProps)(PickColour)