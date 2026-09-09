import { Zap } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

/**
 * Visual reference for GlassButton's size variants — not wired into any
 * route. Render it from a scratch page (e.g. app/dev/glass-button/page.tsx)
 * if you want to preview it in the browser.
 */
export default function GlassButtonDemo() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2.5rem",
        background: "var(--bg)",
      }}
    >
      <GlassButton size="sm">Small</GlassButton>
      <GlassButton size="default">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          Generate
          <Zap size={18} />
        </span>
      </GlassButton>
      <GlassButton size="lg">Submit</GlassButton>
      <GlassButton size="icon" aria-label="Generate">
        <Zap size={18} />
      </GlassButton>
    </div>
  );
}
