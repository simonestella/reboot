import { HeroSection } from "@/components/sections/hero-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { TipsSection } from "@/components/sections/tips-section";
import { BackToTop } from "@/components/shared/back-to-top";

export default function Home() {
  return (
    <main className="container-shell">
      <HeroSection />
      <TimelineSection />
      <TipsSection />

      <BackToTop />

      <footer className="mt-16 pt-8 border-t border-[var(--card-border-solid)] text-center">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Reboot —{" "}
          <a
            href="https://simonestella.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--primary)] transition-colors underline underline-offset-2"
          >
            Simone Stella
          </a>
        </p>
      </footer>
    </main>
  );
}
