import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen p-4 ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* 没有auth的验证就signup 不然可以直接home登陆了 */}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
  );
}
export default App;
