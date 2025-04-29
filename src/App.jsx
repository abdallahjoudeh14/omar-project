import { createBrowserRouter, RouterProvider } from "react-router";

import SignupPage from "@/routes/signup/page";
import LoginPage from "@/routes/login/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        {
            path: "signup",
            Component: SignupPage,
        },
        {
            path: "login",
            Component: LoginPage,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
