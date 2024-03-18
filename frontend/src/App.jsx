import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-screen p-4 ">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}></Route>
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
