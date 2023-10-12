<script setup>
import ThemeSwitch from './components/ThemeSwitch.vue';
import { useThemeMode } from '../stores/themeMode.js';
const storeTheme = useThemeMode();
</script>

<template>
  <div
    :class="
      storeTheme.isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    "
  >
    <ThemeSwitch />
  </div>
</template>
