// imports
import { connect } from 'react-redux';
import PlayerList from './PlayerList';

const mapStateToProps = ({ players }) => {
    return {
        players: players,
    }
}

export default connect(mapStateToProps)(PlayerList);
