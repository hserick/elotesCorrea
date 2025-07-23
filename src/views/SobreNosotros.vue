<template>
  <div class="sobre-nosotros-page min-h-screen flex flex-col">
    <main class="flex-1 bg-gradient-to-b from-yellow-50 to-yellow-100 px-6 py-12 space-y-16">
      <!-- Historia -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Historia</h2>
        <p class="text-gray-700 leading-relaxed">
          Más que un negocio, Elotes Correa es una historia que se ha cocinado a fuego lento durante más de medio siglo. Todo comenzó en los años dorados del Mercado Jamaica Vive, cuando las trajineras aún navegaban los canales de la ciudad y los aromas de flores y maíz se entrelazaban en el aire. En ese mercado —inaugurado en 1957 como símbolo de modernización y resistencia popular— nuestra familia encontró su hogar comercial, vendiendo elotes desde un pequeño puesto que pronto se volvió punto de encuentro y tradición.
          El logotipo de Elotes Correa, inspirado en el símbolo del Metro de la Ciudad de México, rinde homenaje a esa conexión urbana y cultural: la estación Jamaica, justo frente al mercado, era el portal por donde llegaban cientos de clientes buscando el sabor auténtico del barrio. Cada elote servido era más que un antojo: era un pedazo de historia, una muestra de cariño, una receta que ha pasado de generación en generación.
          Hoy, seguimos honrando ese legado con cada esquite, cada sonrisa y cada detalle que compartimos contigo. Porque en Elotes Correa, el sabor no solo se prueba… se recuerda.
        </p>
      </section>

      <!-- Opiniones -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Opiniones de nuestros clientes</h2>
        <Swiper
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          class="pb-8"
        >
          <SwiperSlide v-for="(opinion, index) in opiniones" :key="index">
            <div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition duration-300 ease-in-out hover:scale-105">
              <img :src="opinion.imagen" alt="Foto de cliente" class="w-20 h-20 rounded-full mb-4 object-cover shadow" />
              <p class="text-gray-700 italic mb-2">“{{ opinion.comentario }}”</p>
              <span class="font-semibold text-green-600">{{ opinion.usuario }}</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <!-- Galería -->
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-green-700 mb-4">Galería</h2>
        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          class="pb-8"
        >
          <SwiperSlide v-for="(img, index) in imagenes" :key="index">
            <img
              :src="img"
              alt="Imagen de galería"
              class="rounded shadow-md object-cover w-full h-64 cursor-pointer transition duration-300 ease-in-out hover:scale-105"
              @click="imagenSeleccionada = img"
            />
          </SwiperSlide>
        </Swiper>

        <!-- Modal de imagen -->
        <transition name="fade">
          <div
            v-if="imagenSeleccionada"
            class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <img :src="imagenSeleccionada" class="max-w-3xl max-h-[80vh] rounded shadow-lg" />
            <button
              @click="imagenSeleccionada = null"
              class="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
            >
              ✕
            </button>
          </div>
        </transition>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Footer from '@/components/Footer.vue'

const imagenSeleccionada = ref(null)

const opiniones = ref([
  {
    usuario: 'María G.',
    comentario: '¡Los mejores elotes que he probado! Siempre vuelvo por más.',
    imagen: './img/galeria/prefil-cliente.png',
  },
  {
    usuario: 'Luis R.',
    comentario: 'Atención excelente y sabor inigualable.',
    imagen: './img/galeria/prefil-cliente.png',
  },
])

const imagenes = ref([
  './img/galeria/elotes1.jpg',
  './img/galeria/elotes2.jpg',
  './img/galeria/elotes3.jpg',
])
</script>
