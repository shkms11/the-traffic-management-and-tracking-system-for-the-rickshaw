export function Footer() {
  return (
    <footer className="px-4 pb-4 pt-6 sm:px-6 sm:pb-6">
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden
          rounded-2xl
          border border-white/30
          bg-white/20
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.06)]
        "
      >
        {/* Liquid shine overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

        <div
          className="
            relative z-10
            flex flex-col gap-2
            px-4 py-4
            text-center
            sm:flex-row sm:items-center sm:justify-between
            sm:px-6
            sm:text-left
          "
        >
          <p className="text-sm text-neutral-700">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-emerald-800">
              Rickshaw System
            </span>
            . All rights reserved.
          </p>

          <p className="text-sm text-neutral-600">
            Built for{" "}
            <span className="font-medium text-neutral-800">
              drivers, owners & admins
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
