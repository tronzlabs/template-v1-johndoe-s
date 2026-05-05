import { useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Marquee({
  children,
  speed = 50,
  reverse = false,
  className = '',
  pauseOnHover = false,
}) {
  const trackRef = useRef(null);
  const offset = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    let last = performance.now();
    let paused = false;

    const onScroll = (e) => {
      if (window.__lenis) {
        velocity.current = window.__lenis.velocity || 0;
      } else {
        velocity.current = 0;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onEnter = () => {
      if (pauseOnHover) paused = true;
    };
    const onLeave = () => {
      if (pauseOnHover) paused = false;
    };
    track.addEventListener('mouseenter', onEnter);
    track.addEventListener('mouseleave', onLeave);

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused) {
        const dir = reverse ? 1 : -1;
        const boost = Math.min(Math.abs(velocity.current) * 4, 80);
        offset.current += dir * (speed + boost) * dt;
        const halfWidth = track.scrollWidth / 2;
        if (offset.current <= -halfWidth) offset.current += halfWidth;
        if (offset.current >= 0 && reverse) offset.current -= halfWidth;
        track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      track.removeEventListener('mouseenter', onEnter);
      track.removeEventListener('mouseleave', onLeave);
    };
  }, [speed, reverse, pauseOnHover]);

  return (
    <div className={clsx('relative w-full overflow-hidden', className)}>
      <div ref={trackRef} className="flex w-max gap-[clamp(1.5rem,4vw,4rem)] whitespace-nowrap will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
