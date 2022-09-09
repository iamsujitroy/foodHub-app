<template>
  <div class="main-container">
    <div class="left-conatiner">
      <img :src="mealDetails.strMealThumb" :alt="mealDetails.strMeal" />
    </div>
    <div class="right-container">
      <h1 class="product-name">{{ mealDetails.strMeal }}</h1>
      <div class="product-price">Price: <span>₹200</span></div>
      <div class="input-product-qty">
        <button class="material-symbols-outlined" @click="decreaseInputQty">
          remove
        </button>
        <input type="number" min="0" max="999" v-model="productQty" />
        <button class="material-symbols-outlined" @click="productQty += 1">
          add
        </button>
      </div>
      <button class="addToCart-btn" @click="addToCart">Add to Cart</button>
      <div class="description-conatiner">
        <h3 class="description-title">Description</h3>
        <p class="description">{{ mealDetails.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //   Product Details
      mealDetails: undefined,
      productQty: 0,
    };
  },
  methods: {
    emptyProductQty: function () {
      if (this.productQty == "") {
        this.productQty = 0;
        console.log("your product input field is empty");
        this.updateProductQty();
      } else if (this.productQty > 999) {
        this.productQty = 999;
      }
    },
    addToCart: function () {
      console.log("clicked on cart!!");
      const index = this.allCartProducts.findIndex((object) => {
        return object.mealName == this.mealDetails.strMeal;
      });
      if (this.productQty < 1) {
        swal.fire({
          title: "Fail!",
          text: "Select Quantity Before You Add to Cart",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } else {
        swal.fire({
          title: "Success!",
          // text: "",
          icon: "success",
          confirmButtonText: "ok",
        });
      }
      if (index >= 0) {
        this.allCartProducts[index].qty =
          this.allCartProducts[index].qty + this.productQty;
        this.productQty = 0;
      } else {
        let a = {
          mealName: this.mealDetails.strMeal,
          imageUrl: this.mealDetails.strMealThumb,
          qty: this.productQty,
        };
        this.allCartProducts.push(a);
      }
    },
    decreaseInputQty: function () {
      return this.productQty == 0
        ? (this.productQty = 0)
        : (this.productQty -= 1);
    },
  },
  created() {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.productId}`;
    Promise.all([
      fetch(url).then(
        (res) => (res.ok && res.json()) || Promise.reject(console.log(res))
      ),
    ]).then((data) => {
      this.mealDetails = data[0].meals[0];
    });
  },
  computed: mapGetters(["allCartProducts"]),
};
</script>

<style scoped>
@import "../design/custom/pages/product_page.css";
</style>
