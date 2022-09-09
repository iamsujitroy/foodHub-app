<template>
  <div>
    <h1 class="title">All Categories</h1>
    <div class="recipe-container all-categories">
      <RecipeItem
        v-for="category in categories"
        :cartBtn="false"
        :imageUrl="category.strCategoryThumb"
        :mealName="category.strCategory"
        :key="category.strCategoryThumb"
        :productLink="'categories/' + category.strCategory"
      />
    </div>
  </div>
</template>

<script>
// import components here
import RecipeItem from "../components/RecipeItem.vue";

export default {
  name: "App",
  components: {
    RecipeItem,
  },
  data() {
    return {
      categories: null,
      selectedCategory: null,
      categoryItems: null,
    };
  },
  created() {
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
        (res) => (res.ok && res.json()) || Promise.reject(res)
      ),
    ]).then((data) => {
      // handle data array here
      this.categories = data[0].categories;
    });
  },
};
</script>

<!-- @click="showCategoryItems(category.strCategory)" -->
