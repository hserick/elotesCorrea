<template>
  <section class="grid-container absolute top-1/4 left-0 w-full z-30">
    <RouterLink
      v-for="(item, index) in cartulinas"
      :key="index"
      :to="item.ruta"
      class="cartel animacion-inicial"
    >
      <div class="wrapper" :style="`background-image: url('${item.bg}')`">
        <span class="texto-cartel">{{ item.titulo }}</span>
      </div>
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()

const cartulinas = [
  { titulo: 'Sobre nosotros', bg: '/img/menu/cartulina-fucsia.png', ruta: '/sobre-nosotros' },
  { titulo: 'Productos y servicios', bg: '/img/menu/cartulina-naranja.png', ruta: '/productos-y-servicios' },
  { titulo: 'Contáctanos', bg: '/img/menu/cartulina-amarillo-f.png', ruta: '/contacto' }
]
</script>

<style scoped>
/* 🎞 Animación de entrada */
@keyframes caer {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 🎯 Animación de tambaleo */
@keyframes tambaleo {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(2deg); }
  50%  { transform: rotate(-2deg); }
  75%  { transform: rotate(1.5deg); }
  100% { transform: rotate(0deg); }
}

/* 📐 Grid responsivo */
.grid-container {
  display: grid;
  gap: 1rem;
  padding: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "a b"
    "c c";
  max-width: 100vw;
  overflow-x: hidden;
  justify-items: center;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .grid-container {
    margin-top: 10%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "a b c";
  }
}

.cartel:nth-child(1) { grid-area: a; }
.cartel:nth-child(2) { grid-area: b; }
.cartel:nth-child(3) { grid-area: c; }

/* 📦 Estructura del cartel */
.cartel {
  width: 100%;
  max-width: 200px;
  height: 180px;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

/* ✨ Aplicación de animación inicial */
.animacion-inicial {
  animation: caer 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(-60px);
}

/* 🖼️ Fondo visual con animación de tambaleo */
.wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform-origin: top center;
  cursor: pointer;
}

.wrapper:hover,
.wrapper:active {
  animation: tambaleo 0.6s ease-in-out;
}

/* ✍️ Texto o botón */
.texto-cartel {
  font-family: 'Courgette', cursive;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0.4rem 1rem;
  border-radius: 8px;
  color: white;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  border: none;
}
</style>
