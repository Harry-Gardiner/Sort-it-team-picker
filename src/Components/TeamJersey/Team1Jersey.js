// imports
import { connect } from 'react-redux';
import TeamJersey from './TeamJersey';

const mapStateToProps = ({ team1Colour }) => {
    return {
        colour: team1Colour,
    };
};

export default connect(mapStateToProps)(TeamJersey);