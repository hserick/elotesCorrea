<template>
  <div class="contacto bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen flex flex-col">
    <main class="flex-1 px-6 py-12 space-y-16 max-w-4xl mx-auto">
      <!-- Encabezado -->
      <section class="text-center">
        <h2 class="text-4xl font-bold text-green-800 mb-6">Contáctanos</h2>
        <p class="text-lg text-gray-700">
          ¿Tienes un evento especial? ¿Quieres el sabor de <strong>elotes Correa</strong> en tu próxima reunión?
          Escríbenos para cotizaciones, pedidos especiales o simplemente para saludarnos 🌽💛
        </p>
      </section>

      <!-- Información de contacto -->
      <section class="space-y-4 text-gray-800 text-base">
        <p><strong>📍 Dirección:</strong> Mercado de Jamaica Vive, local 25 carril 1, Ciudad de México, CP 15800, Venustiano Carranza.</p>
        <p><strong>📞 Teléfono:</strong> 55 5183 3671</p>
        <p><strong>📧 Correo:</strong> <a href="mailto:acorreasegundo@gmail.com" class="text-green-700 hover:underline">acorreasegundo@gmail.com</a></p>
        <p><strong>🕒 Horarios:</strong> Martes a domingo, 9:00 a.m. – 03:00 a.m.</p>
      </section>

      <!-- Mapa de ubicación -->
      <section>
        <h3 class="text-2xl font-bold text-green-700 mb-4 text-center">Encuéntranos</h3>
        <div class="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1126926171337!2d-99.12627212394555!3d19.40753628186662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd58122c247%3A0x8ab2ee7ca4e3d674!2sElotes%20Correa!5e0!3m2!1ses!2smx!4v1753325697983!5m2!1ses!2smx"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <!-- Redes sociales -->
      <section>
        <h3 class="text-2xl font-bold text-green-700 mb-4 text-center">Síguenos en redes</h3>
        <div class="flex flex-wrap gap-4 justify-center text-green-800 text-lg">
          <a href="https://www.facebook.com/people/Elotes-Correa/100057527645810/" target="_blank" class="hover:text-green-600">📘 Facebook</a>
          <!-- <a href="https://www.tiktok.com/@elotescorrea" target="_blank" class="hover:text-green-600">🎵 TikTok</a>
          <a href="https://www.instagram.com/elotescorrea" target="_blank" class="hover:text-green-600">📷 Instagram</a> -->
          <a href="https://wa.me/525551833671?text=Deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20elotes%20y%20esquites!!%20%F0%9F%98%81" target="_blank" class="hover:text-green-600">💬 WhatsApp</a>
          <a href="mailto:acorreasegundo@gmail.com" class="hover:text-green-600">✉️ E-mail</a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.contacto a {
  transition: color 0.2s ease;
}
</style>