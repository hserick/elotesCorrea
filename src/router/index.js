// src/router/index.ts o index.js
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue' // Aquí pondrás LandingIntro dentro
import AppLayout from '@/layouts/AppLayout.vue'

import SobreNosotros from '@/views/SobreNosotros.vue'
import ProductosServicios from '@/views/ProductosServicios.vue'
import Contacto from '@/views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Home // Aquí irá LandingIntro (antes lo tenías directo en App.vue)
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: 'sobre-nosotros', name: 'SobreNosotros', component: SobreNosotros },
      { path: 'productos-y-servicios', name: 'ProductosServicios', component: ProductosServicios },
      { path: 'contacto', name: 'Contacto', component: Contacto }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
