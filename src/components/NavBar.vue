<template>
  <nav>
    <router-link to="/" class="logo">
      <div class="logo-title">Food<span>Hub</span></div>
    </router-link>
    <router-link to="/cart" class="cart-btn toggle-mobile-view">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span class="cart-item-quantity">{{ allCartProducts.length }}</span>
    </router-link>
    <span class="material-symbols-outlined menu-toggler" @click="menuToggle">{{
      openedMenu ? "close" : "menu"
    }}</span>

    <ul class="menu" v-bind:class="{ 'show-menu': openedMenu }">
      <li class="menu-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/categories">Categories</router-link>
      </li>
      <!-- <li class="menu-item"><router-link to="/">Recipies</router-link></li> -->
    </ul>
    <router-link to="/cart" class="cart-btn toggle-desktop-view">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span class="cart-item-quantity">{{ allCartProducts.length }}</span>
    </router-link>
  </nav>
  <div class="nav-height"></div>
</template>

<script>
import { mapGetters} from "vuex"
export default {
  name: "NavBar",
  data() {
    return {
      openedMenu: false,
      menuToggle: () => {
        this.openedMenu = !this.openedMenu;
      },
    };
  },
  computed: mapGetters(["allCartProducts"])
};
</script>

<style scoped>
.material-symbols-outlined {
  color: #fff;
}
/* @media only screen and (max-width: 450px) {
  a.router-link-active:nth-child(2) > span:nth-child(1) {
    margin-left: 80px;
    margin-top: 6px;
  }
} */
.nav-height{
  height: 65px;
}
</style>
