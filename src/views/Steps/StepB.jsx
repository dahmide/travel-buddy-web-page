import "../featureA.css";
import "./steps.css";

const StepB = () => {
    return (
        <div className="stepB">
            <h1 className="stepB__lead title-md">
                Take a Selfie
            </h1>
            <p className="stepB__text">
                We will compare it with your document
            </p>
            <ul className="stepB__list">
                <li className="stepB__list-item stepB__list-item-1">
                    Face forward and make sure your eyes are clearly visible
                </li>
                <li className="stepB__list-item stepB__list-item-2">
                    Remove your classes if necessary
                </li>
            </ul>
        </div>
    )
}

export default StepB;