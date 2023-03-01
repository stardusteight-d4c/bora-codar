<script lang="ts">
import { defineComponent } from 'vue'
import OverviewSales from './sections/OverviewSales.vue'
import WeeklySales from './sections/WeeklySales.vue'

export default defineComponent({
  name: 'App',
  components: { OverviewSales, WeeklySales },
})
</script>

<template>
  <main>
    <div class="content">
      <OverviewSales />
      <WeeklySales />
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 1280px;
  margin-inline: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  margin-block: 100px;
}
</style>
