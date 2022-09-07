export default {
  state: {
    products: [
      {
        mealName: "Apam balik",
        imageUrl:
          "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
        qty: 20,
      },
      {
        mealName: "Grilled Mac and Cheese Sandwich",
        imageUrl:
          "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
        qty: 55,
      },
      {
        mealName: "Fettucine alfredo",
        imageUrl:
          "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
        qty: 1,
      },
      {
        mealName: "Lasagna Sandwiches",
        imageUrl:
          "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
        qty: 1,
      },
    ],
  },

  getters: {
    allCartProducts: (state) => state.products,
    totalCartQty: (state) => {
      let totalCartProductQty = state.products.map(
        (item) => item.qty);
      return totalCartProductQty.reduce((a, b) => a + b, 0);
    },
  },
  mutations: {},
  actions: {},
};
