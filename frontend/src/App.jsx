
import Home from "./pages/Home"
import Home2 from "./pages/Home2"
import Login from "./pages/Login"
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Breeds from "./pages/Breeds";
import Accessories from "./pages/Accessories";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";



function App() {

  return (
    <>

<Router>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/home2" element={<><Home2/></>} />
          <Route path="/breeds" element={<><Breeds/></>} />
          <Route path="/accessories" element={<><Accessories/></>} />
          <Route path="/blogs" element={<><Blogs/></>} />
          <Route path="/contact" element={<><Contact/></>} />
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
