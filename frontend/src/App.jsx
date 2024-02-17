import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4 ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}
export default App;
