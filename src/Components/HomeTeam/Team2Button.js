import { connect } from 'react-redux';
import HomeTeamButton from './HomeTeamButton';
import { toggleHomeTeam } from '../../data/actions';

const mapStateToProps = ({ team1Home }) => {
    return {
        home: team1Home === false,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(toggleHomeTeam()) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTeamButton);