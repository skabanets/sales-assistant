import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectIsLoggedIn } from "../redux";

interface IPrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};
