<template>
    <div class="game-list">
      <h1>Lista de Videojuegos</h1>
  
      <!-- Contenedor de la cuadrícula -->
      <div class="grid-container">
        <div v-for="game in paginatedGames" :key="game.id" class="game-card">
          <img :src="game.image" :alt="game.title" class="game-image" />
          <div class="game-info">
            <h2>{{ game.title }}</h2>
            <div class="categories">
              <span v-for="category in game.categories" :key="category" class="category-chip">
                {{ category }}
              </span>
            </div>
            <p class="rating">{{ game.rating }} ⭐</p>
            <router-link :to="`/games/${game.id}`" class="details-link">Ver detalles</router-link>
          </div>
        </div>
      </div>
  
      <!-- Controles de Paginación -->
      <div class="pagination" v-if="games.length > itemsPerPage">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from "vue";
  import supabase from "../supabaseClient";
  import "../styles/GameList.css"; // Importamos los estilos externos
  
  const games = ref([]);
  const currentPage = ref(1);
  const itemsPerPage = 9; // Mostrar 9 juegos por página
  
  // Función para obtener los videojuegos desde Supabase
  const fetchGames = async () => {
    const { data, error } = await supabase.from("videojuegos").select("*");
    if (error) {
      console.error("Error al conectar con Supabase:", error);
    } else {
      games.value = data; // Asignamos los videojuegos al estado
    }
  };
  
  // Computed para calcular los videojuegos de la página actual
  const paginatedGames = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return games.value.slice(start, end);
  });
  
  // Computed para calcular el número total de páginas
  const totalPages = computed(() => {
    return Math.ceil(games.value.length / itemsPerPage);
  });
  
  // Función para ir a la página anterior
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  
  // Función para ir a la página siguiente
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };
  
  // Ejecutar fetchGames cuando el componente se monte
  onMounted(fetchGames);
  </script>
  
  
  
  
  