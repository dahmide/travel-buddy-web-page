import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

import StepLayout from "./layouts/StepLayout";

import Index from "./views/Index/Index";
import Login from "./views/Login/Login";
import StepA from "./views/Steps/StepA";
import StepB from "./views/Steps/StepB";
import StepC from "./views/Steps/StepC";
import Verified from "./views/Steps/verified";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
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