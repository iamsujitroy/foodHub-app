export default {
    state: {
        products: [
            { mealName: "Chilli prawn linguine", imageUrl: "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg" },
            { mealName: "Grilled Mac and Cheese Sandwich", imageUrl: "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg" },
            { mealName: "Fettucine alfredo", imageUrl: "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg" },
            { mealName: "Lasagna Sandwiches", imageUrl: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg" },
        ]
    },

    getters: {
        allCartProducts: state => state.products,
    },
    mutations: {

    },
    actions: {

    },
}