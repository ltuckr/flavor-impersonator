const searchFormHandler = async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#search-input').value.trim();
    //if any search criteria is entered, redirect to select recipes and pass criteria
    if (searchInput) {
        document.location.replace(`/recipes?input=${searchInput}`);
    }
};
  
document
    .querySelector('.search-form')
    .addEventListener('submit', searchFormHandler);
