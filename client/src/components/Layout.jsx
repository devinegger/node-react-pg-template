import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50">
      <aside className="w-64 border-r border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-sm font-semibold tracking-wide text-emerald-400">
            node-react-pg-template
          </span>
        </div>
        <nav className="p-4 space-y-1 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                "text-slate-300 hover:text-white hover:bg-slate-800/70",
                isActive ? "bg-slate-800 text-white" : ""
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-emerald-500/10 text-emerald-400 text-xs">
              H
            </span>
            <span>Home</span>
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 min-w-0 flex flex-col">
        <header className="h-14 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-950/60 backdrop-blur">
          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Solo Dev Scaffold
          </div>
        </header>
        <div className="flex-1 min-h-0">{children}</div>
      </main>
    </div>
  );
}

