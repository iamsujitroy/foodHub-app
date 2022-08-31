<template>
  <div class="product-container">
    <img :src="imageUrl" alt="product image here" class="product-image" />
    <div class="product-detail-container">
      <h2 class="product-title">{{ recipeName }}</h2>
      <p>Quantity: <b>1</b></p>
      <p>Price: <b>₹200</b></p>
    </div>
    <span class="material-symbols-outlined" @click="this.removeFromCart">
      delete
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartProduct",
  props: {
    recipeName: String,
    imageUrl: String,
  },
  methods: {
    removeFromCart: function () {
      console.log("success !!");
      let a = {
        mealName: this.recipeName,
        imageUrl: this.imageUrl,
      };
      this.allCartProducts.pop(a);
    },
  },
  computed: mapGetters(["allCartProducts"]),
};
</script>

<style scoped>
.product-container {
  width: 85%;
  margin: auto;
  margin-top: 14px;
  display: flex;
  padding: 10px;
  /* background-color: #80808071; */
  background-color: #fff;
  box-shadow: 3px 3px 10px #00000033;
}
.product-container:first-child {
  margin-top: 0;
}
.product-image {
  width: 22%;
  background: green;
}
.product-detail-container {
  width: 78%;
  padding-left: 25px;
}
.product-detail-container b {
  color: rgb(0, 102, 0);
}
.product-container > span.material-symbols-outlined {
  color: red;
  cursor: pointer;
}
@media only screen and (max-width: 400px) {
  .product-container img{
    width: 39%;
  }
  .product-detail-container{
    padding-left: 14px;
  }
  .product-title{
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  }
}
</style>
