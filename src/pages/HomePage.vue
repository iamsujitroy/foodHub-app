<template>
  <NavBar />
  <div v-if="!hideIngredients">
    <h1 class="title">Random Meal</h1>
    <div class="recipe-container random-meals">
      <RecipeItem
        v-for="randomMeal in randomMeals"
        :cartBtn="true"
        :imageUrl="randomMeal.strMealThumb"
        :mealName="randomMeal.strMeal"
        :key="randomMeal.strMealThumb"
      />
    </div>

    <h1 class="title">Popular Ingredients</h1>
    <div class="recipe-container popular-meals">
      <RecipeItem
        v-for="popularIngredient in popularIngredients.slice(0, 6)"
        :cartBtn="false"
        :imageUrl="
          'https://www.themealdb.com/images/ingredients/' +
          popularIngredient.strIngredient +
          '.png'
        "
        :mealName="popularIngredient.strIngredient"
        :url="popularIngredient"
        :key="popularIngredient.idIngredient"
        @click="showIngredientItems(popularIngredient.strIngredient)"
      />
    </div>
  </div>
  <div v-if="hideIngredients">
    <h1 class="title">{{ selectedCategory }}</h1>
    <div class="recipe-container all-categories">
      <RecipeItem
        v-for="ingredientItem in ingredientItems"
        :cartBtn="hideIngredients"
        :imageUrl="ingredientItem.strMealThumb"
        :mealName="ingredientItem.strMeal"
        :key="ingredientItem.strMealThumb"
      />
    </div>
  </div>
</template>

<script>
// import axios from "axios";

// import components here
import NavBar from "../components/NavBar.vue";
import RecipeItem from "../components/RecipeItem.vue";

export default {
  name: "App",
  components: {
    NavBar,
    RecipeItem,
  },
  data() {
    return {
      randomMeals: null, // here we store random Meals data
      popularIngredients: null, // here we store popular ingredients data
      selectedIngredient: null, // here we store selected ingredient name
      ingredientItems: null, // here we store selected ingredient data
      hideIngredients: false, // if showIngredients is fasle = showIngredientsItem
    };
  },
  methods: {
    showIngredientItems(ingredient) {
      Promise.all([
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        ).then((res) => (res.ok && res.json()) || Promise.reject(res)),
      ]).then((data) => {
        // handle data array here
        this.ingredientItems = data[0].meals;
      });
      this.hideIngredients = true; // if false show the items insted of categories
      this.selectedCategory = ingredient; // it will store the currently selected category
    },
  },
  created() {
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
    ]).then((data) => {
      this.randomMeals = data[0].meals;
      this.popularIngredients = data[1].meals;
    });
  },
};
</script>

<!-- @click="showIngredientItems(popularIngredient.strIngredient)" -->
