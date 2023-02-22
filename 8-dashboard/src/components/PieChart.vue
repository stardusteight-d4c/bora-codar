<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pie-chart',
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 0,
      validator: (value: number) => value >= 0 && value <= 100,
    },
  },
  computed: {
    strokeDashoffset(): number {
      const circumference = 2 * Math.PI * 15.91549430918954 // 2 * π * radius
      return circumference * (1 - this.percentage / 100)
    },
  },
})
</script>

<template>
  <div class="pie-chart">
    <svg viewBox="0 0 32 32">
      <circle class="bg-circle" cx="16" cy="16" r="15.91549430918954"></circle>
      <circle
        class="fg-circle"
        cx="16"
        cy="16"
        r="15.91549430918954"
        :style="{ strokeDashoffset }"
      ></circle>
      <text class="percentage" x="50%" y="50%" text-anchor="middle">
        {{ percentage }}%
      </text>
    </svg>
  </div>
</template>

<style scoped>
.pie-chart {
  display: inline-block;
  width: 100px;
  height: 100px;
  position: relative;
}

.bg-circle {
  fill: none;
  stroke: #ddd;
  stroke-width: 2;
}

.fg-circle {
  fill: none;
  stroke: #2196f3;
  stroke-width: 2;
  stroke-dasharray: 100;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.percentage {
  font-size: 1em;
  font-weight: bold;
  fill: #333;
}
</style>
