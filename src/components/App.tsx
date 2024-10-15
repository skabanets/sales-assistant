import { Navigate, Route, Routes } from "react-router-dom";

import { SharedLayout } from "../components";

import AuthPage from "../pages/AuthPage";
import UpworkFeedsPage from "../pages/UpworkFeedsPage";
import FeedPage from "../pages/FeedPage";
import ChatPage from "../pages/ChatPage";

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
