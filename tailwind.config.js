/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-cream': '#f4f1ea',
        'vintage-brown': '#3d2817',
        'vintage-tan': '#d4c5b0',
        'vintage-gold': '#b8935e',
        'sepia-dark': '#2b1f14',
        'sepia-light': '#8b7355',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Crimson Text', 'serif'],
        'elegant': ['EB Garamond', 'serif'],
      },
      boxShadow: {
        'vintage': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'inset-vintage': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

