// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team2Players }) => {
    return {
        teamPlayers: team2Players,
    }
}

export default connect(mapStateToProps)(TeamList);