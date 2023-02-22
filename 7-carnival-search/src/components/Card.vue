<script lang="ts">
import { defineComponent } from 'vue'
import locationIcon from '../assets/location.svg'

export default defineComponent({
  name: 'Card',
  data() {
    return {
      assets: {
        locationIcon,
      },
    }
  },
  props: {
    cover: String,
    title: String,
    description: String,
    location: String,
  },
})
</script>

<template>
  <div class="card-container">
    <img v-bind:src="cover" class="cover" />
    <div class="info-container">
      <h2>{{ title }}</h2>
      <span>{{ description }}</span>
      <div class="location">
        <img v-bind:src="assets.locationIcon" />
        <span>{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  background: #ffffff;
  overflow: hidden;
  border: 1px solid #eaeaea;
  border-radius: 10px;
}
.cover {
  object-fit: cover;
  height: 153px;
  width: 100%;
}
.info-container {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
}
h2 {
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #121214;
}
span {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #000000bf;
}
.location {
  display: flex;
  align-items: center;
  column-gap: 8px;
}
</style>
