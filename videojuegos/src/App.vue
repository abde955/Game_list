<template>
  <div id="app">
    <!-- Integrar el Header -->
    <Header />

    <main>
      <!-- Renderiza el componente según la ruta activa -->
      <router-view />
    </main>

    <!-- Integrar el Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue"; // Importar el Header
import Footer from "./components/Footer.vue"; // Importar el Footer
</script>

<style scoped>
/* Estilos básicos para el contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1; /* Asegura que el contenido principal ocupe el espacio entre Header y Footer */
  margin: 1rem;
  font-family: Arial, sans-serif;
}
</style>


