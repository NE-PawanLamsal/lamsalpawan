import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import FBXModel from './FBXModel'; // Adjust the import path as necessary

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0, 5); // Initial camera position
      cameraRef.current.lookAt(0, 0, 0); // Look at the center of the scene
    }
  }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", { username, password })
            .then((response) => {
                if (response.data.success) {
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
                } else {
                    alert("Invalid credentials!");
                }
            })
            .catch((error) => console.error("Error logging in:", error));
    };

    return (
      <div className="root-container">
  {/* <div className="fbx-model">
    <Canvas className="canvas">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <perspectiveCamera ref={cameraRef} makeDefault fov={75} near={0.1} far={1000} />
      <FBXModel url="/Hello.fbx" camera={cameraRef} />
    </Canvas>
  </div> */}
  <div className="login-container">
    <h2 className="form-title">Log in with</h2>
    <SocialLogin />
    <p className="separator"><span>or</span></p>
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        type="text"
        placeholder="Username"
        icon="person"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <InputField
        type="password"
        placeholder="Password"
        icon="lock"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      Forgot password?
      <button type="submit" className="login-button">Log In</button>
    </form>
    <p className="signup-prompt">
      Don't have an account? <a href="/Signup" className="signup-link">Sign up</a>
    </p>
  </div>
</div>

    );
};

export default Login;
