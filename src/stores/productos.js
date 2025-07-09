// src/stores/productos.js
import { defineStore } from 'pinia'

export const useProductosStore = defineStore('productos', {
  state: () => ({
    lista: [
      {
        id: 'elote-clasico',
        nombre: 'Elote clásico',
        descripcion: 'El elote de toda la vida, con mayonesa, queso y chilito.',
        precio: '$25',
        imagen: '/img/productos/elote-clasico.jpg',
        destacado: true
      },
      {
        id: 'esquites-especiales',
        nombre: 'Esquites especiales',
        descripcion: 'Con tuétano, epazote y todo el estilo Correa.',
        precio: '$35',
        imagen: '/img/productos/esquites-especiales.jpg',
        destacado: true
      },
      {
        id: 'elote-loco',
        nombre: 'Elote loco',
        descripcion: 'Mayonesa, queso, Takis, valentina y un toque crujiente.',
        precio: '$40',
        imagen: '/img/productos/elote-loco.jpg',
        destacado: false
      }
    ]
  })
})
