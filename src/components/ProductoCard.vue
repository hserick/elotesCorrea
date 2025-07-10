<template>
  <div class="producto-card" @click="mostrar = !mostrar">
    <img
      v-if="imagen"
      :src="imagen"
      :alt="nombre"
      class="imagen-producto"
    />

    <h3 class="titulo">{{ nombre }}</h3>

    <transition name="deslizar">
      <p v-if="mostrar && descripcion" class="descripcion">
        {{ descripcion }}
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  nombre: String,
  descripcion: String,
  imagen: String
})
const mostrar = ref(false)
</script>

<style scoped>
.producto-card {
  background-image: url('./img/menu/cartulina-amarillo-f.png');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.producto-card:hover {
  animation: tambaleo 0.6s ease-in-out;
  transform-origin: top center;
}

.imagen-producto {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.titulo {
  font-family: 'Courgette', cursive;
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
}

.descripcion {
  font-size: 0.9rem;
  color: #374151;
  margin-top: 0.5rem;
  padding: 0 0.5rem;
}

/* Animación del texto */
.deslizar-enter-active,
.deslizar-leave-active {
  transition: all 0.3s ease;
}
.deslizar-enter-from,
.deslizar-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-4px);
}
.deslizar-enter-to,
.deslizar-leave-from {
  opacity: 1;
  max-height: 100px;
  transform: translateY(0);
}

/* Tambaleo */
@keyframes tambaleo {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(1deg); }
}
</style>
