<script lang="ts">
import { defineComponent } from 'vue'
import chevronDown from '../assets/chevron-down.svg'
import chevronUp from '../assets/chevron-up.svg'
import weekDaysPlaceholder from '../assets/week-days-placeholder.svg'
import ProgressBar from '../components/ProgressBar.vue'

export default defineComponent({
  name: 'WeeklySales',
  data() {
    return {
      assets: {
        chevronDown,
        chevronUp,
        weekDaysPlaceholder,
      },
    }
  },
  components: { ProgressBar },
})
</script>

<template>
  <section class="sales-week">
    <div class="sales-week-content">
      <h1 class="heading">Vendas por dia da semana</h1>
      <div class="sales-overview">
        <div>
          <div class="span-container">
            <img :src="assets.chevronUp" />
            <span>Dia com mais vendas</span>
          </div>
          <h2 class="day">quarta-feira</h2>
        </div>
        <div>
          <div class="span-container">
            <img :src="assets.chevronDown" />
            <span>Dia com menos vendas</span>
          </div>
          <h2 class="day">domingo</h2>
        </div>
      </div>
    </div>
    <ProgressBar />
  </section>
</template>

<style scoped>
.sales-week {
  margin-top: 60px;
  max-width: 1010px;
  height: fit-content;
  padding: 29px 48px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-inline: auto;
  border-radius: 16px;
  background-color: #363447;
  box-shadow: 3px 4px 26px rgba(0, 0, 0, 0.25);
}

.heading {
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  margin-bottom: 32px;
}
.span-container {
  display: flex;
  align-items: center;
  column-gap: 4px;
}
.sales-overview {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
span {
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
.day {
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
}
</style>
