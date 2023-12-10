import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

import StepLayout from "./layouts/StepLayout";

import Login from "./views/Login/Login";
import Welcome from "./views/Login/Welcome";
import Signup from "./views/signup/Signup";
import StepA from "./views/Steps/StepA";
import StepB from "./views/Steps/StepB";
import StepC from "./views/Steps/StepC";
import Verified from "./views/Steps/verified";
import Verifyem from "./views/Forgotpw/Verifyem";
import Forgotpw from "./views/Forgotpw/Forgotpw"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Login />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="verifyem" element={<Verifyem />} />
            <Route path="forgotpw" element={<Forgotpw />} />
            <Route element={<StepLayout />}>
                <Route path="stepA" element={<StepA />} />
                <Route path="stepB" element={<StepB />} />
                <Route path="stepC" element={<StepC />} />
                <Route path="verified" element={<Verified/>} />
            </Route>
        </Route>
    )
);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;