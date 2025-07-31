document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('response-message').textContent = 'Thank you! Your message has been sent.';
  this.reset();
});
