import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        // console.log("Form submitted with username:", username);
        // console.log("Form submitted with password:", password);

        axios.post("http://localhost:5000/api/login", { username, password })
            .then((response) => {
                console.log("API Response:", response.data); // Log the response data
                if (response.data.success) {
                    localStorage.setItem("token", response.data.token); // Save token for auth
                    navigate("/dashboard");
                } else {
                    alert("Invalid credentials!");
                }
            })
            .catch((error) => console.error("Error logging in:", error));
    };

    return (
        <div className="login-container">
            <h2 className="form-title">Log in with</h2>
            <SocialLogin />

            <p className="separator"><span>or</span></p>

            <form onSubmit={handleSubmit} className="login-form">
                <InputField 
                    type="text" // Change to "text" for username
                    placeholder="Username" 
                    icon="person" 
                    onChange={(e) => setUsername(e.target.value)} 
                    value={username} // Pass the username state as value
                />
                <InputField 
                    type="password" 
                    placeholder="Password" 
                    icon="lock" 
                    onChange={(e ) => setPassword(e.target.value)} 
                    value={password} // Pass the password state as value
                />
                <a href="#" className="forgot-password-link">Forgot password?</a>
                <button type="submit" className="login-button">Log In</button>
            </form>

            <p className="signup-prompt">
                Don&apos;t have an account? <a href="/Signup" className="signup-link">Sign up</a>
            </p>
        </div>
    );
};

export default Login;