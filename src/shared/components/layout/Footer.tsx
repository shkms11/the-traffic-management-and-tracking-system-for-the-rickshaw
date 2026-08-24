export function Footer() {
  return (
    <footer className="px-4 pb-4 pt-6 sm:px-6 sm:pb-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t px-2 pt-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-emerald-700">Rickshaw System</span>.
          All rights reserved.
        </p>

        <p className="text-sm text-muted-foreground">
          Built for{" "}
          <span className="font-medium text-slate-700">
            drivers, owners & admins
          </span>
        </p>
      </div>
    </footer>
  );
}
