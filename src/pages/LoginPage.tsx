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

  const roles: {
    role: Role;
    title: string;
    desc: string;
  }[] = [
    {
      role: "admin",
      title: "Admin",
      desc: "Monitor traffic, analyze congestion, and manage city operations.",
    },
    {
      role: "owner",
      title: "Owner",
      desc: "Manage your rickshaws, drivers, and operational earnings.",
    },
    {
      role: "driver",
      title: "Driver",
      desc: "Track your rickshaw, monitor GPS, and view travel distance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            Rickshaw Traffic Management System
          </h1>

          <p className="text-gray-500">
            Choose your role to{" "}
            <span className="font-medium">
              {mode === "login" ? "login" : "register"}
            </span>
          </p>
        </div>

        {/* Login/Register Toggle */}
        <div className="flex justify-center gap-3">
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
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((item) => (
            <Card
              key={item.role}
              onClick={() => handleSelect(item.role)}
              className="cursor-pointer p-5 transition hover:shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>

                <Badge variant="secondary" className="capitalize">
                  {mode}
                </Badge>
              </div>

              <p className="min-h-[72px] text-sm text-gray-500">{item.desc}</p>

              <Button className="mt-4 w-full">
                {mode === "login" ? "Login" : "Register"} as {item.title}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
