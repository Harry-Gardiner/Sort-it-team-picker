// imports
import { connect } from 'react-redux';
import NumberOfPlayers from './NumberOfPlayers';
import { setNumber } from '../../data/actions';

const mapStateToProps = ({ numberOfPlayers }) => {
    return {
        numberOfPlayers,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleAdd: () => { dispatch(setNumber(1)) },
        handleMinus: () => { dispatch(setNumber(-1)) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfPlayers);