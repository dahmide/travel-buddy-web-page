import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import Login from "./views/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="login" element={<Login />} />
        </Route>
    )
);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;