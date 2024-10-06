import 'regenerator-runtime';
import '../styles/main.css';
import data from '../public/data/DATA.json';

const toggleMenu = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('menu');
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.style.display = !isExpanded ? 'block' : 'none';
};

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

const displayRestaurants = () => {
    const restaurantList = document.getElementById('restaurant-list');

    data.restaurants.forEach((restaurant) => {
        const restaurantItem = `
      <article class="restaurant-item">
        <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image" />
        <div class="rating">
          <i class="fa fa-star"></i> ${restaurant.rating} 
        </div>
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <p>City: ${restaurant.city}</p>
        </div>
      </article>
    `;
        restaurantList.innerHTML += restaurantItem;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    displayRestaurants();
});
