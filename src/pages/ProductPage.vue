<template>
  <div class="main-container">
    <div class="left-conatiner">
      <img
        src="https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg"
        alt="product name"
      />
    </div>
    <div class="right-container">
      <h1 class="product-name">Product Name</h1>
      <div class="product-price">Price: <span>200</span></div>
      <button class="addToCart-btn">Add to Cart</button>
      <div class="description-conatiner">
        <p class="description">
          Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick
          spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and
          garlic in a small saucepan and cover. Bring to a boil over medium
          heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile,
          stir together the corn starch and 2 tablespoons of water in a separate
          dish until smooth. Once sauce is boiling, add mixture to the saucepan
          and stir to combine. Cook until the sauce starts to thicken then
          remove from heat.\r\nPlace the chicken breasts in the prepared pan.
          Pour one cup of the sauce over top of chicken. Place chicken in oven
          and bake 35 minutes or until cooked through. Remove from oven and
          shred chicken in the dish using two forks.\r\n*Meanwhile, steam or
          cook the vegetables according to package directions.\r\nAdd the cooked
          vegetables and rice to the casserole dish with the chicken. Add most
          of the remaining sauce, reserving a bit to drizzle over the top when
          serving. Gently toss everything together in the casserole dish until
          combined. Return to oven and cook 15 minutes. Remove from oven and let
          stand 5 minutes before serving. Drizzle each serving with remaining
          sauce. Enjoy!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   Product Details
      mealDetails: {
        idMeal: "52775",
        strMeal: "Vegan Lasagna",
        strDrinkAlternate: null,
        strCategory: "Vegan",
        strArea: "Italian",
        strInstructions:
          "1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
        strTags: "Vegan,Pasta",
        strYoutube: "https://www.youtube.com/watch?v=VU8cXvlGbvc",
        strIngredient1: "green red lentils",
        strIngredient2: "carrot",
        strIngredient3: "onion",
        strIngredient4: "zucchini",
        strIngredient5: "coriander",
        strIngredient6: "spinach",
        strIngredient7: "lasagne sheets",
        strIngredient8: "vegan butter",
        strIngredient9: "flour",
        strIngredient10: "soya milk",
        strIngredient11: "mustard",
        strIngredient12: "vinegar",
        strIngredient13: "",
        strIngredient14: "",
        strIngredient15: "",
        strIngredient16: null,
        strIngredient17: null,
        strIngredient18: null,
        strIngredient19: null,
        strIngredient20: null,
        strMeasure1: "1 cups",
        strMeasure2: "1",
        strMeasure3: "1",
        strMeasure4: "1 small",
        strMeasure5: "sprinking",
        strMeasure6: "150g",
        strMeasure7: "10",
        strMeasure8: "35g",
        strMeasure9: "4 tablespoons",
        strMeasure10: "300ml",
        strMeasure11: "1.5 teaspoons",
        strMeasure12: "1 teaspoon",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: null,
        strMeasure17: null,
        strMeasure18: null,
        strMeasure19: null,
        strMeasure20: null,
        strSource: null,
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
      },
    };
  },
};
</script>

<style scoped>
@import "../design/custom/pages/product_page.css";
</style>
