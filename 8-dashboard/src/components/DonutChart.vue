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
    <svg :width="size + 5" :height="size + 5">
      <circle
        class="bg-circle"
        :cx="(size + 5) / 2"
        :cy="(size + 5) / 2"
        :r="radius"
      />
      <circle
        class="fg-circle"
        :cx="(size + 5) / 2"
        :cy="(size + 5) / 2"
        :r="radius"
        :style="circleStyle"
      />
    </svg>
    <span class="percent">{{ percent }}%</span>
  </div>
</template>

<style scoped>
.donut-chart {
  display: inline-block;
  position: relative;
  text-align: center;
}
.percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: bold;
}
.bg-circle {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 14;
  stroke-linecap: round;
}
.fg-circle {
  fill: none;
  stroke: #3f51b5;
  stroke-width: 15;
  stroke-linecap: round;
}
</style>
