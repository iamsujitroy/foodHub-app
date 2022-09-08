<template>
  <h1 class="title">{{ selectedCategoryName }}</h1>
  <div class="recipe-container all-categories">
    <RecipeItem
      v-for="ingredient in allIngredients"
      :cartBtn="false"
      :imageUrl="
        'https://www.themealdb.com/images/ingredients/' +
        ingredient.strIngredient +
        '.png'
      "
      :mealName="ingredient.strIngredient"
      :key="ingredient.idIngredient"
    />
  </div>
</template>

<script>
// import components here
import RecipeItem from "../components/RecipeItem.vue";

export default {
  name: "categoryItems",
  components: {
    RecipeItem,
  },
  data() {
    return {
      allIngredients: undefined,
    };
  },
  created() {
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
    ]).then((data) => {
      this.allIngredients = data[0].meals.slice(0, 50);
    });
  },
};
</script>
