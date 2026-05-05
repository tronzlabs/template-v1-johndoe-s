import { Reveal, RevealText } from '../components/Reveal';
import Marquee from '../components/Marquee';
import { skills, experience, site } from '../data/site';

function PageHeader() {
  return (
    <header className="container-x pt-12 sm:pt-20">
      <p className="label mb-6">— About / 2026</p>
      <h1 className="display text-balance text-[clamp(3rem,10vw,11rem)]">
        <span className="block overflow-hidden">
          <RevealText text="A developer" />
        </span>
        <span className="block overflow-hidden">
          <span className="display-italic">
            <RevealText text="who designs." delay={0.05} />
          </span>
        </span>
        <span className="block overflow-hidden">
          <RevealText text="A designer" delay={0.1} />
        </span>
        <span className="block overflow-hidden">
          <span className="display-italic">
            <RevealText text="who ships." delay={0.15} />
          </span>
        </span>
      </h1>
    </header>
  );
}

function Story() {
  return (
    <section className="container-x mt-32">
      <div className="grid grid-cols-12 gap-y-12 gap-x-6 border-y border-current/10 py-20">
        <Reveal className="col-span-12 lg:col-span-4">
          <div className="sticky top-32">
            <p className="label mb-4">— Bio</p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] opacity-50">
              001 / Story
            </p>
          </div>
        </Reveal>
        <div className="col-span-12 space-y-8 lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-xl leading-relaxed text-pretty sm:text-2xl">
              Hi, I’m {site.name.split(' ')[0]}. I’m a developer and designer based in
              {' '}
              <span className="display-italic">{site.location}</span>, working with
              founders and studios to ship interfaces that feel calm, considered, and
              built to last.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-pretty opacity-80">
              I started writing code when I was fifteen. I started caring about how it
              <em> felt</em> a few years later. Today I work as a hybrid — engineer by
              training, designer by instinct — and that combination is where I do my best
              work: between the brief and the build, between the sketch and the ship.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-pretty opacity-80">
              I’ve led product engineering at a fintech, designed motion systems for an
              award-winning studio, and now run a small independent practice. I take on
              one or two engagements at a time so each gets the attention it deserves.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed text-pretty opacity-80">
              Outside of client work, I write, build small experiments, and keep a
              running notebook on the craft of shipping software.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillsBlock() {
  return (
    <section className="container-x mt-32">
      <div className="grid grid-cols-12 gap-y-12 gap-x-6">
        <Reveal className="col-span-12 lg:col-span-4">
          <p className="label">— Capabilities</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.75rem)]">
            What I do<br />
            <span className="display-italic opacity-90">day-to-day.</span>
          </h2>
        </Reveal>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid gap-px overflow-hidden border border-current/10 sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <div className="h-full bg-current/[0.02] p-6 sm:p-8">
                  <p className="label mb-4">0{i + 1} · {s.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-full border border-current/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="container-x mt-32">
      <div className="grid grid-cols-12 items-end gap-6 border-b border-current/10 pb-10">
        <Reveal className="col-span-12 lg:col-span-6">
          <p className="label mb-3">— Trajectory</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.75rem)]">
            Ten years, <span className="display-italic">thereabouts</span>.
          </h2>
        </Reveal>
        <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.1}>
          <p className="text-base leading-relaxed opacity-70">
            A short, honest record of the studios and seasons that shaped how I work.
          </p>
        </Reveal>
      </div>
      <ul className="mt-2">
        {experience.map((e, i) => (
          <Reveal key={e.year + e.role} delay={0.04 * i}>
            <li className="grid grid-cols-12 items-baseline gap-6 border-b border-current/10 py-7">
              <span className="col-span-12 font-mono text-xs uppercase tracking-[0.2em] opacity-60 sm:col-span-3">
                {e.year}
              </span>
              <span className="col-span-12 sm:col-span-3">
                <span className="display text-[clamp(1.5rem,2.5vw,2.25rem)] leading-none">
                  {e.role}
                </span>
              </span>
              <span className="col-span-12 text-sm opacity-70 sm:col-span-3">
                {e.company}
              </span>
              <span className="col-span-12 text-sm leading-relaxed opacity-70 sm:col-span-3">
                {e.note}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="container-x mt-32">
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 lg:col-span-3">
          <p className="label">— Principles</p>
        </Reveal>
        <div className="col-span-12 lg:col-span-9">
          <h2 className="display text-balance text-[clamp(2.25rem,5.5vw,5rem)]">
            Be honest with the work.
            <br />
            <span className="display-italic opacity-90">Edit ruthlessly.</span>
            <br />
            Ship what matters
            <span className="text-accent">.</span>
          </h2>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {[
              {
                t: 'Detail is the whole point.',
                d: 'A site lives in its micro-interactions, its margins, its motion. Get those right and the rest follows.',
              },
              {
                t: 'Performance is design.',
                d: 'Slow products feel sloppy. I treat speed as a non-negotiable visual property.',
              },
              {
                t: 'Calm beats clever.',
                d: 'No noise, no buzzwords, no dark patterns. Just clear interfaces that respect the reader.',
              },
            ].map((p, i) => (
              <Reveal key={p.t} delay={0.05 * i}>
                <h3 className="text-lg font-medium">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsMarquee() {
  const tools = [
    'Figma',
    'VS Code',
    'Linear',
    'GitHub',
    'Vercel',
    'Postgres',
    'Notion',
    'Arc',
    'Raycast',
    'Things',
    'iA Writer',
  ];
  return (
    <section className="mt-32 border-y border-current/10 py-8">
      <Marquee speed={45}>
        {tools.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-[clamp(1rem,2.5vw,2.5rem)] font-mono text-sm uppercase tracking-[0.2em]"
          >
            <span className="opacity-60">{t}</span>
            <span className="text-accent">●</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader />
      <Story />
      <SkillsBlock />
      <Timeline />
      <Manifesto />
      <ToolsMarquee />
    </>
  );
}
