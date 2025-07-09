<!-- src/components/EloteSVG.vue -->
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    class="w-32 h-32"
    fill="none"
  >
    <!-- Mazorca -->
    <ellipse cx="100" cy="100" rx="40" ry="70" fill="#facc15" stroke="#d4a104" stroke-width="2" />

    <!-- Granitos -->
    <g id="granitos">
      <circle cx="90" cy="70" r="5" fill="#fff8b3" />
      <circle cx="110" cy="80" r="4.5" fill="#fff8b3" />
      <circle cx="95" cy="95" r="5" fill="#fff8b3" />
      <circle cx="105" cy="110" r="4" fill="#fff8b3" />
    </g>

    <!-- Hojas laterales -->
    <path
      d="M60 120 Q80 80 100 150 Q70 160 60 120"
      fill="#15803d"
    />
    <path
      d="M140 120 Q120 80 100 150 Q130 160 140 120"
      fill="#15803d"
    />

    <!-- Ojos estilo manga -->
    <g id="ojos">
      <ellipse cx="85" cy="90" rx="8" ry="12" fill="white" stroke="#222" stroke-width="1" />
      <circle cx="85" cy="90" r="4" fill="#4b5563" />
      <circle cx="83" cy="88" r="1.5" fill="white" opacity="0.8" />

      <ellipse cx="115" cy="90" rx="8" ry="12" fill="white" stroke="#222" stroke-width="1" />
      <circle cx="115" cy="90" r="4" fill="#4b5563" />
      <circle cx="113" cy="88" r="1.5" fill="white" opacity="0.8" />
    </g>

    <!-- Boca sonriente -->
    <path
      d="M90 120 Q100 130 110 120"
      stroke="#222"
      stroke-width="2"
      fill="none"
    />

    <!-- Bigote -->
    <path
      d="M70 115 Q85 110 100 115 Q115 110 130 115"
      stroke="#5c3317"
      stroke-width="4"
      fill="none"
    />

    <!-- Sombrero mexicano -->
    <g id="sombrero">
      <ellipse cx="100" cy="50" rx="50" ry="10" fill="#78350f" />
      <path
        d="M70 40 Q100 10 130 40"
        fill="#a16207"
      />
    </g>
  </svg>
</template>

<script setup>
// Este SVG está listo para futuras animaciones y efectos
</script>