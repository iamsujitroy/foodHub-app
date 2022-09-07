import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../pages/HomePage.vue'

const routes = [
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/404.vue"),
  },
  {
    name: "home",
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    name: "categories",
    path: "/categories",
    component: () => import("../pages/CategoriesPage.vue"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("../pages/CartPage.vue"),
  },
  {
    name: "category",
    path: "/category/:category_name",
    component: () => import("../pages/CategoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
