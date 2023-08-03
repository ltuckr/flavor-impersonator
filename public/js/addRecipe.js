const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipeTitle').value.trim();
    const description = document.querySelector('#recipeDescription').value.trim();
    const ingredients = document.querySelector('#recipeIngredients').value.trim();
    const instructions = document.querySelector('#recipeDirections').value.trim();
    const link_to_recipe = document.querySelector('#recipeLink').value.trim();
    const link_to_image = document.querySelector('#recipeImageLink').value.trim();
    console.log("name is ", name);       
    console.log("link is ", link_to_recipe);       
    console.log("pic is ", link_to_image);       
  
    if (name && description && ingredients && instructions) {
      const response = await fetch(`/api/recipes`, {
        method: 'POST',
        body: JSON.stringify({ name, description, ingredients, instructions, link_to_recipe, link_to_image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create recipe');
      }
    }
};
    
  document
    .querySelector('.newRecipeForm')
    .addEventListener('submit', newFormHandler);
  
 