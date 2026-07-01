import Link from "next/link";
import { APP_NAME } from "@/utils/constants";

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-950">
          {APP_NAME}
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <Link href="/toolkit" className="rounded-md px-3 py-2 hover:bg-slate-100">
            Toolkit
          </Link>
          <Link href="/docs" className="rounded-md px-3 py-2 hover:bg-slate-100">
            Docs
          </Link>
        </div>
      </nav>
    </header>
  );
}
