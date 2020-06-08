import React, { Fragment } from "react";
import './LoginForm.css';

const LoginForm = ({state, handleChange, handleBlur, handleSubmit, hasFailed}) => (
    <div className={"login-form-wrapper"}>
        <form onSubmit={handleSubmit}>
            <h1>
                Login
            </h1>
            {hasFailed ?
                <div className={"alert"}>
                    Invalid Login credentials!
                </div>
                :
                <Fragment />
            }
            <label>
                Username:
                <input
                    className={"login_input"}
                    name={"username"}
                    type={"string"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Insert Username"}
                />
            </label>
            <br/>
            <label>
                Password:
                <input
                    className={"login_input"}
                    name={"password"}
                    type={"password"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={"Insert Password"}
                />
            </label>
            <br/>
            <label>
                keep me logged in:
                <input
                    name={"keep_logged_in"}
                    type={"checkbox"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </label>
            <br/>
            <button>Submit</button>
        </form>
    </div>
)

export default LoginForm