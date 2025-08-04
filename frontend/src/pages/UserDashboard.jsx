import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  FaUser, FaBook, FaFileAlt, FaIdCard,
  FaMoneyCheckAlt, FaList, FaUniversity,
  FaCog, FaQuestionCircle, FaSignOutAlt
} from "react-icons/fa";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-72 bg-[#101828] text-white shadow-lg p-4">
        {/* Profile Section */}
        <div className="flex items-center gap-4 p-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photo || "/avatar.png"} alt="Profile" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-md">{user.name}</h2>
            <p className="text-sm">Student</p>
          </div>
        </div>

        <hr className="my-2 border-gray-600" />

        {/* Menu */}
        <div className="menu space-y-4">
          <div>
            <p className="menu-title text-sm">Main Menu</p>
            <ul className="space-y-1">
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaUser /> Dashboard</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaBook /> My Subjects</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaFileAlt /> My Result</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaIdCard /> My Admit Card</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaMoneyCheckAlt /> Fees & Transactions</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaList /> Student Register</a></li>
            </ul>
          </div>

          <div>
            <p className="menu-title text-sm">Services & Settings</p>
            <ul className="space-y-1">
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaUniversity /> ID Card / Bank Details</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaCog /> Settings</a></li>
              <li><a className="flex items-center gap-3 hover:bg-base-200 p-2 rounded"><FaQuestionCircle /> Help / Support</a></li>
            </ul>
          </div>

          <div className="mt-6">
            <button className="btn btn-error btn-block text-white"><FaSignOutAlt /> Logout</button>
          </div>
        </div>
      </aside>

      {/* Main Dashboard Area */}
      <main className="flex-1 p-6 space-y-6">
        {/* Welcome Card */}
        <div className="bg-base-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow">
          <div>
            <h2 className="text-xl font-bold">Hello {user.name},</h2>
            <p className="text-sm">You’re in Semester {user.semester}. Keep progressing to achieve your goals!</p>
            <button className="btn btn-primary mt-3">View Result</button>
          </div>
          <img src="/welcome-illustration.svg" alt="welcome" className="w-40 h-40 mt-4 md:mt-0" />
        </div>

        {/* Dashboard Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Notices */}
          <div className="card bg-info text-white shadow">
            <div className="card-body">
              <h2 className="card-title">📢 Notices</h2>
              <ul className="text-sm space-y-1">
                {user.notices?.length > 0 ? (
                  user.notices.map((notice, idx) => (
                    <li key={idx}>📌 {notice.title} – {notice.date}</li>
                  ))
                ) : (
                  <li>No recent notices.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Semester Info */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">🎓 Current Semester</h2>
              <p>Semester: {user.semester || "Not Available"}</p>
              <p>Duration: Jan 2025 – May 2025</p>
              <p>Advisor: Dr. Nandlal</p>
            </div>
          </div>

          {/* Balance Fee */}
          <div className="card bg-warning shadow text-white">
            <div className="card-body">
              <h2 className="card-title">💰 Balance Fee</h2>
              <p>Pending: ₹ {user.balanceFee}</p>
              <button className="btn btn-sm btn-outline mt-2 text-white border-white">Pay Now</button>
            </div>
          </div>

          {/* Subjects */}
          <div className="card bg-base-100 shadow col-span-1 md:col-span-2">
            <div className="card-body">
              <h2 className="card-title">📘 My Subjects</h2>
              {user.subjects?.length > 0 ? (
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  {user.subjects.map((subj, idx) => (
                    <li key={idx}>✔️ {subj}</li>
                  ))}
                </ul>
              ) : (
                <p>No subjects found.</p>
              )}
            </div>
          </div>

          {/* Calendar */}
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">📅 Calendar</h2>
              <div className="text-sm">
                <p>🟢 Aug 1 – Quiz 1</p>
                <p>🟢 Aug 5 – Library Renewal</p>
                <p>🟢 Aug 15 – Independence Day</p>
                <p>🟢 Aug 21 – Result Declaration</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
