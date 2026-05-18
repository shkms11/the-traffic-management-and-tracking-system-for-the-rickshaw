import type { TextPack } from "@/shared/types/home.types";

type Props = {
  text: TextPack;
};

export function HomeFooter({ text }: Props) {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-4xl px-4 py-5 text-sm text-neutral-500 sm:px-6">
        © {new Date().getFullYear()} {text.title} — {text.footer}
      </div>
    </footer>
  );
}
