// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team1Players, team1Name }) => {
    return {
        teamPlayers: team1Players,
        teamName: team1Name,
    }
}

export default connect(mapStateToProps)(TeamList);