import { Form, Link } from "react-router-dom";
import iconBack from "../../assets/images/icon-back-line.svg";
import "../../views/stem.css"
import verify from "../../assets/images/verify.png"
const Verified = () =>{
    return(
<main className="verified main">
<section className="main_wrapper wrap flex">
                <Link className="back_home flex" to="/">
                    <img className="back_img " src={iconBack} alt="" />
                </Link>
                <div className="welcome_info verified_info flex">
                <img src={verify} alt=""/>
                    <h2>Congrats!</h2>
                    <p>Your identity has been verified successfully</p>
                </div>
                <div className="welcome_btn flex">
                    <Link className="login__form-login " to="">Log in now</Link>
                </div>
</section>
</main>
    )
}
export default Verified;