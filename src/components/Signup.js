import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        axios.post("http://localhost:5000/api/signup", { username, email, password })
            .then((response) => {
                if (response.data.success) {
                    localStorage.setItem("token", response.data.token); // Save token for auth
                    navigate("/login");
                } else {
                    alert("Error during registration!");
                }
            })
            .catch((error) => console.error("Error registering user:", error));
    };

    return (
        <div className="login-container">
            <h2 className="form-title">Sign up with</h2>
            <SocialLogin />

            <p className="separator"><span>or</span></p>

            <form onSubmit={handleSubmit} className="login-form">
                <InputField
                    type="text"
                    placeholder="Username"
                    icon="person"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <InputField
                    type="email"
                    placeholder="Email address"
                    icon="mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    icon="lock"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                    icon="lock"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit" className="login-button">Sign Up</button>
            </form>

            <p className="signup-prompt">
                Already have an account? <a href="/login" className="signup-link">Log in</a>
            </p>
        </div>
    );
};

export default Signup;
