<template>
    <header class="app-header">
      <div class="logo-container">
        <h1 class="app-logo">GameHub</h1>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/about" class="nav-link">Acerca</router-link>
        <router-link to="/contact" class="nav-link">Contacto</router-link>
      </nav>
    </header>
  </template>
  
  <script setup>
  // No hay lógica específica, es solo un componente visual
  import "../styles/Header.css";
  </script>
  