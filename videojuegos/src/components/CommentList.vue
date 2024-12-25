<template>
    <div class="comment-list">
      <h2>Comentarios</h2>
      <div class="comments-grid" v-if="comments.length > 0">
        <div v-for="comment in comments" :key="comment.id" class="comment-card">
          <div class="comment-header">
            <!-- Imagen de perfil -->
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil" class="profile-image" />
            <p class="comment-name"><strong>{{ comment.user || "Anónimo" }}</strong></p>
          </div>
          <p class="comment-text">{{ comment.text }}</p>
          <p class="comment-date">{{ formatDate(comment.timestamp) }}</p>
        </div>
      </div>
      <p v-else>No hay comentarios aún. ¡Sé el primero en comentar!</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from "vue";
  import supabase from "../supabaseClient";
  import "../styles/CommentList.css"; // Importar estilos externos
  
  const props = defineProps({
    gameId: String, // ID del videojuego
  });
  
  const comments = ref([]);
  
  // Función para obtener los comentarios
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comentarios")
      .select("*")
      .eq("game_id", props.gameId)
      .order("timestamp", { ascending: true });
    if (error) {
      console.error("Error al obtener comentarios:", error);
    } else {
      comments.value = data;
    }
  };
  
  // Escuchar cambios en `gameId` para actualizar los comentarios
  watchEffect(() => {
    if (props.gameId) {
      fetchComments();
    }
  });
  
  // Función para formatear fechas
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  </script>
  
  
  