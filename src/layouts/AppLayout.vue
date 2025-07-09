<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <!-- Aquí entra el contenido de cada página -->
    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
