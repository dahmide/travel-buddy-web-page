import { Link, Form } from "react-router-dom";

import iconBack from "../../assets/images/icon-back-line.svg";
import iconMail from "../../assets/images/icon-mail-line.svg";
import iconLock from "../../assets/images/icon-lock-line.svg";
import iconHide from "../../assets/images/icon-hide-line.svg";
// import iconShow from "../../assets/images/icon-show-line.svg";

import "../featureA.css";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="wrap">
                <div className="login-banner flex">
                    <Link to="/">
                        <img src={iconBack} alt="" />
                    </Link>
                </div>
                <div className="login-region flex">
                    <div className="login-region__wrap">
                        <h1 className="login-region__lead">
                            Login
                        </h1>
                        <Form>
                            <div className="login-region__field">
                                <label className="login-region__label" htmlFor="">
                                    <img src={iconMail} alt="" />
                                </label>
                                <input className="login-region__input" type="text" placeholder="School Email" />
                            </div>
                            <div className="login-region__field">
                                <img className="login-region__lock" src={iconHide} alt="" />
                                <label className="login-region__label" htmlFor="">
                                    <img src={iconLock} alt="" />
                                </label>
                                <input className="login-region__input" type="text" placeholder="Password" />
                            </div>
                            <Link className="login-region__reset" to="#">
                                Forgot password
                            </Link>
                            <Link className="login-region__login" to="#">
                                Login
                            </Link>
                            <div className="login-region__start">
                                New user?
                                <Link className="login-region__logup" to="#">
                                    Sign in
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;