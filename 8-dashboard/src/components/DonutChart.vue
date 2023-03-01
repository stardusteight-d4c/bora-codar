<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DonutChart',
  props: {
    percentage: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
  },
  computed: {
    circleStyle(): { 'stroke-dashoffset': number } {
      const circumference = Math.round(2 * 3.14 * 98.5)
      const fillLength = circumference - (circumference * this.percentage) / 100
      return {
        'stroke-dashoffset': fillLength,
      }
    },
  },
})
</script>

<template>
  <div class="percentage-info-container">
    <h2>{{ percentage }}%</h2>
    <span>alcançada</span>
  </div>
  <svg
    viewBox="0 0 232 232"
    :key="percentage"
    :style="{ '--percentage': percentage }"
  >
    <circle cx="50%" cy="50%" r="98.5" opacity="0.1" stroke="#D9D9D9" />
    <circle
      cx="50%"
      cy="50%"
      r="98.5"
      stroke="url(#paint0_linear_201_85)"
      :style="circleStyle"
    />

    <defs>
      <linearGradient
        id="paint0_linear_201_85"
        x1="-9"
        y1="82"
        x2="145"
        y2="178"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#CE9FFC" />
        <stop offset="1" stop-color="#7367F0" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
.percentage-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 18px;
}
h2 {
  font-weight: 700;
  font-size: 34px;
}
span {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
}

svg {
  /* 19.7rem -> 315.2px */
  width: 19.7rem;
  height: 19.7rem;
  transform: rotate(-90deg);
}
svg circle {
  /* (2 * π * r) -> 2 * 3,14 * 98,5 = 618  */
  stroke-dasharray: 618;
  /* edge thickness */
  stroke-width: 30;
  fill: none;
}
svg circle:nth-child(1) {
  stroke-dashoffset: 0;
}
svg circle:nth-child(2) {
  /* (2 * π * r - (2 * π * r * percentage)) / 100 */
  /* (2 * 13,14 * 98.5 - (2 * 13,14 * 98.5 * percentage)) / 100 */
  /* (618 - (618 * var(--percentage)) / 100) */
  stroke-dashoffset: calc(618 - (618 * var(--percentage)) / 100);
  stroke-linecap: round;

  animation: progress 1s ease-in-out;
}
@keyframes progress {
  0% {
    stroke-dasharray: 618;
    stroke-dashoffset: 618;
  }
}
</style>
