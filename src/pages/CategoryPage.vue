<template>
  <!-- <div>
    <h1 class="title">{{selectedCategory}}</h1>
    <div class="recipe-container all-categories">
      <RecipeItem
        v-for="item in categoryItems"
        :cartBtn="!showCategory"
        :imageUrl="item.strMealThumb"
        :mealName="item.strMeal"
        :key="item.idMeal"
      />
    </div>
  </div> -->
  <h1>Hello world</h1>
  <h1>{{ this.categoryName }}</h1>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "categoryItems",
  data() {
    return {
      categoryName: undefined,
      categoryItems: undefined,
    };
  },
  components: {},
  mounted() {
    const route = useRoute();
    console.log(route.params.category_name);
    this.categoryName = route.params.category_name;
  },
};
</script>
