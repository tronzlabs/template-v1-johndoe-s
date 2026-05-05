import { Link } from 'react-router-dom';
import { site } from '../data/site';
import Marquee from './Marquee';
import tronzlabsLogo from '../assets/tronzlabs-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-current/10 pb-10 pt-20 sm:mt-40">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="label mb-6">Get in touch</p>
            <h3 className="display text-[clamp(3rem,8vw,7rem)]">
              Have an idea?
              <br />
              <span className="display-italic opacity-90">Let’s talk.</span>
            </h3>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-current px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:bg-current hover:text-bone-200 dark:hover:text-ink-900"
              data-cursor-label="Contact"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <p className="label mb-4">Index</p>
              <ul className="space-y-2">
                {site.nav.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="link-underline text-sm">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label mb-4">Elsewhere</p>
              <ul className="space-y-2">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label mb-4">Contact</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline block text-sm"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm opacity-60">{site.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <Marquee speed={30}>
            <span className="display whitespace-nowrap text-[clamp(5rem,18vw,18rem)] leading-none">
              John&nbsp;Doe&nbsp;
              <span className="display-italic opacity-60">— Available for select work&nbsp;</span>
            </span>
          </Marquee>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-current/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-[0.18em] opacity-60">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono opacity-60 normal-case tracking-normal">
            <span>Built by</span>
            <a href="https://tronzlabs.com" target="_blank" rel="noreferrer" className="font-medium hover:opacity-80">
              <span className="text-current">Tron</span>
              <span className="text-red-500 underline underline-offset-2">z</span>
              <span className="text-current">labs</span>
            </a>
            <img src={tronzlabsLogo} alt="Tronzlabs logo" className="h-4 w-4 object-contain" />
          </div>
          <p className="font-mono uppercase tracking-[0.18em] opacity-60">
            Crafted with care · v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
