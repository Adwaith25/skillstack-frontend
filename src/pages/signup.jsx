import image from "../assets/background.png"
import { useState } from "react"

import InputFeild from "../components/InputFeild"
import { useNavigate } from "react-router-dom"

function SignupPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const navigate = useNavigate();

    function create(event) {
        event.preventDefault();
        setUsernameError("");
        setPasswordError("");
        setConfirmPasswordError("");

        let isValid = true;

        if (username === "") {
            setUsernameError("username is required");
            isValid = false;
        }
        if (password === "") {
            setPasswordError("password is required");
            isValid = false;
        }
        if (confirmPassword === "") {
            setConfirmPasswordError("confirm password is required");
            isValid = false;
        } else if (password !== "" && password !== confirmPassword) {
            setConfirmPasswordError("passwords do not match");
            isValid = false;
        }

        if (isValid) {
            navigate("/");
        }
    }

    return (
        <div className="main-sign">
            <div className="white">
                <div className="sign-1">
                    <h1 className="skilli">skillstack</h1>
                    <img src={image} className="image" />
                </div>
                <form className="sign-form" onSubmit={create}>
                    <InputFeild 
                        value={username} 
                        type="text" 
                        onChange={(event) => setUsername(event.target.value)} 
                        placeholder="username" 
                    />
                    {usernameError && <p className="error">{usernameError}</p>}

                    <InputFeild 
                        value={password} 
                        type="password" 
                        onChange={(event) => setPassword(event.target.value)} 
                        placeholder="password" 
                    />
                    {passwordError && <p className="error">{passwordError}</p>}

                    <InputFeild 
                        value={confirmPassword} 
                        type="password" 
                        onChange={(event) => setConfirmPassword(event.target.value)} 
                        placeholder="confirm password" 
                    />
                    {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

                    <button className="login-btn" type="submit">Sign Up</button>
                </form>
                <button className="Google">sign in with Google</button>
            </div>
        </div>
    );
}

export default SignupPage;
