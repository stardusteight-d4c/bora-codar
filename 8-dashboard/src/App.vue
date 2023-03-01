<script lang="ts">
import { defineComponent } from 'vue'
import NPS from './components/NPS.vue'
import ClosedSales from './components/ClosedSales.vue'
import MonthlyTarget from './components/MonthlyTarget.vue'
import chevronDown from './assets/chevron-down.svg'
import chevronUp from './assets/chevron-up.svg'
import weekDaysPlaceholder from './assets/week-days-placeholder.svg'

export default defineComponent({
  name: 'App',

  data() {
    return {
      assets: {
        chevronDown,
        chevronUp,
        weekDaysPlaceholder,
      },
    }
  },
  components: { NPS, ClosedSales, MonthlyTarget },
})
</script>

<template>
  <main>
    <div class="content">
      <section class="cards-container">
        <NPS />
        <ClosedSales />
        <MonthlyTarget />
      </section>
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
        <div>
         
        </div>
      </section>
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
.cards-container {
  display: flex;
  align-items: center;
  width: fit-content;
  margin-inline: auto;
  gap: 32px;
}
.sales-week {
  margin-top: 60px;
  max-width: 1010px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-inline: auto;
  border-radius: 16px;
  background-color: #363447;
  box-shadow: 3px 4px 26px rgba(0, 0, 0, 0.25);
}
.sales-week-content {
  padding: 29px 48px;
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
