// imports 
import { connect } from 'react-redux';
import TeamList from './TeamList';

// state
const mapStateToProps = ({ team2Players, team2Colour }) => {
    return {
        teamPlayers: team2Players,
        teamColour: team2Colour,
    };
};

export default connect(mapStateToProps)(TeamList);