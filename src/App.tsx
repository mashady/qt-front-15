import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import requireAuth from "./hoc/requireAuth";
import ExamsPage from "./pages/ExamsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";

const ProtectedDashboard = requireAuth(Dashboard);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<ProtectedDashboard />} />
      <Route path="/exams" element={<ExamsPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
    </Routes>
  );
};

export default App;
