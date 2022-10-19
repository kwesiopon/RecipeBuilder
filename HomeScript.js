

"use strict";

/* Work in Progress */

var recipeOne = document.getElementById("recipeOne");

recipeOne.addEventListener("click", popUpAlertRecipeInfo);

function popUpAlertRecipeInfo() {
  window.alert("Recipe Info for Recipe One");
}


var recipeTwo = document.getElementById("recipeTwo");

recipeTwo.addEventListener("click", newWindowRecipeInfo);

function newWindowRecipeInfo() {
  window.open("RecipeInfoPage.html");
}
