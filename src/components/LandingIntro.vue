<template>
  <LetreroElotes />
  <LetrerosMenu />
  <section class="relative w-full h-screen overflow-hidden flex items-center justify-center">
    <!-- Fondo: video de YouTube como antes -->
    <iframe
      class="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-50 blur-sm z-0"
      src="https://www.youtube.com/embed/eATRDOjg66g?autoplay=1&mute=1&controls=0&loop=1&playlist=eATRDOjg66g&modestbranding=1&showinfo=0"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>

    <!-- Logo PNG -->
    <img
      src="/img/elote-mascota.png"
      alt="Elotes Correa"
      class="absolute w-32 md:w-40 transition-all duration-1000 ease-in-out z-30"
      :class="logoCentrado ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'top-6 left-15 scale-75'"
      @transitionend="mostrarTexto = true"
    />

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LetreroElotes from './LetreroElotes.vue'
import LetrerosMenu from './LetrerosMenu.vue'

const logoCentrado = ref(true)
const mostrarTexto = ref(false)

onMounted(() => {
  setTimeout(() => {
    logoCentrado.value = false
  }, 2500) // esperar antes de mover logo
})
</script>

<style scoped>
/* Glow para texto */
.glow-text {
  text-shadow:
    0 0 10px #facc15,
    0 0 20px #fbbf24,
    0 0 30px #f59e0b;
}

/* Animación embarrado “mayonesa” */
.mayonesa-enter-from {
  opacity: 0;
  transform: translateX(100%) scaleX(1.8) skewX(-10deg);
}
.mayonesa-enter-active {
  transition: all 0.8s ease-out;
}
.mayonesa-enter-to {
  opacity: 1;
  transform: translateX(0) scaleX(1) skewX(0);
}
</style>
