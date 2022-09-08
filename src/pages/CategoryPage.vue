<template>
  <h1 class="title">router link is below 👇</h1>
  <h1 class="title">{{ $route.params.ingredient_name }}</h1>
  <h1 class="title">{{ $route.params.category_name }}</h1>
  <div class="recipe-container all-categories">
    <RecipeItem
      v-for="meal in itemData"
      :cartBtn="true"
      :imageUrl="meal.strMealThumb"
      :mealName="meal.strMeal"
      :key="meal.idMeal"
    />
    <h1>{{ itemData }}</h1>
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
    fetchDataUrl: function (){
      let category = this.$route.params.category_name;
      let ingredient = this.$route.params.ingredient_name;

      if(category != undefined){
        return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      }else if(ingredient != undefined){
        return `www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      }
      
    },
  },
  created() {
    const url = this.fetchDataUrl();

    Promise.all([
      fetch(url).then((res) => (res.ok && res.json()) || Promise.reject(console.log(res))),
    ]).then((data) => {
      this.itemData = data[0].meals;
    });
  },
};
</script>
