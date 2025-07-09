<template>
  <div class="sobre-nosotros-page min-h-screen flex flex-col">

    <!-- Contenido principal -->
    <main class="flex-1 bg-gradient-to-b from-yellow-50 to-yellow-100 px-6 py-12 space-y-16">
      <!-- Historia -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Historia</h2>
        <p class="text-gray-700 leading-relaxed">
          Desde hace más de 15 años, Elotes Correa ha sido sinónimo de tradición, sabor y cariño.
          Empezamos como un carrito familiar en el barrio, y hoy seguimos compartiendo el mismo sazón
          que nos distingue en cada elote, cada esquite y cada sonrisa.
        </p>
      </section>

      <!-- Opiniones -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Opiniones de nuestros clientes</h2>
        <ul class="space-y-4 text-gray-800">
          <li class="bg-white p-4 rounded shadow-md">
            “¡El elote preparado más sabroso de todo CDMX! No me lo pierdo cada viernes.” — <span class="italic">Doña Lucha</span>
          </li>
          <li class="bg-white p-4 rounded shadow-md">
            “Llevamos a los niños y no quieren comer elote en ningún otro lado 😄” — <span class="italic">Familia Mendoza</span>
          </li>
          <li class="bg-white p-4 rounded shadow-md">
            “Servicio amable, ingredientes frescos y el sabor... ¡uff!” — <span class="italic">Luis R.</span>
          </li>
        </ul>
      </section>

      <!-- Galería -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Galería</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/img/galeria/elotes1.jpg" alt="Elote 1" class="rounded shadow-sm object-cover w-full h-40" />
          <img src="/img/galeria/elotes2.jpg" alt="Elote 2" class="rounded shadow-sm object-cover w-full h-40" />
          <img src="/img/galeria/elotes3.jpg" alt="Puesto" class="rounded shadow-sm object-cover w-full h-40" />
        </div>
      </section>
    </main>

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Footer from '@/components/Footer.vue'
</script>
