const CONFIG = {
    BASE_URL: 'https://restaurant-api.dicoding.dev/',          // URL utama untuk API restoran
    BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/', // URL untuk gambar restoran ukuran sedang
    DEFAULT_LANGUAGE: 'en-us',                                  // Bahasa default aplikasi, jika diperlukan
    CACHE_NAME: 'MadangYuk-V1',                                 // Nama cache, jika menggunakan caching untuk offline
    DATABASE_NAME: 'madangyuk-database',                        // Nama database IndexedDB
    DATABASE_VERSION: 1,                                        // Versi database
    OBJECT_STORE_NAME: 'favorites',                             // Nama object store untuk menyimpan data favorit
};

export default CONFIG;
