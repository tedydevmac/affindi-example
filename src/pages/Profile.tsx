import React from "react";
import { useNavigate } from "react-router-dom";
import { useAffinidiProfile } from "@affinidi/affinidi-react-auth";
import "./Profile.css"; // Import the new CSS file

const apiBaseUrl = "http://localhost:5173";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, error, profile, handleLogout } = useAffinidiProfile({
    authCompleteUrl: `${apiBaseUrl}/api/affinidi-auth/complete`,
  });

  async function logout() {
    //clear session cookie
    handleLogout();
    window.location.href = "/";
  }

  return (
    <div className="profile-page">
      <button
        onClick={() => navigate("/auth/callback")}
        className="back-button"
      >
        Go Back
      </button>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-details">
          <h3>User Profile</h3>
          <p>{JSON.stringify(profile, null, 4)}</p>
        </div>
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
