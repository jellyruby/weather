const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],

  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..','C:/Users/user/Pictures/']
    }
  }

};

module.exports = config;
