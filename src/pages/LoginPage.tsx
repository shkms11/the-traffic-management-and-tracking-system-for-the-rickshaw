import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setRole, type Role } from "../shared/lib/auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Mode = "login" | "register";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");

  const handleSelect = (role: Role) => {
    setRole(role);
    navigate(`/${role}`);
  };

  const roles: { role: Role; desc: string }[] = [
    {
      role: "admin",
      desc: "System monitoring, traffic analytics, control center",
    },
    {
      role: "owner",
      desc: "Manage rickshaws, drivers, and earnings",
    },
    {
      role: "user",
      desc: "Find and track nearest rickshaws",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Rickshaw System</h1>
          <p className="text-gray-500">
            Select your role to {mode === "login" ? "login" : "register"}
          </p>
        </div>

        {/* Mode Switch */}
        <div className="flex justify-center gap-2">
          <Button
            variant={mode === "login" ? "default" : "outline"}
            onClick={() => setMode("login")}
          >
            Login
          </Button>

          <Button
            variant={mode === "register" ? "default" : "outline"}
            onClick={() => setMode("register")}
          >
            Register
          </Button>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {roles.map((r) => (
            <Card
              key={r.role}
              className="p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => handleSelect(r.role)}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold capitalize">{r.role}</h2>
                <Badge variant="secondary">{mode}</Badge>
              </div>

              <p className="text-sm text-gray-500">{r.desc}</p>

              <Button className="w-full mt-4">
                {mode === "login" ? "Login" : "Register"} as {r.role}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
