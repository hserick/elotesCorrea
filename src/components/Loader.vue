<template>
  <div class="loader-container">
    <img src="/img/elote-mascota.png" alt="Cargando elote" class="elote" />
    <p class="mensaje">Preparando tu antojo...</p>
  </div>
</template>

<style scoped>
.loader-container {
  position: fixed;
  inset: 0;
  background-color: #fefce8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 50;
  font-family: 'Courgette', cursive;
}

.elote {
  width: 120px;
  height: auto;
  animation: girar 1.5s linear infinite;
}

.mensaje {
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #4d7c0f;
  animation: aparecer 0.5s ease-out;
}

@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes aparecer {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>
