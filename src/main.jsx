import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/context/darkmodcontext";
import AutoExpreLinkCreateForm from "./components/AutoExpreLink/AutoExpreLinkCreateForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import ShortLinkCreateForm from "./components/ShortLink/ShortLinkCreateForm";
import PasswordProtectedLinkCreateForm from "./components/PasswordProtectedLink/PasswordProtectedLinkCreateForm";
import { Toaster } from "react-hot-toast";
import NotAllowed from "./components/Layout/NotAllowed";
import ShortLinkList from "./components/ShortLink/ShortLinkList";
import ProtectedRoute from "./components/protected-route/protected-route";
import AuthProvider from "./components/hooks/AuthProvider";
import RedirectComponent from "./components/Redirect/Redirect";
import ShortPasswordProtectedLinkList from "./components/PasswordProtectedLink/PasswordProtectedLinkList";

createRoot(document.getElementById("root")).render(
  <Router>
    <DarkModeProvider>
      <Toaster />
      <AuthProvider>
        <Routes>
          <Route path="url/:id" element={<RedirectComponent />} />
          <Route path="/" element={<Layout />}>
            <Route path="not-allowed" element={<NotAllowed />} />

            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/short-link" element={<ShortLinkCreateForm />} />

            <Route
              path="/short-link-list"
              element={
                <ProtectedRoute>
                  <ShortLinkList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/password-protected-link"
              element={
                <ProtectedRoute>
                  <PasswordProtectedLinkCreateForm />
                </ProtectedRoute>
              }
            />

            <Route
              path="/password-protected-link-list"
              element={
                <ProtectedRoute>
                  <ShortPasswordProtectedLinkList />
                </ProtectedRoute>
              }
            />

            <Route
              path="/auto-expire-link"
              element={
                <ProtectedRoute>
                  element={<AutoExpreLinkCreateForm />}
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </DarkModeProvider>
  </Router>
);
