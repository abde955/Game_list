import { createApp } from "vue";
import "./styles/main.css";
import App from "./App.vue";
import router from "./router"; // Importa el router

// Crea la app con Vue Router
createApp(App).use(router).mount("#app");

