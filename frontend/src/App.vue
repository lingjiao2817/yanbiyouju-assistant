<template>
  <div class="app-shell">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: #f5f3ff;
  color: #1e1b4b;
}

.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>