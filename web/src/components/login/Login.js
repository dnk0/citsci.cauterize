import React, {Fragment} from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            keep_logged_in: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.login(this.state.username, this.state.password, this.state.keep_logged_in ? this.state.keep_logged_in : false)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Fragment>
                <LoginForm
                    state={this.state}
                    handleChange={this.handleInputChange}
                    handleBlur={() => {console.log("blur event")}}
                    handleSubmit={this.handleSubmit}
                    hasFailed={this.props.auth.hasFailed}
                />
            </Fragment>
        );
    }
}

export default Login