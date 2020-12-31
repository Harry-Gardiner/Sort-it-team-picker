//imports 
import { connect } from 'react-redux';
import ComponentPanel from './ComponentPanel';


// state
const mapStateToProps = ({ teamsPicked }) => {
    return {
        teamsPicked,
    }
};

export default connect(mapStateToProps)(ComponentPanel);