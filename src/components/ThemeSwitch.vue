<script setup>
import { useThemeMode } from '../../stores/themeMode.js';
const storeTheme = useThemeMode();
</script>

<template>
  <div>
    <pre>{{ storeTheme.isDarkMode }}</pre>
    <input
      id="themeToggler"
      v-model="storeTheme.isDarkMode"
      type="checkbox"
      name="themeToggler"
      :checked="isDarkMode"
      @click="storeTheme.toggleThemeMode()"
    />
  </div>
</template>

<style scoped></style>
