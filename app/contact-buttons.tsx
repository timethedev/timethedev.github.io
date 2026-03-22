"use client";

import { useState } from "react";
import { Github, Mail, MessageCircle } from "lucide-react";

const DISCORD_USERNAME = "timeticks";
const GMAIL_ADDRESS = "shakespearelyle01@gmail.com";
const GITHUB_URL = "https://github.com/timethedev";

export default function ContactButtons() {
  const [showDiscordToast, setShowDiscordToast] = useState(false);

  const copyDiscord = async () => {
    await navigator.clipboard.writeText(DISCORD_USERNAME);
    setShowDiscordToast(true);
    window.setTimeout(() => setShowDiscordToast(false), 1400);
  };

  return (
    <div className="relative mt-8 flex flex-wrap justify-center gap-4">
      <div
        className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/70 bg-zinc-950 px-3 py-1 text-xs font-medium text-cyan-200 transition ${
          showDiscordToast ? "opacity-100" : "opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        Copied Username
      </div>
      <button
        type="button"
        onClick={copyDiscord}
        className="click-bounce panel flex h-12 min-w-32 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-zinc-100 transition hover:border-cyan-400 hover:text-cyan-200"
        aria-label="Copy Discord username"
      >
        <MessageCircle size={16} />
        Discord
      </button>

      <a
        href={`mailto:${GMAIL_ADDRESS}`}
        className="click-bounce panel flex h-12 min-w-32 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-zinc-100 transition hover:border-cyan-400 hover:text-cyan-200"
        aria-label="Send email via Gmail"
      >
        <Mail size={16} />
        Gmail
      </a>

      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="click-bounce panel flex h-12 min-w-32 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-zinc-100 transition hover:border-cyan-400 hover:text-cyan-200"
        aria-label="Open GitHub profile"
      >
        <Github size={16} />
        GitHub
      </a>
    </div>
  );
}
