import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import './App.css'

function App() {
  return (
    <Router>
     <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
     </Routes>
    </Router>
  );
}

export default App;
