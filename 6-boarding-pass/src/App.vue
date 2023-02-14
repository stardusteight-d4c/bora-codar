<script lang="ts">
import { defineComponent } from 'vue'
import airplane from './assets/airplane.svg'
import circle from './assets/circle.svg'
import qrCode from './assets/qr-code.svg'

export default defineComponent({
  name: 'App',
  data() {
    return {
      airplane,
      circle,
      qrCode,
    }
  },
})
</script>

<template>
  <div class="flex-container">
    <div>
      <h1 class="heading-one mx-auto w-fit">Cartão de embarque</h1>

      <main class="shadow-filter sm:shadow-card rounded-3xl">
        <div
          class="flex items-center w-[327px] justify-between py-6 px-8 bg-white rounded-t-3xl"
        >
          <div class="">
            <span>Voo</span>
            <h3 class="heading-third">RS995</h3>
          </div>
          <div>
            <span>Data</span>
            <h3 class="heading-third">23/05/2023</h3>
          </div>
        </div>

        <div class="flex items-center justify-between px-8 bg-white ">
          <span>São Paulo, Brasil</span>
          <span>São Francisco, EUA</span>
        </div>
        <div class="flex items-center justify-between pb-6 px-8 bg-white rounded-b-3xl sm:rounded-none">
          <div class="text-left">
            <h2 class="heading-second">GRU</h2>
            <span>17:00</span>
          </div>
          <img
            v-bind:src="airplane"
            alt="airplane/icon"
            class="w-[24px] h-[24px] -mt-5"
          />
          <div class="text-right">
            <h3 class="heading-second">SFO</h3>
            <span>04:48</span>
          </div>
        </div>

        <div
          class="rounded-t-3xl rounded-b-3xl sm:rounded-none relative border-y-[2px] border-y-[#CCCCCC] border-dashed flex items-center w-[327px] justify-between py-6 px-8 bg-white"
        >
          <div
            class="hidden sm:block w-[24px] h-[24px] bg-circle-right-top rounded-full absolute -top-[12px] -left-[12px]"
          />
          <div
            class="hidden sm:block w-[24px] h-[24px] bg-circle-right-bottom rounded-full absolute -bottom-[12px] -left-[12px]"
          />
          <div
            class="hidden sm:block w-[24px] h-[24px] bg-circle-left-top rounded-full absolute -top-[12px] -right-[12px]"
          />
          <div
            class="hidden sm:block w-[24px] h-[24px] bg-circle-left-bottom rounded-full absolute -bottom-[12px] -right-[12px]"
          />
          <div>
            <span>Passageiro</span>
            <h3 class="heading-third">Gabriel Sena</h3>
          </div>
          <div>
            <span>Assento</span>
            <h3 class="heading-third">42A</h3>
          </div>
        </div>
        <div class="py-6 px-8 bg-white rounded-t-3xl sm:rounded-t-none rounded-b-3xl">
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-y-3">
              <div>
                <span>Embarque</span>
                <h4
                  class="font-medium bg-[#633BBC] rounded-lg w-fit px-2 py-1 text-white"
                >
                  16:15
                </h4>
              </div>
              <div>
                <span>Terminal</span>
                <h4 class="text-[#000000] opacity-90 font-medium">2</h4>
              </div>
              <div>
                <span>Portão</span>
                <h4 class="text-[#000000] opacity-90 font-medium">15</h4>
              </div>
            </div>
            <div class="w-full max-w-[160px]">
              <img
                v-bind:src="qrCode"
                alt="qrCode/svg"
                class="w-[160px] h-[160px]"
              />
              <span class="ml-2">Grupo de embarque: 3</span>
            </div>
          </div>
          <p class="mx-auto w-fit mt-6">
            <strong class="text-[#000000] !opacity-90 font-medium"
              >Atenção:</strong
            >
            <span class="!text-base text-[#000000] opacity-80 !font-normal">
              o portão fecha 16:45
            </span>
          </p>
        </div>
      </main>
    </div>
    <p class="text-white/90 inline-block !leading-[24px] mt-5 text-center w-[327px] px-2">
      Qualquer problema procure o balcão de atendimento da sua companhia aérea
    </p>
  </div>
</template>

<style scoped>
span {
  @apply text-sm font-normal !leading-[16.59px] !tracking-[-0.02em];
}
.flex-container {
  @apply flex flex-col items-center justify-center py-[50px];
}
.heading-one {
  @apply text-xl font-medium text-white mb-5;
}
.heading-second {
  @apply font-medium text-[#000000] opacity-90 text-[40px] !leading-[47px];
}
.heading-third {
  @apply font-medium text-[#000000] opacity-90;
}
</style>
