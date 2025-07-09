<template>
  <div class="elote-adorable">
    <!-- Cabellitos -->
    <div class="cabellitos">
      <div v-for="n in 10" :key="n"></div>
    </div>

    <!-- Mazorca -->
    <div class="mazorca">
      <!-- Ojos -->
      <div class="ojo ojo-izq">
        <div class="iris"><div class="brillo"></div></div>
        <div class="pestanas pestanas-izq"></div>
      </div>
      <div class="ojo ojo-der">
        <div class="iris"><div class="brillo"></div></div>
        <div class="pestanas pestanas-der"></div>
      </div>

      <!-- Boca -->
      <div class="boca-tierna"></div>

      <!-- Bigote -->
      <div class="bigote"></div>
    </div>

    <!-- Sombrero -->
    <div class="sombrero">
      <div class="ala"></div>
      <div class="copa"></div>
    </div>

    <!-- Hojas -->
    <div class="hoja hoja-left"></div>
    <div class="hoja hoja-right"></div>
  </div>
</template>

<style scoped>
.elote-adorable {
  position: relative;
  width: 130px;
  height: 210px;
  margin: auto;
}

/* Cabellitos */
.cabellitos {
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 20px;
  display: flex;
  justify-content: space-between;
}
.cabellitos div {
  width: 2px;
  height: 18px;
  background-color: #a16207;
  border-radius: 5px;
  transform-origin: bottom center;
}
.cabellitos div:nth-child(1)  { transform: rotate(-25deg); }
.cabellitos div:nth-child(2)  { transform: rotate(-15deg); }
.cabellitos div:nth-child(3)  { transform: rotate(-8deg); }
.cabellitos div:nth-child(4)  { transform: rotate(-2deg); }
.cabellitos div:nth-child(5)  { transform: rotate(5deg); }
.cabellitos div:nth-child(6)  { transform: rotate(12deg); }
.cabellitos div:nth-child(7)  { transform: rotate(18deg); }
.cabellitos div:nth-child(8)  { transform: rotate(25deg); }
.cabellitos div:nth-child(9)  { transform: rotate(30deg); }
.cabellitos div:nth-child(10) { transform: rotate(35deg); }

/* Mazorca */
.mazorca {
  position: relative;
  background: radial-gradient(#fde047 3px, transparent 4px),
              radial-gradient(#fde047 3px, transparent 4px);
  background-position: 5px 5px, 10px 10px;
  background-size: 12px 12px;
  background-repeat: repeat;
  background-color: #fbbf24;
  border-radius: 50% 50% 40% 40% / 60% 60% 30% 30%;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 -6px 0 #d4a104;
  z-index: 1;
}

/* Ojos */
.ojo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 36px;
  background: white;
  border: 2px solid #222;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ojo-izq { left: 15%; }
.ojo-der { right: 15%; }

.iris {
  width: 14px;
  height: 20px;
  background: radial-gradient(circle at 30% 30%, #fff, #4b5563 60%);
  border-radius: 50%;
  position: relative;
  animation: parpadeo 5s infinite;
}
.brillo {
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  opacity: 0.8;
}

.pestanas {
  position: absolute;
  width: 100%;
  height: 10px;
  top: -10px;
  display: flex;
  justify-content: space-between;
}
.pestanas::before,
.pestanas::after {
  content: '';
  width: 5px;
  height: 10px;
  background: #222;
  border-radius: 50%;
}
.pestanas-izq::before { transform: rotate(-25deg); }
.pestanas-der::after { transform: rotate(25deg); }

/* Boca */
.boca-tierna {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 18px;
  border-bottom: 3px solid #222;
  border-radius: 0 0 50% 50%;
}

/* Bigote */
.bigote {
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 12px;
  border-top: 4px solid #5c3317;
  border-radius: 50% 50% 0 0;
}

/* Sombrero */
.sombrero {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.ala {
  width: 80px;
  height: 12px;
  background: #78350f;
  border-radius: 50%;
}
.copa {
  position: absolute;
  top: -16px;
  left: 15px;
  width: 50px;
  height: 30px;
  background: #a16207;
  border-radius: 50% 50% 0 0;
}

/* Hojas verdes */
.hoja {
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 100px;
  background-color: #15803d;
  border-radius: 60% 60% 0 0;
  z-index: 0;
}
.hoja-left {
  left: -30px;
  transform: rotate(-25deg);
}
.hoja-right {
  right: -30px;
  transform: rotate(25deg);
}

/* Animación de parpadeo */
@keyframes parpadeo {
  0%, 95%, 100% { transform: scaleY(1); }
  97% { transform: scaleY(0.1); }
}
</style>