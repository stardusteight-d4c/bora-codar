<script lang="ts">
import { defineComponent } from 'vue'
import PieChart from './components/PieChart.vue'

export default defineComponent({
  name: 'App',
  components: { PieChart },
})
</script>

<template>
  <main>
    <pie-chart :percentage="85" />
  </main>
</template>

<style scoped>
main {
  padding: 80px;
}

</style>
