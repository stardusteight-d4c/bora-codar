<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Card from './components/Card.vue'
import { blocks } from './mockData'

export default defineComponent({
  name: 'App',
  data() {
    return {
      blocks,
    }
  },
  components: { Header, Card },
})
</script>

<template>
  <Header />
  <main>
    <div class="main-content">
      <div class="heading-container">
        <h1>Blocos recomendados</h1>
        <div class="filter-container">
          <span class="active">Lista</span>
          <span class="disabled">Mapa</span>
        </div>
      </div>
      <div class="cards-wrapper">
        <div v-for="block in blocks" :key="block.title">
          <Card v-bind="{ ...block }" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  margin-top: 100px;
  color: #121214;
}
.main-content {
  max-width: 80rem;
  margin-inline: auto;
}
.heading-container {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
}
.filter-container {
  border: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  height: fit-content;
}
.active {
  padding: 4px 24px;
  display: block;
  background: #6246ea;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
}
.disabled {
  padding: 4px 24px;
  display: block;
  background: transparent;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #6246ea;
  cursor: pointer;
}
.cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 150px;
}
</style>
