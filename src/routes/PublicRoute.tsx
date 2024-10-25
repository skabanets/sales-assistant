import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../hooks";
import { selectIsLoggedIn } from "../redux";

interface IPublicRouteProps {
  children: ReactNode;
}

export const PublicRoute: FC<IPublicRouteProps> = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || "/upwork-feeds"} />;
  }

  return children;
};
