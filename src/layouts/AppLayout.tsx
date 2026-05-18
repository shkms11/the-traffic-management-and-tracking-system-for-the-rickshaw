import { Outlet } from "react-router-dom";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 mx-auto w-full max-w-6xl p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
