import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, RevealText } from '../components/Reveal';
import { projects } from '../data/site';

const ease = [0.16, 1, 0.3, 1];

function PageHeader() {
  return (
    <header className="container-x pt-12 sm:pt-20">
      <div className="grid grid-cols-12 items-end gap-6 border-b border-current/10 pb-10">
        <div className="col-span-12 lg:col-span-8">
          <p className="label mb-5">— Index · 2018 / 2025</p>
          <h1 className="display text-balance text-[clamp(3.25rem,11vw,12rem)]">
            <span className="block overflow-hidden">
              <RevealText text="Selected" />
            </span>
            <span className="block overflow-hidden">
              <span className="display-italic">
                <RevealText text="works." delay={0.05} />
              </span>
            </span>
          </h1>
        </div>
        <Reveal delay={0.4} className="col-span-12 lg:col-span-4">
          <p className="max-w-md text-pretty text-base leading-relaxed opacity-75">
            A non-exhaustive archive of recent collaborations — from product platforms to
            editorial sites and creative experiments. Drag your cursor across each row to
            preview.
          </p>
        </Reveal>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] opacity-50">
        <span className="col-span-1">Idx</span>
        <span className="col-span-5">Project</span>
        <span className="col-span-3 hidden sm:block">Discipline</span>
        <span className="col-span-2 hidden sm:block">Year</span>
        <span className="col-span-1 text-right">↗</span>
      </div>
    </header>
  );
}

function ProjectRow({ project, index, onHover }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.9, ease, delay: index * 0.04 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(-1)}
      className="group relative border-b border-current/10"
    >
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="grid grid-cols-12 items-center gap-6 py-7 sm:py-9"
        data-cursor-label="View"
      >
        <span className="col-span-1 font-mono text-xs opacity-50">{project.number}</span>
        <span className="col-span-11 sm:col-span-5">
          <span className="display block overflow-hidden text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.95]">
            <span className="inline-block transition-transform duration-700 ease-expo will-change-transform group-hover:translate-x-3">
              {project.title}
            </span>
          </span>
        </span>
        <span className="col-span-3 hidden text-sm opacity-70 sm:block">{project.role}</span>
        <span className="col-span-2 hidden font-mono text-xs opacity-50 sm:block">
          {project.year}
        </span>
        <span className="col-span-1 hidden justify-self-end text-lg sm:block">
          <span className="inline-block transition-transform duration-700 ease-expo group-hover:rotate-45">
            ↗
          </span>
        </span>
      </a>
      {/* hover background sweep */}
      <span className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full origin-bottom scale-y-0 bg-current/[0.04] transition-transform duration-700 ease-expo group-hover:scale-y-100" />
    </motion.li>
  );
}

function FloatingPreview({ active }) {
  const wrap = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (cur.current.x === 0 && cur.current.y === 0) {
        cur.current.x = e.clientX;
        cur.current.y = e.clientY;
      }
    };
    window.addEventListener('mousemove', onMove);
    let raf;
    const tick = () => {
      cur.current.x += (target.current.x - cur.current.x) * 0.14;
      cur.current.y += (target.current.y - cur.current.y) * 0.14;
      if (wrap.current) {
        wrap.current.style.transform = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className="pointer-events-none fixed left-0 top-0 z-20 hidden lg:block"
      style={{ width: 360, height: 220 }}
    >
      <AnimatePresence mode="wait">
        {active >= 0 && projects[active] && (
          <motion.div
            key={projects[active].slug}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.5, ease }}
            className="relative h-full w-full overflow-hidden rounded-md shadow-2xl"
            style={{ background: projects[active].color }}
          >
            <img
              src={projects[active].image}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(-1);

  return (
    <>
      <PageHeader />
      <section className="container-x mt-2">
        <ul className="border-t border-current/10">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} onHover={setActive} />
          ))}
        </ul>
      </section>
      <FloatingPreview active={active} />

      {/* Process strip */}
      <section className="container-x mt-32">
        <div className="grid grid-cols-12 gap-6 border-t border-current/10 pt-16">
          <div className="col-span-12 md:col-span-4">
            <p className="label">— Process</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="display text-balance text-[clamp(2.25rem,5vw,4rem)]">
              Every engagement starts with one question:
              <br />
              <span className="display-italic opacity-90">what makes this real?</span>
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {[
                { n: '01', t: 'Discovery', d: 'A short, decisive sprint — define the problem, the people, the constraints.' },
                { n: '02', t: 'Design Engineering', d: 'Tight feedback loops between interface, motion, and code.' },
                { n: '03', t: 'Ship & iterate', d: 'Launch in calm, measure in public, refine where it matters.' },
              ].map((s) => (
                <div key={s.n}>
                  <p className="font-mono text-xs opacity-50">{s.n}</p>
                  <h3 className="mt-3 text-lg font-medium">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-70">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
