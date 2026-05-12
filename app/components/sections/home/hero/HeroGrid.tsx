export default function HeroGrid() {
  return (
    <div
      className="
        absolute inset-0 z-10
        opacity-[0.05]
        pointer-events-none
      "
    >
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),
          linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
          bg-[size:120px_120px]
        "
      />
    </div>
  );
}