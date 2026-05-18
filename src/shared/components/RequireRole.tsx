import { Navigate } from "react-router-dom";

type Role = "driver" | "owner" | "admin";

type Props = {
  role: Role;
  children: React.ReactNode;
};

export default function RequireRole({ role, children }: Props) {
  const savedRole = localStorage.getItem("role") as Role | null;

  // 🚨 No role found → treat as unauthenticated
  if (!savedRole) {
    return <Navigate to="/" replace />;
  }

  // 🚨 Role mismatch → block access
  if (savedRole !== role) {
    return <Navigate to="/" replace />;
  }

  // ✅ Allowed
  return <>{children}</>;
}
