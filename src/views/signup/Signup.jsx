import { Form, Link } from "react-router-dom";
// import showIcon from "../../assets/images/icon-lock-line.svg";
import hidIcon  from "../../assets/images/icon-hide-line.svg";
import iconBack from "../../assets/images/icon-back-line.svg";


const Signup = ()=> {
    return(
<main className="signup main">
<section className="main_wrapper wrap flex">
                <Link className="back_home flex" to="/">
                    <img className="back_img" src={iconBack} alt="" />
                </Link>
                <Form className="all_form">
                    <h1 className="form-title">
                        Sign up
                    </h1>
                    <p>Please fill the details and create an account</p>
                    <div className="form-field flex">
                        <input className="form-input" type="text" name="name" id="" placeholder="Full Name" />
                    </div>
                    <div className="form-field flex">
                        <input className="form-input" type="email" name="email" id="" placeholder="School Email" />
                    </div>
                    <div className="form-field flex">
                            <input className="form-input" type="password" name="password" id=""  placeholder="Password"/>
                            <img className="form-pword" src={hidIcon} alt="" />
                        </div>
                        <div className="form-field flex">
                            <input className="form-input" type="password" name="password" id=""  placeholder="Confirm Password"/>
                            <img className="form-pword" src={hidIcon} alt="" />
                        </div>
                    <Link className="login__form-login continue" to="">Continue</Link>
                    <div className="form-logup">
                        Already have an account?
                        <Link className="form-signu" to="/login">Sign in</Link>
                    </div>
                </Form>
             
</section>
</main>
    )
}
export default Signup;