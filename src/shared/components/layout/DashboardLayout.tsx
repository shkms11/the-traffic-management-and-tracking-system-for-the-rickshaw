import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { clearRole, getRole, type Role } from "@/shared/lib/auth";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const role = getRole();

  useEffect(() => {
    if (!role) {
      navigate("/", { replace: true });
    }
  }, [role, navigate]);

  const handleLogout = () => {
    clearRole();
    navigate("/", { replace: true });
  };

  const navItems: Record<Role, { label: string; path: string }[]> = {
    admin: [
      {
        label: "Admin Dashboard",
        path: "/admin",
      },
    ],
    owner: [
      {
        label: "Owner Dashboard",
        path: "/owner",
      },
    ],
    driver: [
      {
        label: "Driver Dashboard",
        path: "/driver",
      },
    ],
  };

  if (!role) return null;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col bg-gray-900 p-5 text-white">
        {/* Logo / App Name */}
        <div className="mb-6 space-y-2">
          <h1 className="text-lg font-bold">Rickshaw System</h1>

          <Badge variant="secondary" className="capitalize">
            {role}
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {navItems[role].map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-md px-3 py-2 transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="mt-auto">
          <Separator className="my-4 bg-gray-700" />

          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <h2 className="mb-6 text-2xl font-semibold">{title}</h2>

        {children}
      </main>
    </div>
  );
}
