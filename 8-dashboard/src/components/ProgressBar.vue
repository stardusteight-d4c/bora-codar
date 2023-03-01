<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
})
</script>

<template>
  <div class="bars">
    <div class="bar-wrapper">
      <div class="bar" style="--height: 3.9rem"></div>
      <span>dom</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 11.5rem"></div>
      <span>seg</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 7.6rem"></div>
      <span>ter</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 15.9rem"></div>
      <span>qua</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 12.9rem"></div>
      <span>qui</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 12rem"></div>
      <span>sex</span>
    </div>
    <div class="bar-wrapper">
      <div class="bar" style="--height: 6.9rem"></div>
      <span>sab</span>
    </div>
  </div>
</template>

<style scoped>
.bars {
  margin-left: auto;
  display: flex;
  gap: calc(3vw + 1rem);
  align-items: flex-end;
  position: relative;
}

.bars::before {
  content: '';
  display: block;
  height: 0.3rem;
  width: 100%;
  background: #4a4556;
  border-radius: 99.9rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
}

.bar-wrapper {
  display: grid;
  grid-template-rows: 15.9rem 1.6rem;
  justify-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.bar {
  width: 1.5rem;
  background: linear-gradient(180deg, #90f7ec 0%, #32ccbc 100%);
  border-radius: 99.9rem;

  height: var(--height);
  align-self: end;

  animation: up 1.4s;
}

@keyframes up {
  0% {
    height: 0;
  }
}
</style>
