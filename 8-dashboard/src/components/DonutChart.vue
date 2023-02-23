<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DonutChart',
  props: {
    percent: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    size: {
      type: Number,
      default: 100,
      validator: (value: number) => value > 0,
    },
  },
  computed: {
    radius(): number {
      return this.size / 2 - 5
    },
    circleStyle(): Record<string, string> {
      const circumference = 2 * Math.PI * this.radius
      const fillLength = (this.percent / 100) * circumference
      return {
        strokeDasharray: `${fillLength} ${circumference - fillLength}`,
        strokeDashoffset: `${circumference - fillLength}px`,
      }
    },
  },
})
</script>

<template>
  <div class="donut-chart">
    <svg :width="size + 10" :height="size + 10">
      <circle
        class="bg-circle"
        :cx="(size + 10) / 2"
        :cy="(size + 10) / 2"
        :r="radius"
      />
      <circle
        v-if="percent > 0"
        class="fg-circle"
        :cx="(size + 10) / 2"
        :cy="(size + 10) / 2"
        :r="radius"
        :style="circleStyle"
      />
    </svg>
    <div class="percent-container">
      <span class="percent">{{ percent }}%</span>
      <span class="percent-span">alcançada</span>
    </div>
  </div>
</template>

<style scoped>
.donut-chart {
  display: inline-block;
  position: relative;
  text-align: center;
}
.percent-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.percent {
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
}
.percent-span {
  margin-top: -10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
}
.bg-circle {
  fill: none;
  stroke: #4A4556;
  overflow: hidden;
  stroke-width: 19;
  stroke-linecap: round;
}
.fg-circle {
  fill: none;
  stroke: #3f51b5;
  stroke-width: 20;
  stroke-linecap: round;
}
</style>
