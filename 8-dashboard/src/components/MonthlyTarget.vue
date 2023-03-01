<script lang="ts">
import { defineComponent } from 'vue'
import DonutChart from './DonutChart.vue';

export default defineComponent({
    name: "MonthlyTarget",
    components: { DonutChart }
})
</script>

<template>
  <div class="card">
    <h1 class="card-h1">Meta mensal</h1>
    <DonutChart :percentage="25"  />
    <div class="card-span">
      <div class="span-container">
        <div class="circle-span-expected"></div>
        <span class="circle-span-text">Esperado R$ 70K</span>
      </div>
      <div class="span-container">
        <div class="circle-span-reached"></div>
        <span class="circle-span-text">Alcançado R$ 63K</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #363447;
  box-shadow: 3px 4px 26px rgba(0, 0, 0, 0.25);
  width: fit-content;
  padding: 29px 48px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 290px;
}
.card-h1 {
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  margin-bottom: auto;
}

.card-span {
  margin-top: 55px;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-top: auto;
}
.span-container {
  display: flex;
  align-items: center;
  justify-items: center;
  column-gap: 4px;
}
.circle-span-expected {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #4a4556;
}
.circle-span-reached {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(121.94deg, #ce9ffc 15.98%, #7367f0 82.85%);
}
.circle-span-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}
</style>
