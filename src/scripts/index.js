import 'regenerator-runtime'; // Untuk mendukung async/await di Babel
import CONFIG from './config';
import '../styles/main.css';
import { openDB } from 'idb';

// Inisialisasi database dengan idb
const dbPromise = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(CONFIG.OBJECT_STORE_NAME)) {
      db.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
});

// Fungsi Menambah Restoran ke Favorit
const addFavorite = async (restaurant) => {
  const db = await dbPromise;
  await db.put(CONFIG.OBJECT_STORE_NAME, restaurant);
};

// Fungsi Menghapus Restoran dari Favorit
const removeFavorite = async (restaurantId) => {
  const db = await dbPromise;
  await db.delete(CONFIG.OBJECT_STORE_NAME, restaurantId);
};

// Fungsi Mendapatkan Semua Restoran Favorit
const getAllFavorites = async () => {
  const db = await dbPromise;
  return db.getAll(CONFIG.OBJECT_STORE_NAME);
};

// Fungsi Mengecek Apakah Restoran Sudah Difavoritkan
const isFavorite = async (restaurantId) => {
  const db = await dbPromise;
  const favorite = await db.get(CONFIG.OBJECT_STORE_NAME, restaurantId);
  return Boolean(favorite);
};

// Fungsi untuk Menampilkan Daftar Restoran dari API
const displayRestaurants = async () => {
  const restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = '';

  try {
    const response = await fetch(`${CONFIG.BASE_URL}list`);
    const data = await response.json();

    data.restaurants.forEach((restaurant) => {
      const restaurantItem = `
        <article class="restaurant-item">
          <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
               alt="${restaurant.name}" 
               class="restaurant-image" />
          <div class="rating">
            <i class="fa fa-star"></i> ${restaurant.rating}
          </div>
          <div class="restaurant-info">
            <h3>${restaurant.name}</h3>
            <p>City: ${restaurant.city}</p>
            <button class="view-details-button" data-id="${restaurant.id}">View Details</button>
          </div>
        </article>
      `;
      restaurantList.innerHTML += restaurantItem;
    });

    document.querySelectorAll('.view-details-button').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const restaurantId = button.getAttribute('data-id');
        showRestaurantDetail(restaurantId);
      });
    });

  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
};

// Fungsi untuk Menampilkan Detail Restoran
const showRestaurantDetail = async (restaurantId) => {
  const restaurantList = document.getElementById('restaurant-list');
  const restaurantDetail = document.getElementById('restaurant-detail');
  const favoriteList = document.getElementById('favorite-list');

  try {
    const response = await fetch(`${CONFIG.BASE_URL}detail/${restaurantId}`);
    const data = await response.json();
    const restaurant = data.restaurant;

    // Cek Status Favorit dan Atur Teks Tombol Favorit
    const favoriteStatus = await isFavorite(restaurantId);
    const favoriteButtonText = favoriteStatus ? 'Remove from Favorites' : 'Add to Favorites';

    restaurantDetail.innerHTML = `
      <div class="restaurant-detail-card">
        <h2>${restaurant.name}</h2>
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
             alt="${restaurant.name}" 
             class="restaurant-image" />
        <p><strong>Address:</strong> ${restaurant.address}</p>
        <p><strong>City:</strong> ${restaurant.city}</p>
        <p><strong>Description:</strong> ${restaurant.description}</p>
        <h3>Food Menu</h3>
        <ul>${restaurant.menus.foods.map(food => `<li>${food.name}</li>`).join('')}</ul>
        <h3>Drink Menu</h3>
        <ul>${restaurant.menus.drinks.map(drink => `<li>${drink.name}</li>`).join('')}</ul>
        <h3>Customer Reviews</h3>
        <ul>${restaurant.customerReviews.map(review => `<li><strong>${review.name}</strong>: ${review.review}</li>`).join('')}</ul>
        <button id="favorite-button" class="favorite-button">${favoriteButtonText}</button>
        <button id="back-button" class="back-button">Back to List</button>
      </div>
    `;

    restaurantList.style.display = 'none';
    favoriteList.style.display = 'none';
    restaurantDetail.style.display = 'flex';

    // Event Listener untuk Tombol Favorit
    const favoriteButton = document.getElementById('favorite-button');
    favoriteButton.addEventListener('click', () => toggleFavorite(restaurant));

    // Event Listener untuk Tombol Kembali
    document.getElementById('back-button').addEventListener('click', () => {
      restaurantList.style.display = 'grid';
      restaurantDetail.style.display = 'none';
      favoriteList.style.display = 'none';
    });

  } catch (error) {
    console.error('Error fetching restaurant detail:', error);
  }
};

// Fungsi Toggle Favorite
const toggleFavorite = async (restaurant) => {
  const isFav = await isFavorite(restaurant.id);

  if (isFav) {
    await removeFavorite(restaurant.id);
    document.getElementById('favorite-button').textContent = 'Add to Favorites';
  } else {
    await addFavorite(restaurant);
    document.getElementById('favorite-button').textContent = 'Remove from Favorites';
  }
};

// Fungsi Menampilkan Daftar Favorit
const displayFavorites = async () => {
  const favoriteList = document.getElementById('favorite-restaurant-list');
  favoriteList.innerHTML = '';

  const favorites = await getAllFavorites();
  favorites.forEach(restaurant => {
    const favoriteItem = `
      <article class="restaurant-item">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" 
             alt="${restaurant.name}" 
             class="restaurant-image" />
        <div class="rating">
          <i class="fa fa-star"></i> ${restaurant.rating}
        </div>
        <div class="restaurant-info">
          <h3>${restaurant.name}</h3>
          <p>City: ${restaurant.city}</p>
          <button class="view-details-button" data-id="${restaurant.id}">View Details</button>
        </div>
      </article>
    `;
    favoriteList.innerHTML += favoriteItem;
  });

  document.querySelectorAll('.view-details-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const restaurantId = button.getAttribute('data-id');
      showRestaurantDetail(restaurantId);
    });
  });
};

// Event Listener untuk Navigasi
document.getElementById('home-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('restaurant-list').style.display = 'grid';
  document.getElementById('favorite-list').style.display = 'none';
  document.getElementById('restaurant-detail').style.display = 'none';
  displayRestaurants();
});

document.getElementById('favorite-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('restaurant-list').style.display = 'none';
  document.getElementById('favorite-list').style.display = 'block';
  document.getElementById('restaurant-detail').style.display = 'none';
  displayFavorites();
});

// Saat Konten Dimuat
document.addEventListener('DOMContentLoaded', () => {
  displayRestaurants();

  // Daftarkan Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker terdaftar dengan scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Pendaftaran Service Worker gagal:', error);
      });
  }
});
