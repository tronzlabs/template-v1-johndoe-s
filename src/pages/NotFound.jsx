import { Link } from 'react-router-dom';
import { RevealText } from '../components/Reveal';

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="label mb-6">— Error 404</p>
      <h1 className="display text-balance text-[clamp(3rem,12vw,12rem)]">
        <span className="block overflow-hidden">
          <RevealText text="Page not" />
        </span>
        <span className="block overflow-hidden">
          <span className="display-italic">
            <RevealText text="found." delay={0.05} />
          </span>
        </span>
      </h1>
      <p className="mt-8 max-w-md opacity-70">
        The page you’re looking for has been moved, renamed, or never existed in the first
        place. Let’s get you back on track.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-current px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:bg-current hover:text-bone-200 dark:hover:text-ink-900"
      >
        Back to home
        <span aria-hidden>→</span>
      </Link>
    </section>
  );
}
