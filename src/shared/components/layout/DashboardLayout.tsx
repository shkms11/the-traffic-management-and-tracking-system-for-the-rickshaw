import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Home } from "lucide-react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Left: Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="rounded-md p-2 hover:bg-neutral-100 transition"
              aria-label="Go Home"
            >
              <Home size={18} />
            </button>

            <h1 className="text-base sm:text-lg font-semibold text-neutral-800">
              {title}
            </h1>
          </div>

          {/* Right: Logout */}
          <button
            onClick={handleLogout}
            className="
              flex items-center gap-2
              rounded-md bg-red-500 px-3 py-1.5
              text-sm font-medium text-white
              hover:bg-red-600 transition
            "
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="rounded-xl bg-white shadow-sm border p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
