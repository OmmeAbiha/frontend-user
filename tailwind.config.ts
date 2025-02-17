import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-iranYekanFont)", ...fontFamily.sans],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          veryLight: 'hsl(var(--primary-veryLight))',
          light: 'hsl(var(--primary-light))',
          medium: 'hsl(var(--primary-medium))',
          main: 'hsl(var(--primary-main))',
          dark: 'hsl(var(--primary-dark))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))'
        },
        toast: {
          DEFAULT: 'hsl(var(--toast))',
          foreground: 'hsl(var(--toast-foreground))'
        },
        input: {
          DEFAULT: 'hsl(var(--input))',
          foreground: 'hsl(var(--input-border))'
        },
        status: {
          success: 'hsl(var(--status-success))',
          error: 'hsl(var(--status-error))',
          warning: 'hsl(var(--status-warning))',
          info:'hsl(var(--status-info))'
        },
        border: 'hsl(var(--border))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
          '6': 'hsl(var(--chart-6))',
          '7': 'hsl(var(--chart-7))',
          '8': 'hsl(var(--chart-8))',
          '9': 'hsl(var(--chart-9))',
          '10': 'hsl(var(--chart-10))',
          '11': 'hsl(var(--chart-11))',
          '12': 'hsl(var(--chart-12))',
          '13': 'hsl(var(--chart-13))',
          '14': 'hsl(var(--chart-14))',
          '15': 'hsl(var(--chart-15))',
          '16': 'hsl(var(--chart-16))',
          '17': 'hsl(var(--chart-17))',
          '18': 'hsl(var(--chart-18))',
          '19': 'hsl(var(--chart-19))',
          '20': 'hsl(var(--chart-20))'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
