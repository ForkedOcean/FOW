import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Custom Ocean Dark Theme Colors
        ocean: {
          primary: 'rgb(var(--color-bg-primary))',        // #06141B - Primary Background
          secondary: 'rgb(var(--color-bg-secondary))',     // #11212D - Secondary Background
          card: 'rgb(var(--color-bg-card))',          // #253745 - Card/Container BG
          accent: 'rgb(var(--color-accent))',       // #4A5C6A - Accent/Borders
          'text-muted': 'rgb(var(--color-text-muted))', // #9BA8AB - Muted/Secondary Text
          'text-primary': 'rgb(var(--color-text-primary))', // #CCD0CF - Primary Text/Contrast
          // Hover states (slightly lighter)
          'accent-hover': 'rgb(var(--color-accent-hover))',
          'card-hover': 'rgb(var(--color-card-hover))',
          'secondary-hover': 'rgb(var(--color-secondary-hover))',
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'ocean-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
          },
          '33%': { 
            transform: 'translateY(-4px) scale(1.005)',
          },
          '66%': { 
            transform: 'translateY(-6px) scale(1.01)',
          },
        },
        'ocean-breathe': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '1',
          },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'ocean-float': 'ocean-float 12s ease-in-out infinite',
        'ocean-breathe': 'ocean-breathe 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;