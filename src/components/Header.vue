<template>
  <header class="bg-yellow-200 px-6 py-4 shadow-md">
  <div class="flex flex-col md:flex-row items-center md:justify-between gap-4">
    <!-- Logo + título -->
    <div class="flex items-center gap-4">
      <img src="/img/elote-mascota.png" alt="Logo" class="h-12" />
      <h1 class="text-2xl font-bold text-green-800">elotes Correa</h1>
    </div>

    <!-- Menú -->
    <nav class="flex flex-col sm:flex-row gap-2 text-center font-semibold text-green-900">
      <RouterLink to="/sobre-nosotros" class="hover:underline">Sobre nosotros</RouterLink>
      <RouterLink to="/productos-y-servicios" class="hover:underline">Productos y servicios</RouterLink>
      <RouterLink to="/contacto" class="hover:underline">Contáctanos</RouterLink>
    </nav>
  </div>
</header>

</template>
