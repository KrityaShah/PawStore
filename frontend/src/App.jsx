
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  

  return (
    <>

<Router>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/signup" element={<><Signup/></>} />
        </Routes>
      </Router>

  {/* <Login/> */}
    {/* <Home/> */}
    </>
  )
}

export default App
