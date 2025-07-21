import React from "react";
import "./VideoWithNotifications.css";

const notifications = [
  {
    title: "Result Notification - UG Sem II 2025",
    link: "#",
  },
  {
    title: "Revised Hostel Allotment List (2025-26)",
    link: "#",
  },
  {
    title: "Summer Internship Registration Open",
    link: "#",
  },
  {
    title: "Important: Document Verification Schedule",
    link: "#",
  },
  {
    title: "Admit Cards Released - Mid Term Exams",
    link: "#",
  },
  {
    title: "Updated Placement Policy 2025",
    link: "#",
  },
  {
    title: "Cultural Fest 2025 – Volunteer Form",
    link: "#",
  },
  {
    title: "New Faculty Induction Program Notice",
    link: "#",
  },
  {
    title: "Guidelines for Project Submission - Final Year",
    link: "#",
  },
];

const VideoWithNotifications = () => {
  return (
    <div className="video-notif-section">
      <div className="video-container">
        <iframe
  src="https://www.youtube.com/embed/SeGpmyE22FI?autoplay=1&mute=1&loop=1&playlist=SeGpmyE22FI&rel=0&showinfo=0"
  title="University Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


      </div>

      <div className="notif-wrapper">
        <div className="notif-title">Notifications</div>
        {notifications.map((note, i) => (
          <div
            className="notification"
            key={i}
            onClick={() => window.open(note.link, "_blank")}
          >
            {note.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWithNotifications;
