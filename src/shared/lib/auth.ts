export type Role = "admin" | "owner" | "user";

const ROLE_KEY = "app_role";

export function setRole(role: Role) {
  localStorage.setItem(ROLE_KEY, role);
}

export function getRole(): Role | null {
  return localStorage.getItem(ROLE_KEY) as Role | null;
}

export function clearRole() {
  localStorage.removeItem(ROLE_KEY);
}
