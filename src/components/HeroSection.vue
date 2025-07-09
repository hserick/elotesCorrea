<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- Fondo de vídeo -->
    <div class="absolute inset-0 -z-10">
      <iframe
        src="https://youtube.com/shorts/eATRDOjg66g?feature=shared"
        frameborder="0"
        allow="autoplay"
        class="w-full h-full pointer-events-none brightness-50 blur-sm opacity-80"
      ></iframe>
    </div>

    <!-- Animación del elote -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out"
         :class="{ 'translate-x-[-40%]': mostrarNombre }">
      <EloteSVG />
    </div>

    <!-- Texto animado -->
    <transition name="fade">
      <h1
  v-if="mostrarNombre"
  class="absolute top-1/2 right-12 transform -translate-y-1/2 text-white text-4xl font-bold tracking-wider z-20 glow-text"
>
  Elotes Correa
</h1>

    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EloteSVG from '@/components/EloteSVG.vue' // tu imagen SVG como componente

const mostrarNombre = ref(false)

onMounted(() => {
  setTimeout(() => {
    mostrarNombre.value = true
  }, 3000) // muestra el nombre después de animar el elote
})
</script>

<style scoped>
.glow-text {
  text-shadow:
    0 0 8px #fcd34d,     /* resplandor cercano */
    0 0 16px #fbbf24,    /* luz cálida */
    0 0 24px #f59e0b;    /* halo externo */
}
@keyframes glowUp {
  0%   { text-shadow: none; opacity: 0; }
  100% { text-shadow: 
    0 0 8px #fcd34d, 
    0 0 16px #fbbf24, 
    0 0 24px #f59e0b; 
    opacity: 1;
  }
}

.glow-text {
  animation: glowUp 1.2s ease forwards;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
