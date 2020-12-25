// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team1Players }) => {
    return {
        teamPlayers: team1Players,
    }
}

export default connect(mapStateToProps)(TeamList);