import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9EBD43',
          50: '#F4F7EC',
          100: '#E9EFD9',
          200: '#D3DFB3',
          300: '#BDCF8D',
          400: '#A7BF67',
          500: '#9EBD43',
          600: '#7E9A36',
          700: '#5F7428',
          800: '#3F4D1B',
          900: '#20270D',
        },
        secondary: {
          DEFAULT: '#223038',
          50: '#E8EAEC',
          100: '#D1D5D8',
          200: '#A3ABB1',
          300: '#75818A',
          400: '#475663',
          500: '#223038',
          600: '#1B262D',
          700: '#141D22',
          800: '#0E1317',
          900: '#070A0B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-bebas)'],
      },
      animation: {
        'text-reveal': 'text-reveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'rotate-in': 'rotate-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-10deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;