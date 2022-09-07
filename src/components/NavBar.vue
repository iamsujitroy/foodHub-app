<template>
  <nav>
    <router-link to="/" class="logo">
      <div class="logo-title">Food<span>Hub</span></div>
    </router-link>
    <router-link to="/cart" class="cart-btn toggle-mobile-view">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span class="cart-item-quantity">{{ allCartProducts }}</span>
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
      <!-- <span class="cart-item-quantity">{{ allCartProducts.map(item => item.qty) }}</span> -->
      <span class="cart-item-quantity">{{ totalCartQty }}</span>
      <!-- <span class="cart-item-quantity">{{ cartItemQuantity }}</span> -->
    </router-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      allCartProducts: "allCartProducts",
      totalCartQty: "totalCartQty",
    }),
  },
};
</script>

<style scoped>
.material-symbols-outlined {
  color: #fff;
}
nav {
  width: 100%;
  height: 65px;
  padding: 0 70px;
  background-color: #26a226;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0 3px 5px #00000024;
}

.logo {
  display: flex;
  text-decoration: none;
  color: white;
  user-select: none;
}

.logo-title {
  font-family: "DynaPuff", cursive;
  font-size: 1.5rem;
}

.logo-title span {
  color: black;
  font-weight: 700;
  box-shadow: 0 0 10px #fff;
}

.menu-toggler {
  display: none;
  user-select: none;
}

.cart-btn {
  position: relative;
}

.cart-item-quantity {
  font-family: "Open Sans", sans-serif;
  position: absolute;
  top: -6px;
  right: -11px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  background: red;
  border-radius: 50%;
  padding: 0 3px;
}

.menu {
  display: flex;
  list-style: none;
}

.menu-item {
  margin-left: 20px;
}

.menu-item a {
  text-decoration: none;
  color: white;
}

.nav-button {
  padding: 6.5px 24px;
  border: none;
  border-radius: 6.5px;
  color: #020251;
  background: lightblue;
  font-size: 16px;
}

.toggle-mobile-view {
  display: none;
}

.toggle-desktop-view {
  display: block;
}

@media only screen and (max-width: 400px) {
  nav {
    padding: 0 22px;
  }

  .menu {
    position: absolute;
    top: -145px;
    left: 0;
    background-color: #e2f9e2e6;
    width: 100%;
    flex-direction: column;
    align-items: center;
    transition-property: top;
    transition-duration: 500ms;
  }

  .show-menu {
    top: 65px;
    padding: 15px 0;
  }

  .menu-item {
    padding: 12px 0;
    margin: 0;
  }

  .menu-item a {
    color: #020251;
  }

  .nav-button {
    display: none;
  }

  .menu-toggler {
    display: block;
  }

  .toggle-mobile-view {
    display: block;
  }

  .toggle-desktop-view {
    display: none;
  }
}
/* @media only screen and (max-width: 450px) {
  a.router-link-active:nth-child(2) > span:nth-child(1) {
    margin-left: 80px;
    margin-top: 6px;
  }
} */
</style>
