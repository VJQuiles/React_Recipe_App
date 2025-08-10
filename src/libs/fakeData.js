export const categories = [
    { idCategory: "1", strCategory: "Seafood", strCategoryDescription: "Tasty ocean delights", strCategoryThumb: "https://via.placeholder.com/150" },
    { idCategory: "2", strCategory: "Chicken", strCategoryDescription: "Cluckin' good", strCategoryThumb: "https://via.placeholder.com/150" },
    { idCategory: "3", strCategory: "Dessert", strCategoryDescription: "Sweet treats", strCategoryThumb: "https://via.placeholder.com/150" },
];

export const mealsByCategory = {
    Seafood: [
        { idMeal: "101", strMeal: "Grilled Salmon", strMealThumb: "https://via.placeholder.com/100" },
        { idMeal: "102", strMeal: "Shrimp Tacos", strMealThumb: "https://via.placeholder.com/100" },
    ],
    Dessert: [
        { idMeal: "201", strMeal: "Chocolate Cake", strMealThumb: "https://via.placeholder.com/100" },
        { idMeal: "202", strMeal: "Ice Cream Sundae", strMealThumb: "https://via.placeholder.com/100" },
    ],
};

export const mealDetails = {
    101: {
        idMeal: "101",
        strMeal: "Grilled Salmon",
        strCategory: "Seafood",
        strInstructions: "Season and grill the salmon fillet...",
        strMealThumb: "https://via.placeholder.com/300",
        strIngredient1: "Salmon",
        strMeasure1: "200g",
        strIngredient2: "Lemon",
        strMeasure2: "1 slice",

    },
    102: {
        idMeal: "102",
        strMeal: "Shrimp Tacos",
        strCategory: "Seafood",
        strInstructions: "Prepare tacos with shrimp and toppings...",
        strMealThumb: "https://via.placeholder.com/300",
        strIngredient1: "Shrimp",
        strMeasure1: "200g",
        strIngredient2: "Tortillas",
        strMeasure2: "2",
        // ...
    },
};
