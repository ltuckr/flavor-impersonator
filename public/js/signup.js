const signupFormHandler = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      const data = await response.json();
      if (data.errors.length > 0) {
        alert(data.errors[0].message);
      } else {
        alert('Failed to signup');
      }
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);