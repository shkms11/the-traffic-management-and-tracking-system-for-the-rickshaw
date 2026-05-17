import { Navigate } from "react-router-dom";
import { getRole, type Role } from "../lib/auth";

export default function RequireRole({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const currentRole = getRole();

  if (currentRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
