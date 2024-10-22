import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Loader, SharedLayout } from "../components";
import { PrivateRoute, PublicRoute } from "../routes";

import { useAppDispatch, useAppSelector } from "../hooks";
import { refresh, selectIsLoggedIn, selectIsRefreshing } from "../redux";

const AuthPage = lazy(() => import("../pages/AuthPage/AuthPage"));
const UpworkFeedsPage = lazy(() => import("../pages/UpworkFeedsPage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const ChatPage = lazy(() => import("../pages/ChatPage"));

export const App = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const link = isLoggedIn ? "/upwork-feeds" : "/auth";

  useEffect(() => {
    dispatch(refresh());
  }, []);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="/upwork-feeds"
          element={
            <PrivateRoute>
              <UpworkFeedsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/upwork-feeds/:id"
          element={
            <PrivateRoute>
              <FeedPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/chats/:id"
          element={
            <PrivateRoute>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to={link} replace />} />
        <Route path="/" element={<Navigate to={link} replace />} />
      </Route>
    </Routes>
  );
};
