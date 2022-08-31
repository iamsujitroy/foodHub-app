<template>
  <NavBar />
  <div class="cart-container">
    <h1 v-if="allCartProducts.length <= 0">Your Cart is Empty</h1>
    <div v-else>
      <div class="cart-product-container">
        <div class="product-section">
          <CartProduct
            v-for="productData in allCartProducts"
            :recipeName="productData.mealName"
            :imageUrl="productData.imageUrl"
            :key="productData.recipeName"
          />
        </div>
        <div class="bill-section">
          <div class="bill-container">
            <h4 class="bill-title">Order Summary</h4>
            <p class="bill-table">
              <span>Total Product</span
              ><span>{{ allCartProducts.length }} Qty</span>
            </p>
            <p class="bill-table">
              <span>Product Total</span
              ><span>₹{{ allCartProducts.length * 200 }}</span>
            </p>
            <p class="bill-table"><span>Delivery</span><span>Free</span></p>
            <p class="bill-table">
              <span>Total</span><span>₹{{ allCartProducts.length * 200 }}</span>
            </p>
            <button class="checkout-btn">
              Checkout
              <span class="material-symbols-outlined"> trending_flat </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import components here
import NavBar from "../components/NavBar.vue";
import CartProduct from "../components/CartProduct.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
    CartProduct,
  },
  data() {
    return {
      // cartData: cartData,
      dataLog: function () {
        console.log(this.allCartProducts);
      },
    };
  },
  computed: mapGetters(["allCartProducts"]),
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5em;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -34%);
  width: 90%;
}

.cart-container {
  margin: 0 20px;
}
.cart-product-container {
  max-width: 1140px;
  height: 80vh;
  margin: auto;

  margin-top: 30px;
  background-color: #e2f9e2e6;
  display: flex;
  box-shadow: 3px 3px 20px #00000037;
}
.product-section {
  width: 60%;
  margin: 60px auto;
  overflow-y: auto;
}

.bill-section {
  width: 40%;
  margin: 60px auto;
}
.bill-container {
  background-color: #80808071;
  width: 80%;
  margin: auto;
  padding: 25px;
  box-sizing: border-box;
}
.bill-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.bill-table {
  display: flex;
}
.bill-table span {
  width: 50%;
  background: white;
  border: 2px solid #80808071;
  padding: 5px;
}
.bill-table span:nth-child(1) {
  color: green;
  padding-left: 12px;
}
.bill-table span:nth-child(2) {
  font-weight: 700;
  text-align: end;
  padding-right: 12px;
}
.checkout-btn {
  width: 100%;
  padding: 8px;
  border: 2px solid #80808071;
  margin-top: 11px;
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
}
@media only screen and (max-width: 450px) {
  .product-section {
    width: 100%;
    /* margin: 20px auto; */
    margin: 20px auto 7px auto;
    height: 243px;
  }
  .product-container {
    width: 90%;
  }
  .bill-section[data-v-1814daf3] {
    width: 100%;
    margin: 20px auto;
  }
  .cart-product-container[data-v-1814daf3] {
    flex-direction: column;
  }
  .product-container img {
    width: 39%;
  }
  .product-section {
    margin: 20px auto 7px auto;
  }
  .product-title {
    font-size: 1.1rem;
  }
  .bill-container {
    width: 92%;
    padding: 13px;
  }
  @media only screen and (max-width: 332px) {
    .bill-table span:first-child {
      width: 70%;
      font-size: 0.9em;
    }
  }
}
</style>
