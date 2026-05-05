import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, RevealText } from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import HeroClock from '../components/HeroClock';
import { site } from '../data/site';

const ease = [0.16, 1, 0.3, 1];

function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', subject: 'New project', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setState((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setState({ name: '', email: '', subject: 'New project', message: '' });
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Message sent — I’ll be in touch shortly.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2">
        <Field label="01 / Your name" required>
          <input
            type="text"
            required
            value={state.name}
            onChange={set('name')}
            placeholder="Jane Doe"
            className="input"
          />
        </Field>
        <Field label="02 / Email">
          <input
            type="email"
            required
            value={state.email}
            onChange={set('email')}
            placeholder="jane@studio.com"
            className="input"
          />
        </Field>
        <Field label="03 / Subject">
          <div className="flex flex-wrap gap-2">
            {['New project', 'Collaboration', 'Mentorship', 'Just saying hi'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setState((p) => ({ ...p, subject: s }))}
                className={
                  'rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ' +
                  (state.subject === s
                    ? 'border-current bg-current text-bone-200 dark:text-ink-900'
                    : 'border-current/20 hover:border-current/50')
                }
              >
                {s}
              </button>
            ))}
          </div>
        </Field>
        <Field label="04 / Tell me about the project">
          <textarea
            required
            rows={5}
            value={state.message}
            onChange={set('message')}
            placeholder="A few sentences are enough — what you’re building, when it ships, who it serves."
            className="input resize-none"
          />
        </Field>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Magnetic>
          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-full bg-current px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bone-200 transition-transform duration-500 ease-expo dark:text-ink-900"
            data-cursor-label="Send"
          >
            <span>Send message</span>
            <span aria-hidden>→</span>
          </button>
        </Magnetic>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-60">
          Or email{' '}
          <a className="link-underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgb(var(--fg) / 0.15);
          padding: 1rem 0;
          font-size: 1.125rem;
          line-height: 1.5;
          outline: none;
          color: rgb(var(--fg));
          transition: border-color 400ms ease;
        }
        .input::placeholder {
          color: rgb(var(--fg) / 0.35);
        }
        .input:focus {
          border-color: rgb(var(--fg));
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block py-3">
      <span className="label mb-1 block">{label}</span>
      {children}
    </label>
  );
}

function PageHeader() {
  return (
    <header className="container-x pt-12 sm:pt-20">
      <p className="label mb-6">— Contact / 2026</p>
      <h1 className="display text-balance text-[clamp(3rem,11vw,12rem)]">
        <span className="block overflow-hidden">
          <RevealText text="Have a project" />
        </span>
        <span className="block overflow-hidden">
          <span className="display-italic">
            <RevealText text="in mind?" delay={0.05} />
          </span>
        </span>
      </h1>
    </header>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader />
      <section className="container-x mt-20 sm:mt-28">
        <div className="grid grid-cols-12 gap-y-16 gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className="label mb-4">— Currently</p>
              <p className="text-pretty text-lg leading-relaxed">
                Booking a small number of engagements for{' '}
                <span className="display-italic">Q3 2026</span>. The best way to start a
                conversation is the form to the right — or email directly.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-6 border-y border-current/10 py-8">
              <div>
                <p className="label mb-2">Email</p>
                <a className="link-underline text-sm" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div>
                <p className="label mb-2">Based in</p>
                <p className="text-sm">{site.location}</p>
              </div>
              <div>
                <p className="label mb-2">Local time</p>
                <p className="text-sm"><HeroClock /></p>
              </div>
              <div>
                <p className="label mb-2">Response</p>
                <p className="text-sm">Within 24 hours</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="label mb-3">— Elsewhere</p>
              <ul className="grid grid-cols-2 gap-2">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-current/10 py-2 text-sm"
                    >
                      <span className="link-underline">{s.label}</span>
                      <span className="opacity-50 transition-transform duration-500 group-hover:translate-x-1">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Big email CTA */}
      <section className="container-x mt-32">
        <a
          href={`mailto:${site.email}`}
          className="group flex flex-col items-start border-y border-current/10 py-16"
          data-cursor-label="Email"
        >
          <p className="label mb-6">— Or just say hello</p>
          <span className="display flex flex-wrap items-baseline gap-x-6 text-balance text-[clamp(2.5rem,9vw,9rem)]">
            <span className="inline-block transition-transform duration-700 ease-expo group-hover:translate-x-3">
              {site.email}
            </span>
            <span className="text-accent">↗</span>
          </span>
        </a>
      </section>
    </>
  );
}
