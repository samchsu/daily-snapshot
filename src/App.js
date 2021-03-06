import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import { useContext } from "react";
import { Context } from "./context/Context";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
        <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
        <Route path="/post/:postId" element={<Single/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
