import './homePage.css';

export function renderHomePage(container: HTMLElement) {
  const homePageContainer = document.createElement('div');
  homePageContainer.classList.add('homepage-container');

  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  heroSection.innerHTML = `
    <div class="hero-content">
      <h1>Find Your Dream Job Today</h1>
      <p>The easiest way to find your next career opportunity. Search through thousands of jobs and find the one that's right for you.</p>
      <div class="hero-search">
        <input type="text" placeholder="Job title, keywords, or company">
        <button class="search-btn">Search</button>
      </div>
    </div>
  `;

  homePageContainer.appendChild(heroSection);
  container.appendChild(homePageContainer);
} 