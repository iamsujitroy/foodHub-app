<template>
  <div class="product-container">
    <img :src="imageUrl" alt="product image here" class="product-image" />
    <div class="product-detail-container">
      <h2 class="product-title">{{ recipeName }}</h2>
      <p>
        Quantity:
        <input
          type="number"
          min="0"
          max="999"
          v-model="productQty"
          @change="updateProductQty"
          @blur="emptyProductQty"
        />
      </p>
      <p>
        Price: <b>₹{{ productQty * 200 }}</b>
      </p>
    </div>
    <span class="material-symbols-outlined" @click="removeFromCart">
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
    qty: Number,
  },
  data() {
    return {
      productQty: this.qty,
    };
  },
  methods: {
    removeFromCart: function () {
      const index = this.allCartProducts.findIndex((object) => {
        return object.mealName == this.recipeName;
      });
      this.allCartProducts.splice(index, 1);
      console.log(this.allCartProducts)
    },
    updateProductQty: function () {
      const index = this.allCartProducts.findIndex((object) => {
        return object.mealName == this.recipeName;
      });
      this.allCartProducts[index].qty = this.productQty;
    },
    emptyProductQty: function () {
      if (this.qty == "") {
        this.productQty = 0;
        console.log("your product input field is empty");
        this.updateProductQty();
      } else if (this.qty > 999) {
        this.productQty = 999;
      }
    },
  },
  computed: { ...mapGetters({ allCartProducts: "allCartProducts" }) },
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
}

.product-detail-container {
  width: 78%;
  padding-left: 25px;
}

.product-detail-container b {
  color: rgb(0, 102, 0);
}
.product-detail-container p {
  height: 25px;
}

.product-container > span.material-symbols-outlined {
  color: red;
  cursor: pointer;
}

input[type="number"] {
  -moz-appearance: textfield;
  border: 1px solid #26a226;
  width: 36px;
  text-align: center;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}
input[type="number"]:focus {
  font-weight: 700;
  outline: none;
  border: 2px solid green;
  color: green;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

@media only screen and (max-width: 400px) {
  .product-container img {
    width: 39%;
  }

  .product-detail-container {
    padding-left: 14px;
  }

  .product-title {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  }
}
</style>
