<template>
    <div class="game-detail">
      <header>
        <h1 class="game-title">{{ game?.title || "Cargando..." }}</h1>
      </header>
  
      <main v-if="game" class="main-content">
        <div class="image-container">
          <img :src="game.image" :alt="game.title" class="game-image" />
        </div>
        <div class="info-container">
          <p class="description">{{ game.description }}</p>
          <div class="categories">
            <span v-for="category in game.categories" :key="category" class="category">
              {{ category }}
            </span>
          </div>
          <p class="rating">Puntuación: ⭐ {{ game.rating }}</p>
        </div>
      </main>
  
      <section v-if="game" class="comments-section">
        <comment-list :gameId="game.id" />
        <comment-form :gameId="game.id" @commentAdded="fetchGameDetails" />
      </section>
  
      <p v-else class="loading">Cargando detalles del videojuego...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import supabase from "../supabaseClient";
  import CommentList from "./CommentList.vue";
  import CommentForm from "./CommentForm.vue";
  import "../styles/GameDetail.css"; // Importamos el archivo CSS
  
  // Obtener el ID del videojuego desde la ruta
  const route = useRoute();
  const game = ref(null);
  
  // Función para obtener los detalles del videojuego
  const fetchGameDetails = async () => {
    const { id } = route.params; // ID del videojuego
    const { data, error } = await supabase.from("videojuegos").select("*").eq("id", id).single();
    if (error) {
      console.error("Error al obtener detalles del videojuego:", error);
    } else {
      game.value = data;
    }
  };
  
  // Llamar a la función al montar el componente
  onMounted(fetchGameDetails);
  </script>
  
  
  
  
  
  