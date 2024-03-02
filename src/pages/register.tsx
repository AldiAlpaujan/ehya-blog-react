import { Link } from "react-router-dom";
import AuthInput from "../components/Elements/AuthInput";
import Button from "../components/Elements/Button";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
    return (
        <AuthLayout title="Sign Up" onSubmit={() => { }}>
            <AuthInput name="name"
                type="text"
                label="Name"
                placeholder="Enter name" />

            <AuthInput name="email"
                type="email"
                label="Email"
                placeholder="Enter email" />

            <AuthInput name="password"
                type="password"
                label="Password"
                placeholder="Enter password" />

            <Button className="mb-5 mt-2 lg:mb-7 w-full ">
                Register
            </Button>

            <p className="self-start text-sm text-dark-light font-semibold ">
                You have an account?
                <span>
                    <Link to="/login" className="text-sm ml-1 text-primary font-semibold self-start mt-1 mb-5" >
                        Login now
                    </Link>
                </span>
            </p>
        </AuthLayout>
    );
}

export default RegisterPage;