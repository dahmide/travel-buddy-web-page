import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            
        </Route>
    )
);

const App = () => {
    return (
        <RouterProvider router={router} />
    );
}

export default App;