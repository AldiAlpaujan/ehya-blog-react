import { Link } from "react-router-dom";
import AuthInput from "../components/Elements/AuthInput";
import Button from "../components/Elements/Button";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login" onSubmit={() => { }}>
            <AuthInput name="email"
                type="email"
                label="Email"
                placeholder="Enter email" />

            <AuthInput name="password"
                type="password"
                label="Password"
                placeholder="Enter password" />

            <a href="" className="text-sm text-primary font-semibold self-start  mb-5 lg:mt-1 lg:mb-7">
                Forgot Password?
            </a>

            <Button className="mb-5 lg:mb-7">
                Sign In
            </Button>

            <p className="self-start text-sm text-dark-light font-semibold">
                Do not have an account?
                <span>
                    <Link to="/register" className="text-sm ml-1 text-primary font-semibold self-start mt-1 mb-5" >
                        Register now
                    </Link>
                </span>
            </p>
        </AuthLayout>
    );
}

export default LoginPage;