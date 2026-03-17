import React, { useEffect, useState } from "react";

const HEALTH_STATUS = {
  UNKNOWN: "unknown",
  OK: "ok",
  ERROR: "error"
};

export default function WelcomeScreen() {
  const [status, setStatus] = useState(HEALTH_STATUS.UNKNOWN);

  useEffect(() => {
    let cancelled = false;

    async function pingHealth() {
      try {
        const res = await fetch("/health");
        if (!cancelled) {
          setStatus(res.ok ? HEALTH_STATUS.OK : HEALTH_STATUS.ERROR);
        }
      } catch (e) {
        if (!cancelled) {
          setStatus(HEALTH_STATUS.ERROR);
        }
      }
    }

    pingHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  const isOk = status === HEALTH_STATUS.OK;
  const isError = status === HEALTH_STATUS.ERROR;

  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-3xl w-full space-y-10">
        <div className="space-y-4">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
            Solo Dev Scaffold
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-slate-900/80 px-4 py-1.5 shadow-lg shadow-emerald-500/10">
            <span className="text-2xl leading-none">🚀</span>
            <span className="text-sm font-medium tracking-wide text-emerald-300">
              You&apos;re in.
            </span>
          </div>
          <p className="text-lg text-slate-300">
            <span className="font-semibold text-slate-50">
              node-react-pg-template
            </span>{" "}
            is running.
          </p>
          <p className="text-sm text-slate-400">
            Stack: <span className="text-slate-200">Node/Express</span>{" "}
            &middot; <span className="text-slate-200">React/Vite</span> &middot;{" "}
            <span className="text-slate-200">PostgreSQL</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] items-start">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={[
                  "h-2.5 w-2.5 rounded-full",
                  "transition-colors duration-300",
                  status === HEALTH_STATUS.UNKNOWN &&
                    "bg-yellow-400/70 shadow-[0_0_10px_rgba(250,204,21,0.6)]",
                  isOk &&
                    "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)] animate-pulse",
                  isError &&
                    "bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]"
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
              <div className="text-sm">
                <div className="font-medium text-slate-100">
                  {isOk
                    ? "Server connected"
                    : isError
                      ? "Server unreachable"
                      : "Checking server..."}
                </div>
                <div className="text-xs text-slate-500">
                  GET <code className="font-mono text-xs text-slate-300">/health</code>{" "}
                  from the Node/Express server
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-black/60 p-4 font-mono text-xs text-emerald-300 shadow-inner shadow-emerald-500/10">
              <div className="text-slate-500 mb-2">
                # next steps &mdash; you&apos;re ready to build
              </div>
              <pre className="space-y-1">
                <div>✓ Clone repo</div>
                <div>✓ Copy .env.example → .env</div>
                <div>✓ docker compose up db</div>
                <div>✓ npm install</div>
                <div>✓ npm run dev</div>
                <div>→ Rename this template and start building</div>
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">
                ascii vibes
              </div>
              <pre className="font-mono text-[10px] leading-[1.2] text-slate-400">
{String.raw`   _   _           _           _                    
  | \ | | ___  __| | ___ _ __ (_)___  ___  _ __   
  |  \| |/ _ \/ _  |/ _ \ '_ \| / __|/ _ \| '_ \  
  | |\  |  __/ (_| |  __/ | | | \__ \ (_) | | | | 
  |_| \_|\___|\__,_|\___|_| |_|_|___/\___/|_| |_| 
`}
              </pre>
            </div>

            <footer className="text-xs text-slate-500 space-y-1">
              <div>
                Built with{" "}
                <a
                  href="https://github.com/devinegger/node-react-pg-template"
                  className="text-emerald-300 hover:text-emerald-200 underline decoration-emerald-500/60"
                  target="_blank"
                  rel="noreferrer"
                >
                  node-react-pg-template
                </a>
              </div>
              <div className="text-slate-600">
                Swap this screen out once you&apos;re ready to ship your own UI.
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

