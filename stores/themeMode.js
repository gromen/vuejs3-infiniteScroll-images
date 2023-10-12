import { defineStore } from 'pinia';

export const useThemeMode = defineStore('theme', {
  state: () => ({
    isDarkMode: false,
  }),
  actions: {
    toggleThemeMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
});
