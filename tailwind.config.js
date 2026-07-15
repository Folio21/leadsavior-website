/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#02181a',
        'ink-2': '#03242a',
        'ink-3': '#052e33',
        teal: {
          DEFAULT: '#00d4aa',
          dim: '#00d4aa33',
        },
        neon: '#00ff88',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 212, 170, 0.25)',
        'glow-lg': '0 0 60px rgba(0, 212, 170, 0.2)',
        'glow-green': '0 0 24px rgba(0, 255, 136, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-30px) translateX(20px)' },
          '66%': { transform: 'translateY(15px) translateX(-15px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        float: 'float 14s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
