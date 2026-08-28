"use client";

import { useEffect, useRef, useState } from "react";

/**
 * First-visit-of-a-session title sequence: the stylised VISIO "V" sweeps in as
 * a gradient stroke, an arrow shoots out of its top, and the mark resolves into
 * the full VISIO wordmark before the panel wipes up into the hero.
 *
 * A tiny boot script in app/layout.tsx decides *synchronously* (before paint)
 * whether to show this — it adds the `intro-lock` class to <html> unless the
 * visitor has reduced motion enabled or has already seen the intro this
 * session. This component then runs the timed sequence and clears the lock.
 */
const HOLD_MS = 2200; // time the sequence plays before the wipe starts
const WIPE_MS = 800; // must match the .is-leaving transition in globals.css

export default function IntroOverlay() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const root = document.documentElement;

    // The boot script did not arm the intro (seen already / reduced motion).
    if (!root.classList.contains("intro-lock")) {
      setGone(true);
      return;
    }
    if (started.current) return;
    started.current = true;

    const finish = () => {
      root.classList.remove("intro-lock");
      setGone(true);
      try {
        sessionStorage.setItem("visio-intro-seen", "1");
      } catch {
        /* private mode — fine, it just replays next load */
      }
    };

    const toWipe = window.setTimeout(() => setLeaving(true), HOLD_MS);
    const toEnd = window.setTimeout(finish, HOLD_MS + WIPE_MS);

    const dismiss = () => {
      window.clearTimeout(toWipe);
      setLeaving(true);
      window.setTimeout(finish, WIPE_MS);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") dismiss();
    };
    window.addEventListener("keydown", onKey);
    // expose to the click handler below
    (root as HTMLElement & { __introDismiss?: () => void }).__introDismiss = dismiss;

    return () => {
      window.clearTimeout(toWipe);
      window.clearTimeout(toEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (gone) return null;

  const handleClick = () => {
    const root = document.documentElement as HTMLElement & { __introDismiss?: () => void };
    root.__introDismiss?.();
  };

  return (
    <div
      className={`intro-overlay${leaving ? " is-leaving" : ""}`}
      role="presentation"
      aria-hidden="true"
      onClick={handleClick}
    >
      <div className="intro-stage">
        {/* The "V" drawn as one gradient stroke that runs up into an arrow */}
        <svg className="intro-mark" viewBox="0 0 300 240" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="introVGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#c98a2b" />
              <stop offset="0.16" stopColor="#1b3e96" />
              <stop offset="0.44" stopColor="#17a6c6" />
              <stop offset="0.7" stopColor="#f0a91e" />
              <stop offset="1" stopColor="#14276b" />
            </linearGradient>
          </defs>
          <path
            className="iv-stroke"
            pathLength={1}
            d="M20 132 C22 102 35 93 47 100 C57 106 64 126 126 202 L262 26"
            stroke="url(#introVGrad)"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="iv-head"
            pathLength={1}
            d="M262 26 L232 33 M262 26 L256 56"
            stroke="url(#introVGrad)"
            strokeWidth={16}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* The mark resolves into the real wordmark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="intro-logo" src="/assets/img/visio-logo.png" alt="" />

        <svg className="intro-scribble" viewBox="0 0 220 24" fill="none" aria-hidden="true">
          <path
            pathLength={1}
            d="M6 14 C50 4 120 4 162 10 C178 12 198 16 214 12"
            stroke="var(--gold)"
            strokeWidth={5}
            strokeLinecap="round"
          />
        </svg>

        <span className="intro-dot d1" />
        <span className="intro-dot d2" />
        <span className="intro-dot d3" />
      </div>
      <span className="intro-skiphint">Curaj · Viziune · Impact</span>
    </div>
  );
}
