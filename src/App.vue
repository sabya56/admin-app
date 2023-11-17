<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <li>
        <RouterLink :to="{ name: 'dashboard' }">Dashboard (Admin App)</RouterLink> |
        <RouterLink :to="{ name: 'page1' }">Page 1 (Admin App)</RouterLink> |
        <a href="/console/home">Home (Console App)</a>
      </li>
    </nav>
    <div style="margin: 50px;">
      <RouterView />
    </div>
  </div>
</template>
