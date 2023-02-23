<script lang="ts">
import { defineComponent } from 'vue'
import DonutChart from './components/DonutChart.vue'
import smileIcon from './assets/smile-icon.svg'

export default defineComponent({
  name: 'App',
  data() {
    return {
      assets: {
        smileIcon,
      },
    }
  },
  components: { DonutChart },
})
</script>

<template>
  <main>
    <div class="cards-container">
      <div class="card">
        <h1 class="card-h1">NPS geral</h1>
        <div class="score-overview-container">
          <img v-bind:src="assets.smileIcon" class="emoji-icon" />
          <span>Excelente!</span>
        </div>
        <span class="card-span">NPS Score: 75</span>
      </div>
      <div class="card">
        <h1 class="card-h1">Vendas fechadas</h1>
        <donut-chart :percent="10" :size="105" />
        <span class="card-span">NPS Score: 75</span>
      </div>
      <div></div>
    </div>
    <div></div>
  </main>
</template>

<style scoped>
main {
  max-width: 1280px;
  margin-inline: auto;
}
.cards-container {
  display: flex;
  align-items: center;
}
.card {
  background-color: #363447;
  width: fit-content;
  padding: 29px 48px;
  box-shadow: 3px 4px 26px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-h1 {
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
}
.score-overview-container {
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 160%;
  color: #81fbb8;
}
.emoji-icon {
  margin-top: 55px;
  width: 54px;
  height: 54px;
}
.card-span {
  margin-top: 55px;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
</style>
