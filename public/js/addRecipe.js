const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#recipeTitle').value.trim();
    const description = document.querySelector('#recipeDescription').value.trim();
    const ingredients = document.querySelector('#recipeIngredients').value.trim();
    const instructions = document.querySelector('#recipeDirections').value.trim();
    const link_to_recipe = document.querySelector('#recipeLink').value.trim();
    const link_to_image = document.querySelector('#recipeImageLink').value.trim();
  
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
        const data = await response.json();
        if (data.errors.length > 0) {
          alert(data.errors[0].message);
        } else {
          alert('Failed to create recipe');
        }
      }
    }
};
    
  document
    .querySelector('.newRecipeForm')
    .addEventListener('submit', newFormHandler);
  
 