import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/admin" element={<h2>Admin Dashboard</h2>} />
      <Route path="/dashboard" element={<h2>User Dashboard</h2>} />
      <Route path="/userdashboard" element={<h2>New User Dashboard</h2>} />
    </Routes>
  );
}
