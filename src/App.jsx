import { createBrowserRouter, RouterProvider, Link } from "react-router";

import { Button } from "@/components/ui/button";

import HomePage from "@/routes/home/page";
import GPACalculatorPage from "@/routes/home/gpa/page";
import SignupPage from "@/routes/signup/page";
import LoginPage from "@/routes/login/page";
import ResetPasswordPage from "@/routes/reset-password/page";
import NewPasswordPage from "@/routes/reset-password/_token/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ul>
                    All pages that I have created
                    <li>
                        <Button
                            variant="link"
                            asChild
                        >
                            <Link to="home/gpa">Calcualte GPA</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="link"
                            asChild
                        >
                            <Link to="signup">Sign Up</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="link"
                            asChild
                        >
                            <Link to="login">Login</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="link"
                            asChild
                        >
                            <Link to="reset-password">Reset Password</Link>
                        </Button>
                    </li>
                    <li>
                        <Button
                            variant="link"
                            asChild
                        >
                            <Link to="reset-password/1234567890">Reset Password with Token</Link>
                        </Button>
                    </li>
                </ul>
            ),
        },
        {
            path: "home",
            Component: HomePage,
        },
        {
            path: "home/gpa",
            Component: GPACalculatorPage,
        },
        {
            path: "signup",
            Component: SignupPage,
        },
        {
            path: "login",
            Component: LoginPage,
        },
        {
            path: "/reset-password",
            Component: ResetPasswordPage,
        },
        {
            path: "/reset-password/:token",
            Component: NewPasswordPage,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
