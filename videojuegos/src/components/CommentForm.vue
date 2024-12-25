<template>
    <div class="comment-form">
      <h2>Deja un comentario</h2>
      <form @submit.prevent="addComment">
        <input
          type="text"
          v-model="user"
          placeholder="Tu nombre (opcional)"
          class="input"
        />
        <textarea
          v-model="text"
          placeholder="Escribe tu comentario aquí..."
          maxlength="500"
          class="textarea"
          required
        ></textarea>
        <div class="button-container">
          <button type="submit" class="button">Enviar</button>
        </div>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import supabase from "../supabaseClient";
  import "../styles/CommentForm.css"; // Importar los estilos externos
  
  const props = defineProps({
    gameId: String, // ID del videojuego
  });
  
  const user = ref("");
  const text = ref("");
  const errorMessage = ref("");
  
  // Función para agregar un nuevo comentario
  const addComment = async () => {
    if (!text.value.trim()) {
      errorMessage.value = "El comentario no puede estar vacío.";
      return;
    }
    const { error } = await supabase.from("comentarios").insert([
      {
        game_id: props.gameId,
        user: user.value || null, // Si el nombre está vacío, será null
        text: text.value.trim(),
      },
    ]);
    if (error) {
      errorMessage.value = "Error al enviar el comentario. Intenta nuevamente.";
      console.error("Error al agregar comentario:", error);
    } else {
      user.value = "";
      text.value = "";
      errorMessage.value = "";
      emit("commentAdded"); // Emitir un evento para actualizar los comentarios
    }
  };
  </script>
  
  
  