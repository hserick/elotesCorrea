<template>
  <div class="letrero-container">
    <img src="/img/letrero.png" alt="Letrero Elotes" class="letrero-img" />

    <!-- Texto "elotes / Correa" alineado a la derecha -->
    <div class="texto-lateral">
      <p class="linea">elotes</p>
      <p class="linea">Correa</p>
    </div>
  </div>
</template>

<script setup>
// Todo visual por ahora, sin lógica aún
</script>

<style scoped>
.letrero-container {
  position: fixed;
  top: 24px;
  left: 24px;
  width: 400px; /* Doble de ancho que de alto */
  height: 200px;
  z-index: 20;
}

.letrero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Contenedor del texto alineado a la derecha del letrero */
.texto-lateral {
  position: absolute;
  top: 45%;
  right: 8rem;
  transform: translateY(-50%);
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.linea {
  font-family: 'Courgette', cursive;
  font-size: 1.8rem;
  font-weight: normal;
  color: #1f2937;
  text-shadow: 0 0 4px #fde047, 0 0 8px #fbbf24;
}
</style>
