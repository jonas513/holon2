/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        holon: {
          teal:     '#00A4C4',
          'teal-deep': '#007A94',
          'teal-wash': '#E8F5F9',
          dark:     '#0A192F',
          ink:      '#1C1F24',
          mid:      '#6B7280',
          subtle:   '#D1D5DB',
          canvas:   '#FAFAF8',
          surface:  '#F4F3F0',
          white:    '#FDFCFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'title': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        'hover-lift': '0 4px 20px rgba(28, 31, 36, 0.08)',
        'cta':        '0 8px 40px rgba(28, 31, 36, 0.12)',
        'focus-teal': '0 0 0 3px rgba(0, 164, 196, 0.20)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
