import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '../components/Marquee';
import Magnetic from '../components/Magnetic';
import { Reveal, RevealText } from '../components/Reveal';
import HeroClock from '../components/HeroClock';
import { projects, site } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const ease = [0.16, 1, 0.3, 1];

function Hero() {
  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={wrap} className="relative min-h-[100svh] pb-16">
      <motion.div style={{ y, opacity }} className="container-x relative pt-6">
        {/* Top meta */}
        <div className="grid grid-cols-2 gap-6 border-b border-current/10 pb-6 text-xs sm:grid-cols-4">
          <div>
            <p className="label mb-1">Index</p>
            <p className="font-mono opacity-80">001 / Portfolio</p>
          </div>
          <div>
            <p className="label mb-1">Discipline</p>
            <p className="font-mono opacity-80">Engineering · Design</p>
          </div>
          <div>
            <p className="label mb-1">Location</p>
            <p className="font-mono opacity-80">{site.location}</p>
          </div>
          <div>
            <p className="label mb-1">Local time</p>
            <p className="opacity-80"><HeroClock /></p>
          </div>
        </div>

        {/* Headline */}
        <div className="relative pt-12 sm:pt-20">
          <h1 className="display text-balance text-[clamp(3.75rem,12vw,15rem)]">
            <span className="block overflow-hidden">
              <RevealText text="Building" />
            </span>
            <span className="block overflow-hidden">
              <RevealText text="digital products" delay={0.05} />
            </span>
            <span className="block overflow-hidden pl-[12vw] sm:pl-[15vw]">
              <span className="display-italic">
                <RevealText text="with precision" delay={0.1} />
              </span>
            </span>
            <span className="block overflow-hidden">
              <RevealText text="and craft." delay={0.15} />
            </span>
          </h1>

          {/* Right column floating description */}
          <Reveal
            delay={0.6}
            className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 lg:grid-cols-12"
          >
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="label mb-4">— About</p>
              <p className="text-pretty text-base leading-relaxed sm:text-lg">
                I’m {site.name.split(' ')[0]}, an independent developer and creative engineer. I work
                with founders and studios to ship interfaces that feel inevitable —
                fast, considered, and built to last.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-3 rounded-full bg-current px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-bone-200 transition-transform duration-500 ease-expo dark:text-ink-900"
                    data-cursor-label="View"
                  >
                    <span>View Work</span>
                    <span aria-hidden>→</span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-current px-6 py-3 font-mono text-xs uppercase tracking-[0.2em]"
                    data-cursor-label="Email"
                  >
                    <span>Get in touch</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease }}
        className="container-x absolute inset-x-0 bottom-6 flex items-end justify-between"
      >
        <p className="label">Scroll · 01 / 04</p>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="opacity-60">Continue</span>
          <span className="block h-8 w-px overflow-hidden bg-current/20">
            <span className="block h-full w-full origin-top animate-[scroll-line_1.6s_ease-in-out_infinite] bg-current" />
          </span>
        </div>
      </motion.div>
      <style>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}

function MarqueeBand() {
  const items = [
    'Design Engineering',
    'Interactive Web',
    'SaaS Platforms',
    'Brand Systems',
    'Motion Design',
    'Three.js / WebGL',
    'Performance',
  ];
  return (
    <section className="relative -mx-px border-y border-current/10 py-10">
      <Marquee speed={40}>
        {items.map((item, i) => (
          <span
            key={i}
            className="display flex items-center gap-[clamp(1.5rem,4vw,4rem)] text-[clamp(3rem,9vw,8rem)] leading-none"
          >
            <span className={i % 2 === 0 ? '' : 'display-italic opacity-70'}>{item}</span>
            <span className="text-accent">●</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function SelectedWork() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-parallax-img]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = projects.slice(0, 4);

  return (
    <section ref={sectionRef} className="container-x mt-32 sm:mt-48">
      <div className="mb-16 grid grid-cols-1 items-end gap-6 sm:mb-24 sm:grid-cols-12">
        <Reveal className="sm:col-span-7" duration={1}>
          <p className="label mb-5">— Selected Work · 2022 / 2025</p>
          <h2 className="display text-[clamp(2.75rem,7vw,6rem)]">
            A glimpse into <span className="display-italic">recent collaborations</span>
            <span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal className="sm:col-span-5 sm:col-start-9" delay={0.1}>
          <p className="text-base leading-relaxed text-pretty opacity-70">
            Six years building products for venture-backed teams and independent studios.
            Each engagement is hands-on, end-to-end, and judged by the work itself.
          </p>
        </Reveal>
      </div>

      <div className="space-y-24 sm:space-y-36">
        {featured.map((p, i) => (
          <Reveal key={p.slug} duration={1.1} delay={0.05 * i}>
            <article
              className={
                'grid grid-cols-12 items-end gap-x-6 gap-y-6 ' +
                (i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : '')
              }
            >
              <Link
                to="/work"
                className={
                  'group relative col-span-12 block overflow-hidden rounded-md sm:col-span-8 ' +
                  (i % 2 === 1 ? 'sm:col-start-5' : '')
                }
                data-cursor-label="View"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden"
                  style={{ background: p.color }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    data-parallax-img
                    className="absolute inset-0 h-[120%] w-full object-cover opacity-90 transition-transform duration-[1500ms] ease-expo group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                    <span>{p.number}</span>
                    <span className="opacity-50">/</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </Link>

              <div
                className={
                  'col-span-12 sm:col-span-4 ' +
                  (i % 2 === 1 ? 'sm:col-start-1 sm:row-start-1' : '')
                }
              >
                <p className="label mb-4">{p.role}</p>
                <h3 className="display mb-3 text-[clamp(2rem,4.5vw,3.5rem)] leading-none">
                  {p.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed opacity-70">{p.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-current/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] opacity-70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24 flex justify-center" delay={0.1}>
        <Magnetic>
          <Link
            to="/work"
            className="inline-flex items-center gap-4 rounded-full border border-current px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-500 hover:bg-current hover:text-bone-200 dark:hover:text-ink-900"
            data-cursor-label="Index"
          >
            <span>See all projects</span>
            <span aria-hidden>↗</span>
          </Link>
        </Magnetic>
      </Reveal>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="container-x mt-32 sm:mt-48">
      <div className="grid grid-cols-12 gap-y-10 gap-x-6">
        <Reveal className="col-span-12 sm:col-span-4">
          <p className="label">— On the side</p>
        </Reveal>
        <div className="col-span-12 sm:col-span-8">
          <h2 className="display text-balance text-[clamp(2.5rem,6.5vw,6rem)]">
            <RevealText text="Engineer by training," />
            <br />
            <RevealText text="designer by instinct." delay={0.05} />
            <br />
            <span className="display-italic opacity-80">
              <RevealText text="Obsessed with the details." delay={0.1} />
            </span>
          </h2>
          <Reveal delay={0.5} className="mt-12 max-w-2xl">
            <p className="text-base leading-relaxed text-pretty opacity-75">
              I split my time between shipping client work and building small experiments
              that explore the seams between code and composition. The best products feel
              like a conversation between the two.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]"
              data-cursor-label="Read"
            >
              <span className="link-underline">More about me</span>
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { num: '06+', label: 'Years building' },
    { num: '40+', label: 'Projects shipped' },
    { num: '12', label: 'Industry awards' },
    { num: '∞', label: 'Cups of coffee' },
  ];
  return (
    <section className="container-x mt-32 sm:mt-48">
      <div className="grid grid-cols-2 gap-y-12 border-y border-current/10 py-14 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={0.04 * i}>
            <p className="display text-[clamp(2.75rem,7vw,5.5rem)] leading-none">{s.num}</p>
            <p className="label mt-3">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <SelectedWork />
      <AboutTeaser />
      <StatsBand />
    </>
  );
}
