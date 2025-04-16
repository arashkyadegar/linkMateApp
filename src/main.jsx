import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./components/context/darkmodcontext";
import TimeLinkCreateForm from "./components/TimeLink/TimeLinkCreateForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import ShortLinkCreateForm from "./components/ShortLink/ShortLinkCreateForm";
import SecureLinkCreateForm from "./components/SecureLink/SecureLinkCreateForm";
import { Toaster } from "react-hot-toast";
import NotAllowed from "./components/Layout/NotAllowed";
import ShortLinkList from "./components/ShortLink/ShortLinkList";
import ProtectedRoute from "./components/protected-route/protected-route";
import AuthProvider from "./components/hooks/AuthProvider";
import TimeLinkEditForm from "./components/TimeLink/TimeLinkEditForm";
import SecureLinkList from "./components/SecureLink/SecureLinkList";
import TimeLinkList from "./components/TimeLink/TimeLinkList";
import ShortLinkEditForm from "./components/ShortLink/ShortLinkEditForm";
import AboutUs from "./components/About-us/About-us";
import Services from "./components/Services/Services";
import ContactUs from "./components/Contact-us/Contact-us";
import SecureLinkEditForm from "./components/SecureLink/SecureLinkEditForm";
import RegisterPage from "./components/RegisterPage";
import { UserProvider } from "./components/context/usercontext";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/redux/store';


createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <DarkModeProvider>
          <UserProvider>
            <Toaster />
            <AuthProvider>

              <Routes>
                {/* <Route path="url/:id" element={<ShortLinkRedirect />} />
            <Route path="psw-url/:id" element={<PasswordLinkRedirect />} /> */}
                <Route path="/" element={<Layout />}>
                  <Route path="not-allowed" element={<NotAllowed />} />

                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/services" element={<Services />} />


                  <Route path="/" element={<Dashboard />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/short-link" element={<ShortLinkCreateForm />} />

                  <Route
                    path="/short-link/:id"
                    element={
                      <ProtectedRoute>
                        <ShortLinkEditForm />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/short-link-list"
                    element={
                      <ProtectedRoute>
                        <ShortLinkList />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/secure-link"
                    element={
                      <ProtectedRoute>
                        <SecureLinkCreateForm />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/secure-link/:id"
                    element={
                      <ProtectedRoute>
                        <SecureLinkEditForm />
                      </ProtectedRoute>
                    }
                  />


                  <Route
                    path="/secure-link-list"
                    element={
                      <ProtectedRoute>
                        <SecureLinkList />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/time-link"
                    element={
                      <ProtectedRoute>
                        <TimeLinkCreateForm />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/time-link/:id"
                    element={
                      <ProtectedRoute>
                        <TimeLinkEditForm />
                      </ProtectedRoute>
                    }
                  />

                  <Route
                    path="/time-link-list"
                    element={
                      <ProtectedRoute>
                        <TimeLinkList />
                      </ProtectedRoute>
                    }
                  />


                </Route>
              </Routes>

            </AuthProvider>
          </UserProvider>
        </DarkModeProvider>
      </Router>
    </PersistGate>

  </Provider >
);
