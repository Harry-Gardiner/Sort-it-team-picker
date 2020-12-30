// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team2Players, team2Name, team1Home }) => {
    return {
        teamPlayers: team2Players,
        teamName: team2Name,
        homeOrAway: !team1Home ? "(Home)" : "(Away)"
    }
}

export default connect(mapStateToProps)(TeamList);