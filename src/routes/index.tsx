import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/HomePage";

import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import OwnerDashboardPage from "../pages/owner/OwnerDashboardPage";
import DriverDashboardPage from "../pages/driver/DriverDashboardPage";

import RequireRole from "../shared/components/RequireRole";

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<HomePage />} />

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <RequireRole role="admin">
            <AdminDashboardPage />
          </RequireRole>
        }
      />

      {/* OWNER */}
      <Route
        path="/owner"
        element={
          <RequireRole role="owner">
            <OwnerDashboardPage />
          </RequireRole>
        }
      />

      {/* DRIVER */}
      <Route
        path="/driver"
        element={
          <RequireRole role="driver">
            <DriverDashboardPage />
          </RequireRole>
        }
      />

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
