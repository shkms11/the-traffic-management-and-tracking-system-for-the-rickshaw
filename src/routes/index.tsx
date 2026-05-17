import { Routes, Route, Navigate } from "react-router-dom";

import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import OwnerDashboardPage from "../pages/owner/OwnerDashboardPage";
import UserDashboardPage from "../pages/user/UserDashboardPage";
import LoginPage from "../pages/LoginPage";

import RequireRole from "../shared/components/RequireRole";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <AdminDashboardPage />
          </RequireRole>
        }
      />

      <Route
        path="/owner"
        element={
          <RequireRole role="owner">
            <OwnerDashboardPage />
          </RequireRole>
        }
      />

      <Route
        path="/user"
        element={
          <RequireRole role="user">
            <UserDashboardPage />
          </RequireRole>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
