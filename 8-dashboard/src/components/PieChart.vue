<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PieChart',
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
    circleStyle(): Record<string, string> {
      const circumference = (this.size - 10) * Math.PI
      const offset = circumference - (this.percent / 100) * circumference
      return { strokeDashoffset: `${offset}px` }
    },
  },
})
</script>

<template>
  <div class="pie-chart">
    <svg :width="size" :height="size">
      <circle
        class="bg-circle"
        :cx="size / 2"
        :cy="size / 2"
        :r="size / 2 - 5"
      />
      <circle
        class="fg-circle"
        :cx="size / 2"
        :cy="size / 2"
        :r="size / 2 - 5"
        :style="circleStyle"
      />
    </svg>
    <span class="percent">{{ percent }}%</span>
  </div>
</template>

<style scoped>
.pie-chart {
  display: inline-block;
  position: relative;
  text-align: center;
}
svg {
  transform: rotate(-85deg);
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
  stroke-width: 10;
  stroke-linecap: round;
}
.fg-circle {
  fill: none;
  stroke: #3f51b5;
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: 285px;
}
</style>
