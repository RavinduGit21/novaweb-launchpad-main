import logoSrc from "@/assets/novaweb-logo-dark.png";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Novaweb logo"
      width="180"
      height="48"
      fetchPriority="high"
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}
