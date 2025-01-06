import './Hero.scss';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="hero__content">
          <h1 class="hero__main-title">
            Temukan Restoran dan Kafe Terbaik di Dunia dengan MadangYuk
          </h1>
          <p class="hero__description">Cari restoran dan kafe terbaik di dunia dengan berbagai makanan khas dari setiap daerah.</p>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-app', Hero);
