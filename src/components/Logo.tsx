import logoSrc from "@/assets/novaweb-logo-dark.png";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Novaweb logo"
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}
