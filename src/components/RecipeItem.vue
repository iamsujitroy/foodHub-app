<template>
  <div v-if="productLink == undefined" class="recipe-item" :to="productLink">
    <router-link :to="imageLink">
      <img :src="imageUrl" alt="recipe name" @click="onImageClick" />
      <h2 click="onTitleClick" @click="onTitleClick">{{ this.mealName }}</h2>
    </router-link>
    <div class="recipe-price-container" v-if="this.cartBtn">
      <p class="recipe-price">MRP: <b>₹200</b></p>
      <button class="addToCart-btn" @click="this.addToCart">Add to Cart</button>
    </div>
  </div>
  <router-link v-else class="recipe-item" :to="productLink">
    <img :src="imageUrl" alt="recipe name" @click="onImageClick" />
    <h2 click="onTitleClick" @click="onTitleClick">{{ this.mealName }}</h2>
    <div class="recipe-price-container" v-if="this.cartBtn">
      <p class="recipe-price">MRP: <b>₹200</b></p>
      <button class="addToCart-btn" @click="this.addToCart">Add to Cart</button>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
import swal from "sweetalert2";
export default {
  name: "RecipeItem",
  props: {
    cartBtn: Boolean,
    imageUrl: String,
    mealName: String,

    onImageClick: Function,
    onTitleClick: Function,
    onClickButton: Function,

    productLink: String,
    imageLink: String,
    // titleLink: String,
  },
  methods: {
    addToCart: function () {
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
      swal.fire({
        title: "Success!",
        // text: "",
        icon: "success",
        confirmButtonText: "ok",
      });
    },
  },
  computed: mapGetters(["allCartProducts"]),
};
</script>