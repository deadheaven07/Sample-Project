// Get the form element from the DOM
const contactForm = document.getElementById('contact-form');

// Add an event listener for form submission
contactForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // TODO: Add form validation here

  // Send the form data to a server using an AJAX request
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://example.com/contact', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({ name, email, message }));

  // Reset the form inputs
  contactForm.reset();

  // Show a success message to the user
  alert('Your message has been sent!');
});
