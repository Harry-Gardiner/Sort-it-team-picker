//imports 
import { connect } from 'react-redux';
import App from './App';

// state
const mapStateToProps = ({ teamsConfirmed }) => {
    return {
        teamsConfirmed,
    }
};

export default connect(mapStateToProps)(App);