<script>
import db from "../db/data.js";
export default {
  name: "RecipeItem",
  props: {
    cartBtn: Boolean,
    imageUrl: String,
    mealName: String,
    onImageClick: Function,
    onTitleClick: Function,
    onClickButton: Function,
  },
  methods: {
    addToCart: function () {
      let a = {
        mealName: this.mealName,
        imageUrl: this.imageUrl,
      };
      db.push(a);
      console.log(db);
      console.log(a)
    },
  },
};
</script>

<template>
  <div class="recipe-item">
    <img :src="imageUrl" alt="recipe name" v-on:click="onImageClick"/>
    <h2 click="onTitleClick" v-on:click="onTitleClick">{{ this.mealName }}</h2>
    <div class="recipe-price-container" v-if="this.cartBtn">
      <p class="recipe-price">MRP: <b>₹200</b></p>
      <button class="addToCart-btn" @click="this.addToCart">Add to Cart</button>
    </div>
  </div>
</template>
