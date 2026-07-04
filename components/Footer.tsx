export default function Footer() {
  return (
    <footer className="bg-navy py-12 md:py-14">
      <div className="section-pad max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-cream/45 text-fluid-xs tracking-wide">
          © {new Date().getFullYear()} Gautami Kamble — Candidate for General
          Secretary, VIT Mumbai.
        </p>
        <p className="text-cream/30 text-fluid-xs tracking-widest2 uppercase">
          Building Better Together
        </p>
      </div>
    </footer>
  );
}
