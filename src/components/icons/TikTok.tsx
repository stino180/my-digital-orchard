/**
 * lucide-react carries Facebook, Instagram and Twitter but no TikTok mark, so
 * this fills the gap. Sized and stroked to sit beside the lucide icons —
 * currentColor, 24x24 viewBox, no fixed dimensions.
 */
export function TikTok({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M16.5 3c.3 1.9 1.4 3.4 3.2 3.8v2.6c-1.2.1-2.4-.2-3.4-.8v5.9c0 3.3-2.4 5.5-5.4 5.5A5.4 5.4 0 0 1 5.5 14c0-3.1 2.7-5.6 6-5.3v2.7c-.3-.1-.7-.2-1.1-.2-1.5 0-2.7 1.2-2.7 2.7 0 1.6 1.2 2.8 2.7 2.8 1.6 0 2.8-1.2 2.8-2.9V3h3.3Z" />
    </svg>
  );
}
