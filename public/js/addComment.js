
const newFormHandler = async (event) => {
  event.preventDefault();

  const recipe_id = document.querySelector('#recipe-id').value;
  const content = document.querySelector('#comment-content').value.trim();
  
  if (content) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, recipe_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/recipe/${recipe_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);

  