// PrivateRoute.tsx
import React, { useEffect, useState } from "react";
import { RouteProps, Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthService";

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const [auth, setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setAuth(result);
    };
    checkAuth();
  }, []);

  if (auth === null) return <div>Loading...</div>;

  return auth ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
