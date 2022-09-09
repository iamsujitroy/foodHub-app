<template>
  <h1 class="title">{{ title() }}</h1>
  <!-- <h1 class="title">{{ $route.params.category_name }}</h1> -->
  <div class="recipe-container all-categories">
    <RecipeItem
      v-for="meal in itemData"
      :cartBtn="true"
      :imageUrl="meal.strMealThumb"
      :mealName="meal.strMeal"
      :key="meal.idMeal"
      :imageLink="'/product/' + meal.idMeal"
    />
    <!-- TODO: add product link  -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
// import components here
import RecipeItem from "../components/RecipeItem.vue";

export default {
  name: "categoryItems",
  components: {
    RecipeItem,
  },
  data() {
    return {
      itemData: undefined,
      route: useRoute(),
    };
  },
  methods: {
    fetchDataUrl: function () {
      let category = this.$route.params.category_name;
      let ingredient = this.$route.params.ingredient_name;

      if (category != undefined) {
        return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else if (ingredient != undefined) {
        return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      }
    },
    title: function () {
      let category = this.$route.params.category_name;
      let ingredient = this.$route.params.ingredient_name;

      if (category != undefined) {
        return category;
      } else if (ingredient != undefined) {
        return ingredient;
      }
    },
  },
  created() {
    const url = this.fetchDataUrl();
    // const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"; // working || category
    // const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=salmon";

    Promise.all([
      fetch(url).then(
        (res) => (res.ok && res.json()) || Promise.reject(console.log(res))
      ),
    ]).then((data) => {
      this.itemData = data[0].meals;
    });
  },
};
</script>
