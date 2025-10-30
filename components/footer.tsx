export default function Footer() {
  return (
    <footer className="px-4 pb-12 text-center text-white/50">
      <small className="block text-xs uppercase tracking-[0.35em]">
        © {new Date().getFullYear()} Tara Bar. All nights reserved.
      </small>
      <p className="mt-3 text-xs text-white/40">
        Crafted with good vibes, neon dreams, and a splash of React.
      </p>
    </footer>
  );
}
