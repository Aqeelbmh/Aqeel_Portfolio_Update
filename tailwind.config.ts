import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      colors: {
        obsidian: '#0b0f13',
        'neon-blue': '#00e5ff',
        'neon-teal': '#00f5d4',
        'neon-magenta': '#ff2bd6',
        'neon-purple': '#7a5cff',
        'neon-green': '#39ff14',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': "linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)",
        'cyber-hex': "radial-gradient(circle at 0.5px 1px, rgba(255,43,214,0.08) 0.5px, transparent 0.6px)",
      },
      boxShadow: {
        neon: '0 0 10px rgba(0,229,255,0.7), 0 0 20px rgba(255,43,214,0.4)',
        'neon-strong': '0 0 12px rgba(0,229,255,0.8), 0 0 30px rgba(0,245,212,0.6), 0 0 45px rgba(255,43,214,0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 6px rgba(0,229,255,0.8), 0 0 12px rgba(255,43,214,0.6)' },
          '50%': { textShadow: '0 0 12px rgba(0,245,212,0.9), 0 0 24px rgba(122,92,255,0.8)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        gradientx: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(10px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-10px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        scanline: 'scanline 4s linear infinite',
        'gradient-x': 'gradientx 8s ease infinite',
        glitch: 'glitch 0.9s steps(2, end) infinite',
        blob: 'blob 8s infinite',
        blink: 'blink 1s step-end infinite',
        ripple: 'ripple 0.8s ease-out',
      },
    },
  },
  plugins: [],
};

export default config; 