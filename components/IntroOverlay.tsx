"use client";

import { useEffect, useRef, useState } from "react";

/**
 * First-visit-of-a-session title sequence.
 *
 * A tiny boot script in app/layout.tsx decides *synchronously* (before paint)
 * whether to show this — it adds the `intro-lock` class to <html> unless the
 * visitor has reduced motion enabled or has already seen the intro this
 * session. This component then runs the timed sequence and clears the lock.
 */
const HOLD_MS = 1650; // time the sequence plays before the wipe starts
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
        <svg className="intro-ring" viewBox="0 0 260 260" fill="none" aria-hidden="true">
          <circle cx="130" cy="130" r="120" />
        </svg>
        <svg className="intro-arrow" viewBox="0 0 130 130" fill="none" aria-hidden="true">
          <path d="M14 116 C 34 78, 62 66, 104 26" />
          <path d="M104 26 l-21 3 M104 26 l-3 21" />
        </svg>
        <span className="intro-dot d1" />
        <span className="intro-dot d2" />
        <span className="intro-dot d3" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="intro-logo" src="/assets/img/visio-logo.png" alt="" />
      </div>
      <span className="intro-skiphint">Ediția 2026 · București</span>
    </div>
  );
}
