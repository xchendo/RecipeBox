import $ from 'jquery';

module.exports = {
  setRecipes: function(recipes){
    if($.isArray(recipes)){
      // Arrays cannot be stored in local storage, so JSON.stringy converts to a string
      localStorage.setItem('_recipes',JSON.stringify(recipes));
      return recipes;
    }
  },
  getRecipes: function(){
    var stringRecipes = localStorage.getItem('_recipes');
    var recipes = [];

    // JSON parse converts string in local storage back to original form
    try{
      recipes = JSON.parse(stringRecipes);
    } catch(e){

    }
    // If valid data, an array will be set to recipes, and returned
    if($.isArray(recipes)){
      return recipes;
    } else {
      return [];
    }
  }
}
