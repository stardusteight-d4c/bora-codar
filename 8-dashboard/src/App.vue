<script lang="ts">
import { defineComponent } from 'vue'
import PieChart from './components/PieChart.vue'

export default defineComponent({
  name: 'App',
  components: { PieChart },
})
</script>

<template>
    <pie-chart :percent="50"  />
</template>

<style scoped>
</style>
