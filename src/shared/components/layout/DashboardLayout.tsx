import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({ title, children }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear auth data (adjust based on your setup)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // redirect to homepage
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>

        <button
          onClick={handleLogout}
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>

      {/* Content */}
      <main className="p-4">{children}</main>
    </div>
  );
}
