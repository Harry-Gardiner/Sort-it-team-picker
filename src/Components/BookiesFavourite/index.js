//imports 
import { connect } from 'react-redux';
import BookiesFavourite from './BookiesFavourite';
import { createBookiesFavourite } from '../../data/actions';

// state
const mapStateToProps = ({ team1Name, team2Name, teamsPicked, bookiesFavouriteInfo, showBookiesFavourite, team1Home }) => {
    return {
        team1Name,
        team2Name,
        teamsPicked,
        bookiesFavouriteInfo,
        showBookiesFavourite,
        team1Home,
    };
};

// dispatch
const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(createBookiesFavourite()) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookiesFavourite);