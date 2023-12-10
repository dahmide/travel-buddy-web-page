import { Link } from "react-router-dom";
import buddy from "../../assets/images/buddy.png"
import iconBack from "../../assets/images/icon-back-line.svg";
const Welcome =() =>{
    return(
<main className="welcome main">
<section className="main_wrapper wrap flex">
                <Link className="back_home flex" to="/">
                    <img className="back_img" src={iconBack} alt="" />
                </Link>
                <div className="welcome_info flex">
                    <img src={buddy} alt=""/>
                    <h2>Welcome</h2>
                    <p>Search, find and connect.</p>
                </div>
                <div className="welcome_btn flex">
                    <Link className="login__form-login white" to="/login">Sign in</Link>
                    <Link className="login__form-login " to="/signup">Create an account</Link>
                </div>
</section>
</main>
    )
}
export default Welcome;