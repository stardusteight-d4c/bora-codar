<script lang="ts">
import { defineComponent } from 'vue'
import illustration01 from '../assets/illustration01.svg'
import illustration02 from '../assets/illustration02.svg'
import searchIcon from '../assets/search.svg'
import locationIcon from '../assets/location.svg'
import chevronDown from '../assets/chevron-down.svg'
import { availableCities } from '../mockData'

export default defineComponent({
  name: 'Header',
  data() {
    return {
      showDropdown: false,
      selectedCity: null as String | null,
      searchTerm: '',
      availableCities,
      assets: {
        illustration01,
        illustration02,
        searchIcon,
        locationIcon,
        chevronDown,
      },
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(event: MouseEvent) {
      if (
        this.$refs.dropdown &&
        !(this.$refs.dropdown as HTMLElement).contains(event.target as Node)
      ) {
        this.showDropdown = false
      }
    },
    searchBlocks() {
      this.selectedCity = null
      this.$emit('search', this.searchTerm)
    },
    handleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    handleSelectedCity(selectedCity: string) {
      this.selectedCity = selectedCity
      this.$emit('selectedCity', this.selectedCity)
    },
  },
})
</script>

<template>
  <header>
    <img v-bind:src="assets.illustration01" class="illustration01" />
    <img v-bind:src="assets.illustration02" class="illustration02" />
    <div class="content-container">
      <span>find your block</span>
      <h1>Encontre os <strong>melhores blocos</strong> de carnaval de 2023</h1>
      <div class="search-container">
        <div class="input-container">
          <img v-bind:src="assets.searchIcon" class="icon" />
          <input
            v-model="searchTerm"
            @input="searchBlocks"
            type="text"
            placeholder="Pesquise por nome"
            class="input"
          />
        </div>
        <div ref="dropdown" @click="handleDropdown" class="input-container">
          <img v-bind:src="assets.locationIcon" class="icon" />
          <div class="input">{{ selectedCity ?? 'Selecione uma cidade' }}</div>
          <img v-bind:src="assets.chevronDown" class="chevron" />
          <ul v-if="showDropdown" class="dropdown">
            <li
              v-for="city in availableCities"
              :key="city"
              @click="handleSelectedCity(city)"
            >
              {{ city }}
            </li>
          </ul>
        </div>
        <div class="button-container">
          <button>Buscar agora</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.dropdown ul {
  position: absolute;
  display: none;
}
.dropdown:hover ul {
  display: block;
}
header {
  padding-top: 100px;
  background-color: #f8f8ff;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 532px;
  height: 100%;
}
.illustration01 {
  position: absolute;
  z-index: 0;
  top: -30px;
  left: -35px;
}
.illustration02 {
  position: absolute;
  z-index: 0;
  bottom: 0px;
  right: 0px;
}
.content-container {
  text-align: center;
  max-width: 995px;
  width: 100%;
  z-index: 5;
}
span {
  color: #e45858;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
h1 {
  font-weight: 700;
  font-size: 48px;
  line-height: 125%;
  color: #121214;
  width: 647px;
  margin-inline: auto;
  margin-bottom: 40px;
}
strong {
  color: #6246ea;
}
.search-container {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  justify-items: center;
  column-gap: 24px;
  padding: 40px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
}
.input-container {
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
}
.input {
  cursor: pointer;
  background-color: #f4f4ff;
  text-align: left;
  color: #7c7c8a;
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  outline: none;
  padding-block: 12px;
  padding-left: 38px;
  padding-right: 12px;
}
.input::placeholder {
  color: #7c7c8a !important;
  opacity: 1;
}
.icon {
  position: absolute;
  left: 8px;
}
.chevron {
  position: absolute;
  right: 8px;
  cursor: pointer;
}

button {
  background: #6246ea;
  border-radius: 5px;
  padding-block: 12px;
  padding-inline: 32px;
  white-space: nowrap;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  border: none;
  outline: none;
}
.dropdown {
  top: 45px;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  inset-inline: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
li {
  padding: 4px;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
}
li:hover {
  background-color: #e7e7e7;
}
</style>
