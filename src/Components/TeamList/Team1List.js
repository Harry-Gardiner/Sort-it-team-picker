// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team1Players, team1Colour }) => {
    return {
        teamPlayers: team1Players,
        teamColour: team1Colour,
    };
};

export default connect(mapStateToProps)(TeamList);