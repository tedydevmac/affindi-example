import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import Main from "./pages/Main";
import {
  AffinidiLoginButton,
  useAffinidiProfile,
} from "@affinidi/affinidi-react-auth";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./App.css"; // Import the new CSS file

const apiBaseUrl = "http://localhost:5173";

const Auth: React.FC = () => {
  const { isLoading, error, profile, handleLogout } = useAffinidiProfile({
    authCompleteUrl: `${apiBaseUrl}/api/affinidi-auth/complete`,
  });
  async function logout() {
    //clear session cookie
    handleLogout();
    window.location.href = "/";
  }

  return (
    <div
      style={{
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {!profile && (
        <AffinidiLoginButton
          authInitUrl={`${apiBaseUrl}/api/affinidi-auth/init`}
        />
      )}
      {profile && (
        <>
          <h2>Something went wrong</h2>
          <p>Please logout and sign in again.</p>
          <button style={{ marginRight: 10 }} onClick={logout}>
            Logout
          </button>

          <h3>User Profile</h3>
          <pre style={{ textAlign: "left" }}>
            {JSON.stringify(profile, null, 4)}
          </pre>
        </>
      )}

      {isLoading && <p>Loading...</p>}

      {error && (
        <>
          <h2>error</h2>
          {error}
        </>
      )}
    </div>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    const isDarkMode = savedMode ? JSON.parse(savedMode) : true;
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/callback" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
