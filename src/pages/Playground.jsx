import { useEffect, useRef } from 'react';
import { Reveal, RevealText } from '../components/Reveal';
import { experiments } from '../data/site';

function ExperimentTile({ item, index }) {
  return (
    <Reveal delay={index * 0.05}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="group relative block aspect-[4/5] overflow-hidden rounded-md border border-current/10 bg-current/[0.02]"
        data-cursor-label="Open"
      >
        <ExperimentArt index={index} />
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
            <span>0{index + 1}</span>
            <span>{item.tag}</span>
          </div>
          <div>
            <h3 className="display text-[clamp(1.5rem,3vw,2.5rem)] leading-none">{item.title}</h3>
            <p className="mt-2 text-sm opacity-70">{item.note}</p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-current/0 transition-all duration-700 ease-expo group-hover:ring-current/30" />
      </a>
    </Reveal>
  );
}

function ExperimentArt({ index }) {
  // procedural per-tile background — no images, pure CSS
  const variants = [
    'bg-[radial-gradient(circle_at_30%_30%,rgba(255,77,31,0.6),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.06),transparent_50%)]',
    'bg-[conic-gradient(from_120deg,rgba(125,165,255,0.5),transparent_30%,rgba(255,255,255,0.04)_60%,rgba(255,77,31,0.4))]',
    'bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,77,31,0.2)_60%,rgba(0,0,0,0.4))]',
    'bg-[radial-gradient(ellipse_at_top,rgba(157,224,172,0.4),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,77,31,0.25),transparent_60%)]',
    'bg-[conic-gradient(from_0deg,rgba(255,77,31,0.4),rgba(0,0,0,0)_25%,rgba(255,255,255,0.05)_50%,rgba(255,77,31,0.35)_75%,rgba(0,0,0,0))]',
    'bg-[linear-gradient(180deg,rgba(201,166,255,0.35),transparent),radial-gradient(circle_at_50%_70%,rgba(255,77,31,0.4),transparent_60%)]',
  ];
  return (
    <div className={'absolute inset-0 ' + variants[index % variants.length]}>
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 200 250" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
      </svg>
    </div>
  );
}

function CanvasField() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w, h;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const points = Array.from({ length: 80 }, () => ({
      x: Math.random() * 1.2 - 0.1,
      y: Math.random() * 1.2 - 0.1,
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(237,237,237,0.18)' : 'rgba(10,10,10,0.18)';
      ctx.fillStyle = isDark ? 'rgba(237,237,237,0.7)' : 'rgba(10,10,10,0.7)';
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -0.05 || p.x > 1.05) p.vx *= -1;
        if (p.y < -0.05 || p.y > 1.05) p.vy *= -1;
      });
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dx = (a.x - b.x) * w;
          const dy = (a.y - b.y) * h;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            ctx.globalAlpha = 1 - d2 / (110 * 110);
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, 1.4, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-md border border-current/10 bg-current/[0.02]">
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
      <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
        Live · 00 · Ambient connection field
      </div>
    </div>
  );
}

export default function Playground() {
  return (
    <>
      <header className="container-x pt-12 sm:pt-20">
        <div className="grid grid-cols-12 items-end gap-6 border-b border-current/10 pb-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="label mb-5">— Playground / Experiments</p>
            <h1 className="display text-balance text-[clamp(3rem,10vw,11rem)]">
              <span className="block overflow-hidden">
                <RevealText text="Half-baked" />
              </span>
              <span className="block overflow-hidden">
                <span className="display-italic">
                  <RevealText text="ideas." delay={0.05} />
                </span>
              </span>
            </h1>
          </div>
          <Reveal delay={0.4} className="col-span-12 lg:col-span-4">
            <p className="text-pretty text-base leading-relaxed opacity-75">
              A small lab for pet projects, motion studies, and interaction primitives.
              Some of these become parts of client work. Most just live here.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="container-x mt-12">
        <CanvasField />
      </section>

      <section className="container-x mt-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((e, i) => (
            <ExperimentTile key={e.title} item={e} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
