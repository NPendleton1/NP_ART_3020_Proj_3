document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('trymenu-toggle');

    menuToggle.addEventListener('change', function() {
      if (menuToggle.checked) {
        menuToggle.setAttribute('aria-expanded', 'true');
      } else {
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.tryhamburger');
    const menuToggle = document.getElementById('trymenu-toggle');
  
    hamburger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.checked = !menuToggle.checked;
        menuToggle.setAttribute('aria-expanded', menuToggle.checked ? 'true' : 'false');
      }
    });
  });

