import { ORG_NAME } from "@/utils/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-4 py-8 text-sm text-slate-300">
      <div className="mx-auto max-w-6xl">
        <p>{ORG_NAME} builds independent maintainer tooling for contributor-driven Stellar and Soroban projects.</p>
        <p className="mt-2 text-slate-400">
          Not official Stellar, Soroban, Drips Wave, or GrantFox tooling.
        </p>
      </div>
    </footer>
  );
}
