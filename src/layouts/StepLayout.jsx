import { Outlet } from "react-router-dom";

const StepLayout = () => {
    return (
        <>
            <div className="step-header">
                <div className="wrap">
                    
                </div>
            </div>
            <div className="step-header">
                <div className="wrap">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default StepLayout;