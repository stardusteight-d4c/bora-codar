<script lang="ts">
import { defineComponent } from 'vue'
import smileIcon from '../assets/smile-icon.svg'

export default defineComponent({
  name: 'NPS',
  data() {
    return {
      assets: {
        smileIcon,
      },
    }
  },
})
</script>

<template>
  <div class="card">
    <h1 class="card-h1">NPS geral</h1>
    <div class="score-overview-container">
      <img v-bind:src="assets.smileIcon" class="emoji-icon" />
      <span>Excelente!</span>
    </div>
    <span class="card-span">NPS Score: 75</span>
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
  width: 54px;
  height: 54px;
  padding-bottom: 16px;
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
</style>
