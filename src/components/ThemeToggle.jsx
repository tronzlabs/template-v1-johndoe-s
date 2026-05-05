import { useTheme } from '../providers/ThemeProvider';
import clsx from 'clsx';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      data-cursor-label={isDark ? 'Light' : 'Dark'}
      className="group relative flex h-9 w-[68px] items-center rounded-full border border-current/20 px-1"
    >
      <span
        className={clsx(
          'absolute top-1 h-7 w-7 rounded-full bg-current transition-all duration-700 ease-expo',
          isDark ? 'left-1' : 'left-[34px]'
        )}
      />
      <span className="relative flex w-full justify-between px-1.5 font-mono text-[10px] uppercase tracking-[0.2em]">
        <span className={clsx('transition-opacity duration-500', isDark ? 'opacity-0' : 'opacity-60')}>
          D
        </span>
        <span className={clsx('transition-opacity duration-500', isDark ? 'opacity-60' : 'opacity-0')}>
          L
        </span>
      </span>
    </button>
  );
}
