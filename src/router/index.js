import { createRouter, createWebHistory } from "vue-router";
// import { createRouter } from "vue-router";

const routes = [
  {
    name: "404",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/404.vue"),
  },
  {
    name: "Home Page",
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    name: "Categories Page",
    path: "/categories",
    component: () => import("../pages/CategoriesPage.vue"),
  },
  {
    name: "Ingredients Page",
    path: "/ingredients",
    component: () => import("../pages/IngredientsPage.vue"),
  },
  {
    name: "Cart Page",
    path: "/cart",
    component: () => import("../pages/CartPage.vue"),
  },
  {
    name: "Product page",
    path: "/product",
    component: () => import("../pages/ProductPage.vue"),
  },
  {
    name: "Category Page",
    path: "/categories/:category_name",
    component: () => import("../pages/CategoryPage.vue"),
  },
  {
    name: "Ingredient Page",
    path: "/ingredients/:ingredient_name", // types categories, ingredients , and more
    component: () => import("../pages/CategoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
