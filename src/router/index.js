import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";
const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },
  ],
});
export default routes;
