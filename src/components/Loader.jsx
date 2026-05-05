import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../data/site';

const ease = [0.76, 0, 0.24, 1];

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1700;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900 text-bone-200"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="container-x flex w-full items-end justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
              {site.name} — Portfolio
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] opacity-60">
              v1.0 / 2026
            </p>
          </div>
          <div className="container-x mt-auto flex flex-col gap-6 pb-16">
            <div className="flex items-end justify-between">
              <p className="display text-[clamp(4rem,16vw,14rem)] leading-[0.85]">
                {String(count).padStart(3, '0')}
              </p>
              <p className="display-italic text-[clamp(2rem,5vw,4rem)] leading-none opacity-70">
                loading
              </p>
            </div>
            <div className="relative h-px w-full bg-bone-200/15">
              <motion.div
                className="absolute inset-y-0 left-0 bg-bone-200"
                initial={{ width: '0%' }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear', duration: 0.05 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
