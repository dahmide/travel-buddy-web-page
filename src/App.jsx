import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

import StepLayout from "./layouts/StepLayout";

import Login from "./views/Login/Login";
import StepA from "./views/Steps/StepA";
import StepB from "./views/Steps/StepB";
import StepC from "./views/Steps/StepC";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Login />} />
            <Route element={<StepLayout />}>
                <Route path="stepA" element={<StepA />} />
                <Route path="stepB" element={<StepB />} />
                <Route path="stepC" element={<StepC />} />
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