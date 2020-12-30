// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team1Players, team1Name, team1Home }) => {
    return {
        teamPlayers: team1Players,
        teamName: team1Name,
        homeOrAway: team1Home ? "(Home)" : "(Away)"
    }
}

export default connect(mapStateToProps)(TeamList);