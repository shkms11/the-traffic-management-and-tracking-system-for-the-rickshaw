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

const roleStyles: Record<"driver" | "owner" | "admin", string> = {
  // Primary role
  driver:
    "bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-600",

  // UPDATED: owner now green shade (was blue before)
  owner:
    "bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200 focus-visible:ring-emerald-500",

  // Authority role
  admin:
    "bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 focus-visible:ring-amber-500",
};

function RoleButton({
  label,
  role,
  loading,
  disabled,
  onClick,
}: {
  label: string;
  role: Role;
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  const isLoading = loading;

  return (
    <Button
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={[
        "h-14 w-full rounded-md font-semibold transition-all border",
        "focus-visible:outline-none focus-visible:ring-2",
        roleStyles[role],
        isLoading ? "opacity-70 cursor-not-allowed" : "",
      ].join(" ")}
    >
      {isLoading ? "Loading..." : label}
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
    if (loadingRole) return;

    setLoadingRole(role);

    setTimeout(() => {
      onSelectRole(role);
    }, 250);
  };

  const isRoleStep = step === 2;

  return (
    <Card className="border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
      <div className="space-y-6 text-center">
        {/* TITLE */}
        <h3 className="text-xl font-semibold text-neutral-800">
          {isRoleStep ? text.chooseRole : text.chooseAction}
        </h3>

        {/* STEP 1: LOGIN / REGISTER */}
        {!isRoleStep && (
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
        )}

        {/* STEP 2: ROLE SELECTION */}
        {isRoleStep && (
          <>
            <p className="text-sm text-neutral-500">
              {mode === "login" ? text.login : text.register}
            </p>

            <div className="grid gap-3">
              <RoleButton
                label={text.driver}
                role="driver"
                loading={loadingRole === "driver"}
                disabled={!!loadingRole}
                onClick={() => handleRoleSelect("driver")}
              />

              <RoleButton
                label={text.owner}
                role="owner"
                loading={loadingRole === "owner"}
                disabled={!!loadingRole}
                onClick={() => handleRoleSelect("owner")}
              />

              <RoleButton
                label={text.admin}
                role="admin"
                loading={loadingRole === "admin"}
                disabled={!!loadingRole}
                onClick={() => handleRoleSelect("admin")}
              />
            </div>

            <Button
              variant="outline"
              className="mt-2 h-11 w-full"
              onClick={onBack}
              disabled={!!loadingRole}
            >
              {text.back}
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}
