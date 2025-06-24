export function createHeader() {
  const header = document.createElement('header');
  header.classList.add('site-header');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.innerHTML = '<a href="/">Jobifyr</a>';

  const nav = document.createElement('nav');
  nav.classList.add('main-nav');

  const navList = document.createElement('ul');
  const navItems = ['Jobs', 'About', 'Contact'];
  navItems.forEach(itemText => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="/#${itemText.toLowerCase()}">${itemText}</a>`;
    navList.appendChild(listItem);
  });
  nav.appendChild(navList);

  const ctaButtons = document.createElement('div');
  ctaButtons.classList.add('cta-buttons');
  ctaButtons.innerHTML = `
    <button class="login-btn">Login</button>
    <button class="signup-btn">Sign Up</button>
  `;
  nav.appendChild(ctaButtons);


  const mobileMenuToggle = document.createElement('button');
  mobileMenuToggle.classList.add('mobile-menu-toggle');
  mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
  mobileMenuToggle.setAttribute('aria-label', 'Toggle navigation');
  mobileMenuToggle.setAttribute('aria-expanded', 'false');

  mobileMenuToggle.addEventListener('click', () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('nav-active');
  });

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(mobileMenuToggle);

  return header;
} 