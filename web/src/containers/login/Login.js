import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Login from '../../components/login/Login';
import {
    login
} from '../../actions/auth';

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            login
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);