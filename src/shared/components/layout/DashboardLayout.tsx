import { Link, useNavigate } from "react-router-dom";
import { clearRole, getRole, type Role } from "@/shared/lib/auth";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const role = getRole();

  const handleLogout = () => {
    clearRole();
    navigate("/");
  };

  const navItems: Record<Role, { label: string; path: string }[]> = {
    admin: [{ label: "Admin Dashboard", path: "/admin" }],
    owner: [{ label: "Owner Dashboard", path: "/owner" }],
    user: [{ label: "User Dashboard", path: "/user" }],
  };

  // safety fallback (if no role exists)
  if (!role) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5 flex flex-col">
        <h1 className="text-lg font-bold mb-6">Rickshaw System</h1>

        {/* Role-based navigation */}
        <nav className="flex flex-col gap-2">
          {navItems[role].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-blue-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
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

      {/* Main content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        {children}
      </main>
    </div>
  );
}
