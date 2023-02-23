<script lang="ts">
import { defineComponent } from 'vue'
import DonutChart from './components/DonutChart.vue'

export default defineComponent({
  name: 'App',
  components: { DonutChart },
})
</script>

<template>
    <donut-chart :percent="5" :size="100"  />
</template>

<style scoped>
</style>
