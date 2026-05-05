import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { site } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-expo',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <div className="container-x flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-3"
            data-cursor-label="Home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-current font-mono text-[11px] tracking-[0.05em] transition-transform duration-700 ease-expo group-hover:rotate-[360deg]">
              {site.initials}
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.18em] sm:inline">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <ul className="flex items-center gap-1 rounded-full border border-current/10 bg-current/[0.03] px-1.5 py-1.5 backdrop-blur-md">
              {site.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      clsx(
                        'relative inline-flex items-center rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-500',
                        isActive
                          ? 'bg-current/[0.92] text-bone-200 dark:text-ink-900'
                          : 'opacity-70 hover:opacity-100'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 md:hidden"
              aria-label="Menu"
            >
              <span className="relative block h-2.5 w-4">
                <span
                  className={clsx(
                    'absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-500',
                    open && 'translate-y-[5px] rotate-45'
                  )}
                />
                <span
                  className={clsx(
                    'absolute bottom-0 left-0 block h-px w-full bg-current transition-transform duration-500',
                    open && '-translate-y-[5px] -rotate-45'
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={clsx(
          'fixed inset-0 z-30 origin-top transition-all duration-700 ease-expo md:hidden',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-bone-200 dark:bg-ink-900" />
        <div className="container-x relative flex h-full flex-col justify-center pt-16">
          <ul className="flex flex-col gap-2">
            {site.nav.map((item, i) => (
              <li
                key={item.to}
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                className={clsx(
                  'transform-gpu transition-all duration-700 ease-expo',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                )}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className="display block text-[clamp(3.5rem,15vw,7rem)] leading-none"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex items-center justify-between border-t border-current/10 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
            <span>{site.location}</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
