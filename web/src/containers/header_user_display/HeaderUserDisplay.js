import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderUserDisplay from '../../components/header/HeaderUserDisplay';
import {
    logout
} from '../../actions/auth';

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            logout
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserDisplay);