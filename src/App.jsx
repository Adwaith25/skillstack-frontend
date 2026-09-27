import Login from "./pages/login"
import Dashboard from "./pages/dashboard"
import SignupPage from "./pages/signup"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App;