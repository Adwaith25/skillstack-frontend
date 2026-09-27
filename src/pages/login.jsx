import { useState } from "react";
import logo from "../assets/background.png"
import InputFeild from "../components/InputFeild"
import { useNavigate } from "react-router-dom"

  
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError,setusernameError]=useState("");
  const [passwordError,setPasswordError]=useState("");
   const navigate = useNavigate();
  function check(event) {
    event.preventDefault();
    setPasswordError("");
  setusernameError("");
  if (username === "") {
    setusernameError("username is empty");
    
    return;
  }

  if (password === "") {
    setPasswordError("password is empty");
    
    return;
  }
   

  navigate("/dashboard");
  console.log("Login successful");
  console.log(username);
  console.log(password);
}
  return (
    <div className="login-page">

      <div className="login-card">
        <img src={logo} className="image" />
      <p>Welcome to Skillstack, change the way you see the world of certification verification</p>
      <form onSubmit={check}>
      <InputFeild value={username}  type="text" onChange={event=>setUsername(event.target.value)} placeholder="username"/>
      {usernameError && <p className="error">{usernameError}</p>}
       <InputFeild value={password}  type="password" onChange={event=>setPassword(event.target.value)} placeholder="password"/>
      {passwordError && <p className="error">{passwordError}</p>}
      <div className="middle">
      <button className="signup-btn" type="button" onClick={() => navigate("/signup")}>Signup</button>
      <button className="forget" type="button">forgot password</button>
      </div>
<button className="login-btn" type="submit">Login</button>

</form>
      </div>

    </div>
  );
}

export default Login;