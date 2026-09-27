export default function MonoLabel({ children }: { children: React.ReactNode }) {
    return (
      <span className="inline-block font-mono text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">
        {children}
      </span>
    );
  }