// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/profile");
        setUser(res.data.user);
      } catch (err) {
        setError("Unauthorized or session expired");
        setTimeout(() => {
          localStorage.removeItem("token");
          navigate("/login");
        }, 1500);
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Profile</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {user && (
        <div className="space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
