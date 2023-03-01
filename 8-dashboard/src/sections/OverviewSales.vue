<script lang="ts">
import { defineComponent } from 'vue'
import NPS from '../components/NPS.vue'
import ClosedSales from '../components/ClosedSales.vue'
import MonthlyTarget from '../components/MonthlyTarget.vue'

export default defineComponent({
  name: 'OverviewSales',
  components: { NPS, ClosedSales, MonthlyTarget },
})
</script>

<template>
  <section class="cards-container">
    <NPS />
    <ClosedSales />
    <MonthlyTarget />
  </section>
</template>

<style scoped>
.cards-container {
  display: flex;
  align-items: center;
  width: fit-content;
  margin-inline: auto;
  gap: 32px;
}
</style>
