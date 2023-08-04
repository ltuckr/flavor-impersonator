const searchFormHandler = async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value.trim();
  
    if (searchInput) {
        document.location.replace(`/recipes?input=${searchInput}`);
    }
};
  
document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);
