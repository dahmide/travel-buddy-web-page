import { Form } from "react-router-dom";
import iconPhone from "../../assets/images/icon-phone-blue.svg";

import "../featureA.css";
import "./steps.css";

const StepC = () => {
    return (
        <div className="stepC">
            <img className="stepC__icon" src={iconPhone} alt="" />
            <p className="stepC__text">
                Please enter your phone number to receive an OTP
            </p>
            <Form>
                <input 
                    type="tel" 
                    name="" 
                    id="" 
                    className="stepC__tel"
                    placeholder="Phone Number" 
                />
                <button className="stepC__btn btn">
                    Send
                </button>
            </Form>
        </div>
    )
}

export default StepC;