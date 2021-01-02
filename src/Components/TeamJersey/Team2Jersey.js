// imports
import { connect } from 'react-redux';
import TeamJersey from './TeamJersey';

const mapStateToProps = ({ team2Colour }) => {
    return {
        colour: team2Colour,
    };
};

export default connect(mapStateToProps)(TeamJersey);