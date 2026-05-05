import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className = '',
  once = true,
  as = 'div',
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function RevealText({ text, className = '', delay = 0, stagger = 0.04, as = 'span' }) {
  const Comp = motion[as] || motion.span;
  const words = String(text).split(' ');
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: { y: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
