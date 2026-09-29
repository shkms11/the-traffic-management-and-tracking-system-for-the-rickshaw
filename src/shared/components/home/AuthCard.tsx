import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const roleStyles: Record<Role, string> = {
  driver: "bg-emerald-700 text-white hover:bg-emerald-800",
  owner:
    "bg-white border border-emerald-200 text-emerald-900 hover:bg-emerald-50",
  admin:
    "bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100",
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
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`h-14 w-full rounded-xl font-semibold ${
        roleStyles[role]
      } ${loading ? "cursor-not-allowed opacity-70" : ""}`}
    >
      {loading ? "Loading..." : label}
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
    <div className="p-6 sm:p-7">
      <div className="space-y-6 text-center">
        <h3 className="text-xl font-semibold text-slate-800">
          {isRoleStep ? text.chooseRole : text.chooseAction}
        </h3>

        {!isRoleStep && (
          <div className="grid gap-3">
            <Button
              className="h-12 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800"
              onClick={onLogin}
            >
              {text.login}
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-xl"
              onClick={onRegister}
            >
              {text.register}
            </Button>
          </div>
        )}

        {isRoleStep && (
          <>
            <p className="text-sm text-muted-foreground">
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
              className="h-11 w-full rounded-xl"
              onClick={onBack}
              disabled={!!loadingRole}
            >
              {text.back}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
