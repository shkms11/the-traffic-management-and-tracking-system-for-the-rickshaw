import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { Mode, Role, TextPack } from "@/shared/types/home.types";

type Props = {
  text: TextPack;
  step: 1 | 2;
  mode: Mode | null;

  onLogin: () => void;
  onRegister: () => void;
  onBack: () => void;

  onSelectRole: (role: Role) => void;
};

function RoleButton({
  label,
  onClick,
  variant = "default",
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  variant?: "default" | "secondary" | "admin";
  disabled?: boolean;
}) {
  const base =
    "h-14 w-full border font-semibold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "default"
      ? "bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-600 border-emerald-700"
      : variant === "secondary"
        ? "border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100 focus-visible:ring-blue-500"
        : "border-amber-400 bg-amber-50 text-amber-800 hover:bg-amber-100 focus-visible:ring-amber-500";

  return (
    <Button
      className={`${base} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}

export function AuthCard({
  text,
  step,
  mode,
  onLogin,
  onRegister,
  onBack,
  onSelectRole,
}: Props) {
  const [loadingRole, setLoadingRole] = useState<Role | null>(null);

  const handleRoleSelect = (role: Role) => {
    setLoadingRole(role);

    // small UX delay so user understands action happened
    setTimeout(() => {
      onSelectRole(role);
    }, 200);
  };

  return (
    <Card
      id="auth-card"
      className="border-neutral-200 bg-white p-6 shadow-sm sm:p-7"
    >
      <div className="space-y-6 text-center">
        {/* TITLE */}
        <h3 className="text-xl font-semibold text-neutral-800">
          {step === 1 ? text.chooseAction : text.chooseRole}
        </h3>

        {/* STEP 1 */}
        {step === 1 ? (
          <div className="grid gap-3">
            <Button
              className="h-12 bg-emerald-700 text-white hover:bg-emerald-800"
              onClick={onLogin}
            >
              {text.login}
            </Button>

            <Button variant="outline" className="h-12" onClick={onRegister}>
              {text.register}
            </Button>
          </div>
        ) : (
          <>
            {/* MODE INFO */}
            <p className="text-sm text-neutral-500">
              {mode === "login" ? text.login : text.register}
            </p>

            {/* ROLE SELECTION */}
            <div className="grid gap-3">
              <RoleButton
                label={text.driver}
                onClick={() => handleRoleSelect("driver")}
                disabled={loadingRole !== null}
                variant="default"
              />

              <RoleButton
                label={text.owner}
                onClick={() => handleRoleSelect("owner")}
                disabled={loadingRole !== null}
                variant="secondary"
              />

              <RoleButton
                label={text.admin}
                onClick={() => handleRoleSelect("admin")}
                disabled={loadingRole !== null}
                variant="admin"
              />
            </div>

            {/* LOADING FEEDBACK */}
            {loadingRole && (
              <p className="text-xs text-neutral-400">
                Opening {loadingRole} dashboard...
              </p>
            )}

            {/* BACK */}
            <Button
              variant="outline"
              className="mt-2 h-11 w-full"
              onClick={onBack}
              disabled={loadingRole !== null}
            >
              {text.back}
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}
