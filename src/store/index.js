import { createStore } from 'vuex'
import cartProducts from './modules/products.js'

export default createStore({
  modules: {
    cartProducts,
  }
})
