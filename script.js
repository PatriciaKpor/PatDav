const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const contactStatus = document.getElementById('contactStatus');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const expanded = siteNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded);
  });
}

function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.name.value.trim();

  if (!name) {
    contactStatus.textContent = 'Please enter your name.';
    return;
  }

  contactStatus.textContent = `Thanks, ${name}! Your message has been noted.`;
  form.reset();
}
