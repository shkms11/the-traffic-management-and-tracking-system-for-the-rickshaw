export function Footer() {
  return (
    <footer className="border-t bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-center text-sm text-gray-600 sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {new Date().getFullYear()} Rickshaw System. All rights reserved.
        </p>

        <p className="text-gray-500">Built for drivers, owners & admins</p>
      </div>
    </footer>
  );
}
