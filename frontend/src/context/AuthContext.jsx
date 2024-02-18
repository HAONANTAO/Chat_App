import React, { useState, createContext, useContext } from "react";

// 创建一个名为 AuthContext 的上下文
export const AuthContext = createContext();

// 自定义 hook，用于在组件中获取 AuthContext 的值
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// 创建一个名为 AuthContextProvider 的组件，该组件将用 AuthContext.Provider 包装其子组件
export const AuthContextProvider = ({ children }) => {
  // 使用 useState 钩子来管理 authUser 状态
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user") || null),
  );

  // AuthContext.Provider 用于将 authUser 状态和 setAuthUser 函数作为值传递给其子组件
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
