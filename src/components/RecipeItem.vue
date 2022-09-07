<script>
import { mapGetters } from "vuex";
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
      console.log("clicked on cart!!");
      const index = this.allCartProducts.findIndex((object) => {
        return object.mealName == this.mealName;
      });
      if (index >= 0) {
        this.allCartProducts[index].qty = this.allCartProducts[index].qty + 1;
      } else {
        let a = {
          mealName: this.mealName,
          imageUrl: this.imageUrl,
          qty: 1,
        };
        this.allCartProducts.push(a);
      }
    },
  },
  computed: mapGetters(["allCartProducts"]),
};
</script>

<template>
  <div class="recipe-item">
    <img :src="imageUrl" alt="recipe name" v-on:click="onImageClick" />
    <h2 click="onTitleClick" v-on:click="onTitleClick">{{ this.mealName }}</h2>
    <div class="recipe-price-container" v-if="this.cartBtn">
      <p class="recipe-price">MRP: <b>₹200</b></p>
      <button class="addToCart-btn" @click="this.addToCart">Add to Cart</button>
    </div>
  </div>
</template>
