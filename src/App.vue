<script setup>
import {ref, onMounted} from 'vue'
import Loader from './components/Loader.vue';

const cargando = ref(true)

onMounted(() => {
  setTimeout(() => {
    cargando.value = false
  }, 1500);
})
</script>

<template>
  <div>
    <Loader v-if="cargando" />
    <RouterView v-else />
  </div>
</template>