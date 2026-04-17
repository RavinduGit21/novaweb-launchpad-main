export function AnimatedBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-blue/40 blur-3xl animate-blob" style={{ background: "radial-gradient(circle, oklch(0.58 0.22 258 / 0.55), transparent 60%)" }} />
      <div className="absolute top-40 -right-24 h-[24rem] w-[24rem] rounded-full blur-3xl animate-blob" style={{ background: "radial-gradient(circle, oklch(0.84 0.17 215 / 0.45), transparent 60%)", animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full blur-3xl animate-blob" style={{ background: "radial-gradient(circle, oklch(0.58 0.22 258 / 0.35), transparent 60%)", animationDelay: "-12s" }} />
    </div>
  );
}
