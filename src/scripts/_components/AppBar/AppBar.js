import './AppBar.scss';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <nav class="nav">
    <div class="nav__icon-text">
      <i class="fas fa-utensils"></i>
      <span>Madang Yuk</span>
    </div>
    <button aria-label="hamburger-button" id="hamburger" class="nav-hamburger__button">☰</button>
    <ul class="nav__list">
      <li><a href="#/" class="nav__link">Home</a></li>
      <li><a href="#/favorite-restaurants" class="nav__link">Favorite</a></li>
      <li><a href="https://github.com/prabusemar" class="nav__link" target="_blank">About Us</a></li>
    </ul>
  </nav>
`;
  }
}

customElements.define('app-bar', AppBar);
