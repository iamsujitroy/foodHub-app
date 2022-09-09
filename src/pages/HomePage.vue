<template>
  <div v-if="!hideIngredients">
    <h1 class="title">Random Meal</h1>
    <div class="recipe-container random-meals">
      <RecipeItem
        v-for="randomMeal in randomMeals"
        :cartBtn="true"
        :imageUrl="randomMeal.strMealThumb"
        :mealName="randomMeal.strMeal"
        :key="randomMeal.strMealThumb"
        :imageLink="'product/' + randomMeal.idMeal"
        
        
      />
    </div>

    <h1 class="title">Popular Ingredients</h1>
    <div class="recipe-container popular-meals">
      <RecipeItem
        v-for="popularIngredient in popularIngredients"
        :cartBtn="false"
        :imageUrl="
          'https://www.themealdb.com/images/ingredients/' +
          popularIngredient.strIngredient +
          '.png'
        "
        :mealName="popularIngredient.strIngredient"
        :key="popularIngredient.idIngredient"
        :productLink="'ingredients/' + popularIngredient.strIngredient"
      />
    </div>
  </div>
</template>

<script>
// import axios from "axios";

// import components here
import RecipeItem from "../components/RecipeItem.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
  },
  data() {
    return {
      randomMeals: undefined, // here we store random Meals data
      popularIngredients: undefined, // here we store popular ingredients data
      selectedIngredient: undefined, // here we store selected ingredient name
      ingredientItems: undefined, // here we store selected ingredient data
      hideIngredients: false, // if showIngredients is fasle = showIngredientsItem
    };
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
      this.popularIngredients = data[1].meals.slice(0, 6) || [];
    });
  },
};
</script>
