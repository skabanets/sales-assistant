import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Loader, SharedLayout } from "../components";
import { PrivateRoute, PublicRoute } from "../routes";

import { useAppDispatch, useAppSelector } from "../hooks";
import { selectIsLoggedIn, setUserInfo } from "../redux";
import { useRecoverUserQuery } from "../services";

const AuthPage = lazy(() => import("../pages/AuthPage/AuthPage"));
const UpworkFeedPage = lazy(() => import("../pages/UpworkFeedsPage/UpworkFeedsPage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const ChatPage = lazy(() => import("../pages/ChatPage"));

export const App = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();

  const link = isLoggedIn ? "/upwork-feeds" : "/auth";
  const { data: userInfo, isLoading } = useRecoverUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfo(userInfo));
    }
  }, [dispatch, userInfo]);

  if (isLoading) {
    return <Loader />;
  }

  return (
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
              <UpworkFeedPage />
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
