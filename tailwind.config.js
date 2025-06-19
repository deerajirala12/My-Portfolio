/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0D0D',
        surface: '#1A1A1A',
        primary: '#00FFFF',     // Cyan
        secondary: '#FF00FF',   // Magenta
        accent: '#FFD700',      // Gold
        text: '#F1F1F1',
      },
    },
  },
  plugins: [],
};
