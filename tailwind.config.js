module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-pink': '#ff00ff',
        'neon-purple': '#9d00ff',
        'dark-bg': '#0f0f1a',
      },
      boxShadow: {
        'neon': '0 0 10px #00f3ff',
        'neon-lg': '0 0 20px #00f3ff',
      },
    },
  },
  plugins: [],
};
