import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Languages, TextCursorInput, LogOut, Home } from "lucide-react";

import logo from "@/assets/logo.jpg";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { toggleLang, toggleLargeText } from "@/store/uiSlice";
import { useNavigate, useLocation } from "react-router-dom";

type Props = {
  title?: {
    en: string;
    bn: string;
  };
};

export function Header({ title }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { lang, largeText } = useAppSelector((state) => state.ui);

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageTitle =
    title?.[lang] ?? (lang === "bn" ? "রিকশা সিস্টেম" : "Rickshaw System");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/");
  };

  // Only show logout on role dashboard pages
  const showLogout = ["/driver", "/owner", "/admin"].some((path) =>
    location.pathname.startsWith(path),
  );

  const controlClass = largeText
    ? "h-12 px-4 text-lg rounded-xl"
    : "h-10 px-3 text-sm rounded-xl";

  return (
    <header
      className={`
        sticky top-0 z-50 border-b border-white/60
        bg-white/80 backdrop-blur-xl
        shadow-sm transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate("/")}
            className="rounded-lg p-2 -ml-1 hover:bg-neutral-100 transition"
            aria-label="Home"
          >
            <Home className="h-5 w-5 text-neutral-700" />
          </button>

          <img
            src={logo}
            alt="Rickshaw Logo"
            className="h-9 w-9 rounded-md object-contain"
          />

          <h1
            className={`
              font-semibold tracking-tight text-emerald-800
              ${largeText ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}
            `}
          >
            {pageTitle}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className={controlClass}
            onClick={() => dispatch(toggleLang())}
          >
            <Languages className="mr-2 h-4 w-4" />
            {lang.toUpperCase()}
          </Button>

          <Button
            type="button"
            variant="outline"
            className={controlClass}
            onClick={() => dispatch(toggleLargeText())}
          >
            <TextCursorInput className="mr-2 h-4 w-4" />
            A+
          </Button>

          {showLogout && (
            <Button
              type="button"
              variant="outline"
              className={`
                ${controlClass}
                ml-1 border-red-200 bg-red-50 text-red-700
                hover:bg-red-100 hover:text-red-800
              `}
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
