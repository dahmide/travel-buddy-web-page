import "../featureA.css";
import "./steps.css";

import iconContact from "../../assets/images/icon-contact-blue.svg";

const StepA = () => {
    return (
        <div className="stepA">
            <img 
                className="stepA__icon" 
                src={iconContact}
                alt="" 
            />
            <h1 className="stepA__lead title-md">
                Upload NIN
            </h1>
            <p className="stepA__text">
                Uploading your NIN will help us confirm your personal information. All data is held securely and used for verification purposes only.
            </p>
            <input 
                type="file" 
                name="file" 
                id="" 
                className="stepA__file btn"
            />
        </div>
    )
}

export default StepA;