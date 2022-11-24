import React from "react";
import { useAuth } from "../../../auth/context/AuthProvider";

const LoginView = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login("Nico");
  };

  return (
    <div>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginView;
