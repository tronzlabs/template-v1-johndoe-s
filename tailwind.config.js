/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          950: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#262626',
          500: '#3A3A3A',
          400: '#666666',
          300: '#888888',
          200: '#B8B8B8',
          100: '#D9D9D9',
          50: '#EDEDED',
        },
        bone: {
          DEFAULT: '#F4F1EA',
          900: '#0A0A0A',
          100: '#FAF8F3',
          200: '#F4F1EA',
          300: '#EFEAE0',
          400: '#E5DFD2',
          500: '#C9C2B3',
        },
        accent: {
          DEFAULT: '#FF4D1F',
          50: '#FFF1ED',
          100: '#FFE0D6',
          400: '#FF6B45',
          500: '#FF4D1F',
          600: '#E73E14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '12xl': ['14rem', { lineHeight: '0.85', letterSpacing: '-0.045em' }],
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.6, 0.05, 0.2, 0.95)',
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
