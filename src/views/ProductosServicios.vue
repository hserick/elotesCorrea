<template>
  <div class="productos-servicios bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen flex flex-col">
    <main class="flex-1 px-6 py-12 space-y-16 max-w-6xl mx-auto">
      <!-- Productos -->
<section>
  <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">Nuestros productos</h2>
  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <ProductoCard
      v-for="(producto, i) in productos"
      :key="i"
      :nombre="producto.nombre"
      :descripcion="producto.descripcion"
      :imagen="producto.imagen"
    />
  </div>
</section>

      <!-- Servicios -->
      <section>
        <h2 class="text-3xl font-bold text-green-700 mb-6 text-center">Nuestros servicios</h2>
        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="servicio in servicios" :key="servicio" class="bg-white p-6 rounded-lg shadow-md text-center">
            <span class="text-2xl text-green-600 font-bold block mb-2">🌟</span>
            <p class="text-lg text-gray-800 font-medium">{{ servicio }}</p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import ProductoCard from '../components/ProductoCard.vue'
import Footer from '@/components/Footer.vue'

const productos = [
  { nombre: 'Esquites con tuétano', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Esquites con suadero', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Esquites tradicionales', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Esquites LOKO', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Dorilokos', descripcion: 'Doritos bañados en cueritos, cacahuates, gomitas, salsas y más locura.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Elotes hervidos', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Elotes asados', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Elotes con mayonesa y queso', descripcion: 'Maíz tierno con tuétano dorado, mayonesa, queso y salsa al gusto.', imagen: './img/productos/esquites.jpg'},
  { nombre: 'Tostiesquites', descripcion: 'Maíz preparado servido sobre Tostitos, con topping a elegir.', imagen: './img/productos/esquites.jpg'},
]

const servicios = [
  'Atención personalizada para eventos',
  'Entrega a domicilio',
  'Presencia en ferias locales',
  'Pedidos especiales por WhatsApp',
  'Servicio exprés en zona centro',
  'Colaboración con escuelas o empresas',
]
</script>

<style scoped>
.productos-servicios {
  scroll-behavior: smooth;
}
</style>
