//imports 
import { connect } from 'react-redux';
import Header from './Header';


// state
const mapStateToProps = ({ showInstructions }) => {
    return {
        showInstructions,
    };
};

export default connect(mapStateToProps)(Header);