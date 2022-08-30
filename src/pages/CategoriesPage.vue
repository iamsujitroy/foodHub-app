<template>
  <NavBar />
  <div v-if="showCategory">
    <h1 class="title">All Categories</h1>
    <div class="recipe-container all-categories">
      <RecipeItem
        v-for="category in categories"
        :cartBtn="!showCategory"
        :imageUrl="category.strCategoryThumb"
        :mealName="category.strCategory"
        :key="category.strCategoryThumb"
        @click="showCategoryItems(category.strCategory)"
      />
    </div>
  </div>
  <div v-else>
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
  </div>
</template>

<script>
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
      categories: null,
      selectedCategory: null,
      categoryItems: null,
      showCategory: true,
    };
  },
  methods: {
    showCategoryItems(category) {
      // fetch category items
      Promise.all([
        fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        ).then((res) => (res.ok && res.json()) || Promise.reject(res)),
      ])
        .then((data) => {
          // handle data array here
          this.categoryItems = data[0].meals;
        })
      // if false show the items insted of categories
      this.showCategory = false;
      // it will store the currently selected category
      this.selectedCategory = category;
    },
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
