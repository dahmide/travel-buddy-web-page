import { Outlet, Link } from "react-router-dom";
import iconBack from "../assets/images/icon-back-fill.svg";

const StepLayout = () => {
    return (
        <>
            <div className="step-header">
                <div className="step-header__wrap wrap flex">
                    <Link className="step-header__back" to="#">
                        <img src={iconBack} alt="" />
                    </Link>
                    <span className="step-header__levl">
                        Step 1 of 3
                    </span>
                </div>
            </div>
            <div className="step-region">
                <div className="wrap">
                    <div className="step-slider">
                        <div className="step-slider__pipe"></div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default StepLayout;