import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "../components";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const UpworkFeedsPage = lazy(() => import("../pages/UpworkFeedsPage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const ChatPage = lazy(() => import("../pages/ChatPage"));

export const App = () => {
  const isLoggedIn = true;
  const link = isLoggedIn ? "/upwork-feeds" : "/auth";

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/upwork-feeds" element={<UpworkFeedsPage />} />
        <Route path="/upwork-feeds/:id" element={<FeedPage />} />
        <Route path="/chats/:id" element={<ChatPage />} />
        <Route path="*" element={<Navigate to={link} replace />} />
        <Route path="/" element={<Navigate to={link} replace />} />
      </Route>
    </Routes>
  );
};
