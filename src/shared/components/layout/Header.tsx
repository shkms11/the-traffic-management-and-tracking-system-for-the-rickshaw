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

  const showLogout = ["/driver", "/owner", "/admin"].some((path) =>
    location.pathname.startsWith(path),
  );

  const controlClass = `
    border-white/30
    bg-white/25
    backdrop-blur-md
    hover:bg-white/40
    transition-all
    shadow-sm
    ${
      largeText
        ? "h-12 px-4 text-lg rounded-xl"
        : "h-10 px-3 text-sm rounded-xl"
    }
  `;

  return (
    <header
      className={`
        sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div
        className="
          relative mx-auto max-w-6xl overflow-hidden
          rounded-2xl
          border border-white/30
          bg-white/20
          backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        "
      >
        {/* Liquid shine overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent" />

        <div className="relative z-10 flex items-center justify-between gap-3 px-3 py-3 sm:px-5">
          {/* LEFT */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <button
              onClick={() => navigate("/")}
              className="
                rounded-xl p-2
                bg-white/20
                hover:bg-white/35
                transition
                shrink-0
              "
              aria-label="Home"
            >
              <Home className="h-5 w-5 text-neutral-700" />
            </button>

            <img
              src={logo}
              alt="Rickshaw Logo"
              className="
                h-9 w-9 rounded-lg object-contain
                border border-white/30
                shadow-sm
                shrink-0
              "
            />

            <h1
              className={`
                truncate font-semibold tracking-tight text-emerald-900
                ${largeText ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
              `}
            >
              {pageTitle}
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 shrink-0">
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
                onClick={handleLogout}
                className={`
                  ${
                    largeText
                      ? "h-12 px-4 text-lg rounded-xl"
                      : "h-10 px-3 text-sm rounded-xl"
                  }
                  border-red-200/60
                  bg-red-50/70
                  text-red-700
                  backdrop-blur-md
                  hover:bg-red-100/80
                  hover:text-red-800
                  transition-all
                `}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
