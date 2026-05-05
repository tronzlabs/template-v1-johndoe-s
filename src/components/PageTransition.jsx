import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ease = [0.76, 0, 0.24, 1];

export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.6, ease }}
      >
        {children}
      </motion.div>

      {/* Curtain */}
      <motion.div
        key={`curtain-${pathname}`}
        className="pointer-events-none fixed inset-0 z-[90] origin-bottom bg-ink-900 dark:bg-bone-200"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease }}
      />
    </AnimatePresence>
  );
}
