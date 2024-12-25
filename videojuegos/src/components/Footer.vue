<template>
    <footer class="app-footer">
      <p>&copy; {{ new Date().getFullYear() }} GameHub. Todos los derechos reservados.</p>
      <nav class="footer-links">
        <router-link to="/privacy" class="footer-link">Política de Privacidad</router-link>
        <router-link to="/terms" class="footer-link">Términos y Condiciones</router-link>
      </nav>
    </footer>
  </template>
  
  <script setup>
  // No hay lógica específica, es solo un componente visual
  import "../styles/Footer.css";
  </script>
  