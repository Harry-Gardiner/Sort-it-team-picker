// imports
import { connect } from 'react-redux';
import PlayerList from './PlayerList';
import { deletePlayer } from '../../data/actions';

const mapStateToProps = ({ players }) => {
    return {
        players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (data) => dispatch(deletePlayer(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
