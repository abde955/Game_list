import { createRouter, createWebHistory } from "vue-router";
import GameList from "../components/GameList.vue";
import GameDetail from "../components/GameDetail.vue";

const routes = [
  { path: "/", redirect: "/games" },
  { path: "/games", component: GameList },
  { path: "/games/:id", component: GameDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

