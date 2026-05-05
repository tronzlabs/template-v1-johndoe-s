import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(true);
  const [label, setLabel] = useState('');
  const state = useRef({ x: -100, y: -100, rx: -100, ry: -100, hover: false });

  useEffect(() => {
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) {
      setEnabled(false);
      document.documentElement.classList.add('no-cursor');
      return;
    }

    const onMove = (e) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
    };

    const interactive = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]';
    const onOver = (e) => {
      const target = e.target.closest(interactive);
      if (target) {
        state.current.hover = true;
        const l = target.getAttribute('data-cursor-label');
        if (l) setLabel(l);
      }
    };
    const onOut = (e) => {
      const target = e.target.closest(interactive);
      if (target) {
        state.current.hover = false;
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    let raf;
    const tick = () => {
      const s = state.current;
      s.rx += (s.x - s.rx) * 0.18;
      s.ry += (s.y - s.ry) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) translate(-50%, -50%)`;
      }
      if (ring.current) {
        const scale = s.hover ? 2.4 : 1;
        ring.current.style.transform = `translate3d(${s.rx}px, ${s.ry}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-current mix-blend-difference text-white transition-[transform,opacity] duration-300 ease-expo"
        style={{ willChange: 'transform' }}
      >
        {label ? (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.2em]">
            {label}
          </span>
        ) : null}
      </div>
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
