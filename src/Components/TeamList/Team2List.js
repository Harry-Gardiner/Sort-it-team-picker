// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team2Players, team2Name }) => {
    return {
        teamPlayers: team2Players,
        teamName: team2Name,
    }
}

export default connect(mapStateToProps)(TeamList);