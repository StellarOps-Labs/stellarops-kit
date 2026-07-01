import Link from "next/link";
import { TAGLINE } from "@/utils/constants";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#0f172a_0%,#155e75_54%,#166534_100%)] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-100">Independent open-source maintainer toolkit</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-normal sm:text-6xl">StellarOps Kit</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{TAGLINE}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/toolkit" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm">
            Open toolkit
          </Link>
          <Link href="/docs" className="rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white">
            Read docs
          </Link>
        </div>
      </div>
    </section>
  );
}
