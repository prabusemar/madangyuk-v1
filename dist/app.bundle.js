/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a74cc4978b71d277b9b.jpg";

/***/ }),

/***/ 240:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(452);
;// ./src/scripts/config.js
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  // URL utama untuk API restoran
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  // URL untuk gambar restoran ukuran sedang
  DEFAULT_LANGUAGE: 'en-us',
  // Bahasa default aplikasi, jika diperlukan
  CACHE_NAME: 'MadangYuk-V1',
  // Nama cache, jika menggunakan caching untuk offline
  DATABASE_NAME: 'madangyuk-database',
  // Nama database IndexedDB
  DATABASE_VERSION: 1,
  // Versi database
  OBJECT_STORE_NAME: 'favorites' // Nama object store untuk menyimpan data favorit
};
/* harmony default export */ const config = (CONFIG);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__(249);
;// ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const styles_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/idb/build/index.js
var build = __webpack_require__(602);
;// ./src/scripts/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
 // Untuk mendukung async/await di Babel




// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').then(function (registration) {
      console.log('Service Worker berhasil didaftarkan:', registration);
    })["catch"](function (error) {
      console.log('Service Worker gagal didaftarkan:', error);
    });
  });
}

// Inisialisasi database dengan idb
var dbPromise = (0,build/* openDB */.P2)(config.DATABASE_NAME, config.DATABASE_VERSION, {
  upgrade: function upgrade(db) {
    if (!db.objectStoreNames.contains(config.OBJECT_STORE_NAME)) {
      db.createObjectStore(config.OBJECT_STORE_NAME, {
        keyPath: 'id'
      });
    }
    if (!db.objectStoreNames.contains('restaurant-detail')) {
      db.createObjectStore('restaurant-detail', {
        keyPath: 'id'
      });
    }
  }
});

// Fungsi Menambah Restoran ke Favorit
var addFavorite = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(restaurant) {
    var db;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return dbPromise;
        case 2:
          db = _context.sent;
          _context.next = 5;
          return db.put(config.OBJECT_STORE_NAME, restaurant);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function addFavorite(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Fungsi Menghapus Restoran dari Favorit
var removeFavorite = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(restaurantId) {
    var db;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return dbPromise;
        case 2:
          db = _context2.sent;
          _context2.next = 5;
          return db["delete"](config.OBJECT_STORE_NAME, restaurantId);
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function removeFavorite(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

// Fungsi Mendapatkan Semua Restoran Favorit
var getAllFavorites = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var db;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return dbPromise;
        case 2:
          db = _context3.sent;
          return _context3.abrupt("return", db.getAll(config.OBJECT_STORE_NAME));
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getAllFavorites() {
    return _ref3.apply(this, arguments);
  };
}();

// Fungsi Mengecek Apakah Restoran Sudah Difavoritkan
var isFavorite = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(restaurantId) {
    var db, favorite;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return dbPromise;
        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return db.get(config.OBJECT_STORE_NAME, restaurantId);
        case 5:
          favorite = _context4.sent;
          return _context4.abrupt("return", Boolean(favorite));
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function isFavorite(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

// Fungsi untuk Menampilkan Daftar Restoran dari API
var displayRestaurants = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var restaurantList, response, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          restaurantList = document.getElementById('restaurant-list');
          restaurantList.innerHTML = '';
          _context5.prev = 2;
          _context5.next = 5;
          return fetch("".concat(config.BASE_URL, "list"));
        case 5:
          response = _context5.sent;
          _context5.next = 8;
          return response.json();
        case 8:
          data = _context5.sent;
          data.restaurants.forEach(function (restaurant) {
            var restaurantItem = "\n        <article class=\"restaurant-item\">\n          <img src=\"".concat(config.BASE_IMAGE_URL).concat(restaurant.pictureId, "\" \n               alt=\"").concat(restaurant.name, "\" \n               class=\"restaurant-image\" />\n          <div class=\"rating\">\n            <i class=\"fa fa-star\"></i> ").concat(restaurant.rating, "\n          </div>\n          <div class=\"restaurant-info\">\n            <h3>").concat(restaurant.name, "</h3>\n            <p>City: ").concat(restaurant.city, "</p>\n            <button class=\"view-details-button\" data-id=\"").concat(restaurant.id, "\">View Details</button>\n          </div>\n        </article>\n      ");
            restaurantList.innerHTML += restaurantItem;
          });
          document.querySelectorAll('.view-details-button').forEach(function (button) {
            button.addEventListener('click', function (event) {
              event.preventDefault();
              var restaurantId = button.getAttribute('data-id');
              showRestaurantDetail(restaurantId);
            });
          });
          _context5.next = 16;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](2);
          console.error('Error fetching restaurant data:', _context5.t0);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 13]]);
  }));
  return function displayRestaurants() {
    return _ref5.apply(this, arguments);
  };
}();

// Fungsi untuk Menampilkan Detail Restoran
var showRestaurantDetail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(restaurantId) {
    var restaurantList, restaurantDetail, favoriteList, restaurant, db, cachedRestaurant, response, data, favoriteStatus, favoriteButtonText, favoriteButton;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          restaurantList = document.getElementById('restaurant-list');
          restaurantDetail = document.getElementById('restaurant-detail');
          favoriteList = document.getElementById('favorite-list');
          _context6.prev = 3;
          _context6.next = 6;
          return dbPromise;
        case 6:
          db = _context6.sent;
          _context6.next = 9;
          return db.get('restaurant-detail', restaurantId);
        case 9:
          cachedRestaurant = _context6.sent;
          if (!cachedRestaurant) {
            _context6.next = 15;
            break;
          }
          restaurant = cachedRestaurant;
          console.log('Mengambil data dari cache');
          _context6.next = 32;
          break;
        case 15:
          _context6.prev = 15;
          _context6.next = 18;
          return fetch("".concat(config.BASE_URL, "detail/").concat(restaurantId));
        case 18:
          response = _context6.sent;
          _context6.next = 21;
          return response.json();
        case 21:
          data = _context6.sent;
          restaurant = data.restaurant;
          // Simpan ke IndexedDB untuk penggunaan offline
          _context6.next = 25;
          return db.put('restaurant-detail', restaurant);
        case 25:
          console.log('Menyimpan data ke cache');
          _context6.next = 32;
          break;
        case 28:
          _context6.prev = 28;
          _context6.t0 = _context6["catch"](15);
          console.error('Gagal mengambil data dari API:', _context6.t0);
          return _context6.abrupt("return");
        case 32:
          _context6.next = 34;
          return isFavorite(restaurantId);
        case 34:
          favoriteStatus = _context6.sent;
          favoriteButtonText = favoriteStatus ? 'Remove from Favorites' : 'Add to Favorites';
          restaurantDetail.innerHTML = "\n      <div class=\"restaurant-detail-card\">\n        <h2>".concat(restaurant.name, "</h2>\n        <img src=\"").concat(config.BASE_IMAGE_URL).concat(restaurant.pictureId, "\" \n             alt=\"").concat(restaurant.name, "\" \n             class=\"restaurant-image\" />\n        <p><strong>Address:</strong> ").concat(restaurant.address, "</p>\n        <p><strong>City:</strong> ").concat(restaurant.city, "</p>\n        <p><strong>Description:</strong> ").concat(restaurant.description, "</p>\n        <h3>Food Menu</h3>\n        <ul>").concat(restaurant.menus.foods.map(function (food) {
            return "<li>".concat(food.name, "</li>");
          }).join(''), "</ul>\n        <h3>Drink Menu</h3>\n        <ul>").concat(restaurant.menus.drinks.map(function (drink) {
            return "<li>".concat(drink.name, "</li>");
          }).join(''), "</ul>\n        <h3>Customer Reviews</h3>\n        <ul>").concat(restaurant.customerReviews.map(function (review) {
            return "<li><strong>".concat(review.name, "</strong>: ").concat(review.review, "</li>");
          }).join(''), "</ul>\n        <button id=\"favorite-button\" class=\"favorite-button\">").concat(favoriteButtonText, "</button>\n        <button id=\"back-button\" class=\"back-button\">Back to List</button>\n      </div>\n    ");
          restaurantList.style.display = 'none';
          favoriteList.style.display = 'none';
          restaurantDetail.style.display = 'flex';

          // Event Listener untuk Tombol Favorit
          favoriteButton = document.getElementById('favorite-button');
          favoriteButton.addEventListener('click', function () {
            return toggleFavorite(restaurant);
          });

          // Event Listener untuk Tombol Kembali
          document.getElementById('back-button').addEventListener('click', function () {
            restaurantList.style.display = 'grid';
            restaurantDetail.style.display = 'none';
            favoriteList.style.display = 'none';
          });
          _context6.next = 49;
          break;
        case 45:
          _context6.prev = 45;
          _context6.t1 = _context6["catch"](3);
          console.error('Error menampilkan detail restoran:', _context6.t1);
          restaurantDetail.innerHTML = "\n      <div class=\"restaurant-detail-card\">\n        <p>Maaf, terjadi kesalahan saat memuat detail restoran. Silakan coba lagi nanti.</p>\n        <button id=\"back-button\" class=\"back-button\">Back to List</button>\n      </div>\n    ";
        case 49:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 45], [15, 28]]);
  }));
  return function showRestaurantDetail(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

// Fungsi Toggle Favorite
var toggleFavorite = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(restaurant) {
    var isFav;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return isFavorite(restaurant.id);
        case 2:
          isFav = _context7.sent;
          if (!isFav) {
            _context7.next = 9;
            break;
          }
          _context7.next = 6;
          return removeFavorite(restaurant.id);
        case 6:
          document.getElementById('favorite-button').textContent = 'Add to Favorites';
          _context7.next = 12;
          break;
        case 9:
          _context7.next = 11;
          return addFavorite(restaurant);
        case 11:
          document.getElementById('favorite-button').textContent = 'Remove from Favorites';
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function toggleFavorite(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

// Fungsi Menampilkan Daftar Favorit
var displayFavorites = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var favoriteList, favorites;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          favoriteList = document.getElementById('favorite-restaurant-list');
          favoriteList.innerHTML = '';
          _context8.next = 4;
          return getAllFavorites();
        case 4:
          favorites = _context8.sent;
          favorites.forEach(function (restaurant) {
            var favoriteItem = "\n      <article class=\"restaurant-item\">\n        <img src=\"".concat(config.BASE_IMAGE_URL).concat(restaurant.pictureId, "\" \n             alt=\"").concat(restaurant.name, "\" \n             class=\"restaurant-image\" />\n        <div class=\"rating\">\n          <i class=\"fa fa-star\"></i> ").concat(restaurant.rating, "\n        </div>\n        <div class=\"restaurant-info\">\n          <h3>").concat(restaurant.name, "</h3>\n          <p>City: ").concat(restaurant.city, "</p>\n          <button class=\"view-details-button\" data-id=\"").concat(restaurant.id, "\">View Details</button>\n        </div>\n      </article>\n    ");
            favoriteList.innerHTML += favoriteItem;
          });
          document.querySelectorAll('.view-details-button').forEach(function (button) {
            button.addEventListener('click', function (event) {
              event.preventDefault();
              var restaurantId = button.getAttribute('data-id');
              showRestaurantDetail(restaurantId);
            });
          });
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function displayFavorites() {
    return _ref8.apply(this, arguments);
  };
}();

// Event Listener untuk Navigasi
document.getElementById('home-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('restaurant-list').style.display = 'grid';
  document.getElementById('favorite-list').style.display = 'none';
  document.getElementById('restaurant-detail').style.display = 'none';
  displayRestaurants();
});
document.getElementById('favorite-link').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('restaurant-list').style.display = 'none';
  document.getElementById('favorite-list').style.display = 'block';
  document.getElementById('restaurant-detail').style.display = 'none';
  displayFavorites();
});

// Saat Konten Dimuat
document.addEventListener('DOMContentLoaded', function () {
  displayRestaurants();
});

/***/ }),

/***/ 249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(234), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Skip link for accessibility */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #333333;
  color: #fff;
  padding: 8px;
  z-index: 100;
  text-decoration: none;
}

/* Skip link will appear when focused */
.skip-link:focus {
  top: 0;
}

/* App Bar */
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FF6347;
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

/* Brand styling with icon */
.brand {
  display: flex;
  align-items: center;
}

.brand i {
  color: #fff;
  margin-right: 10px;
}

.brand h1 {
  font-size: 1.8rem;
  color: white;
}

/* Navigation links for desktop */
.nav-links {
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 1.5rem;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  display: inline-block;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 10px 15px;
  min-width: 44px;
  min-height: 44px;
  transition: color 0.3s ease;
}

.nav-links a i {
  margin-right: 5px;
}

.nav-links a:hover {
  color: #FAEBD7;
}

/* Hamburger menu */
#menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  min-width: 44px;
  min-height: 44px;
}

/* Mobile Menu Hidden by Default */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #FF6347;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding-top: 10px;
    z-index: 99;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.4s ease-in-out;
  }

  .nav-links a {
    color: #fff;
    font-size: 1.5rem;
    padding: 10px 15px;
    margin: 0.5rem;
    border-radius: 5px;
    min-width: 44px;
    min-height: 44px;
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  /* Add overlay behind mobile menu for focus */
  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 98;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  /* Show mobile menu and overlay */
  #menu-toggle[aria-expanded="true"] + .nav-links {
    display: flex;
    opacity: 1;
    transform: translateY(0);
  }

  #menu-toggle[aria-expanded="true"] + .nav-links + .menu-overlay {
    display: block;
    opacity: 1;
  }

  #menu-toggle {
    display: block;
  }
}

/* Reset menu display when resizing back to desktop */
@media (min-width: 769px) {
  .nav-links {
    display: flex !important;
    position: static;
    flex-direction: row;
    width: auto;
    background: none;
    box-shadow: none;
    opacity: 1;
    transform: none;
  }

  #menu-toggle {
    display: none;
  }

  .menu-overlay {
    display: none;
  }
}

/* Hero Section with Overlay */
.hero {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  width: 100%;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  z-index: 2;
}

.hero-content h2 {
  font-size: 2.5rem;
  margin: 0;
}

.hero-content p {
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
}

/* Main content and background */
body {
  background-color: #FAEBD7;
  font-family: Arial, sans-serif;
}

/* Center and style for Restaurant List title */
.section-title {
  text-align: center;
  padding: 2rem 0;
  font-size: 2rem;
  color: #333333;
}

#restaurant-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

@media (max-width: 320px) {
  #restaurant-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
}

/* Effect for restaurant item hover */
.restaurant-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.restaurant-item:hover {
  transform: scale(1.05);
}

/* Rating Star Overlay */
.restaurant-item .rating {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #FFD700;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.rating i {
  margin-right: 5px;
}

.restaurant-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.restaurant-info {
  padding: 1rem;
}

.restaurant-info h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #333333;
}

.restaurant-info p {
  margin: 0.5rem 0;
  color: #333333;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background-color: #FF6347;
  color: white;
  font-size: 1rem;
  width: 100%;
}

/* Responsive styles */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    gap: 1rem;
  }
}

@media (min-width: 1200px) {
  .hero {
    height: 500px;
    background-size: cover;
  }

  .hero-content h2 {
    font-size: 3.5rem;
  }

  .hero-content p {
    font-size: 1.5rem;
  }
}
/* Kontainer untuk Detail Restoran */
#restaurant-detail {
  display: none;
  justify-content: center; /* Pusatkan card detail */
  align-items: center;
  padding: 2rem;
  width: 100%;
}

/* Card Detail Restoran */
/* Card Detail Restoran */
.restaurant-detail-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  text-align: left; /* Pastikan konten sejajar ke kiri */
}

.restaurant-detail-card h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333333;
  text-align: center; /* Hanya judul yang di center */
}

.restaurant-detail-card img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 1rem 0;
}

.restaurant-detail-card p,
.restaurant-detail-card ul,
.restaurant-detail-card li {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333333;
}

.restaurant-detail-card ul {
  padding-left: 1.5rem;
  list-style-type: disc;
}

.favorite-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.favorite-button:hover {
  background-color: #e6c200;
}

.back-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #e6533d;
}

/* Styling untuk Tombol View Details */
.view-details-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.view-details-button:hover {
  background-color: #e6533d;
}
.favorite-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #FFD700;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.favorite-button:hover {
  background-color: #e6c200;
}


/* Styling khusus untuk Favorite List */
#favorite-restaurant-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  padding: 2rem;
}

#favorite-restaurant-list .restaurant-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 1rem); /* Lebar 1/3 dari kontainer, dengan gap antar item */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

#favorite-restaurant-list .restaurant-item:hover {
  transform: scale(1.05);
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA,gCAAgC;AAChC;EACE,kBAAkB;EAClB,UAAU;EACV,OAAO;EACP,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA,uCAAuC;AACvC;EACE,MAAM;AACR;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,MAAM;EACN,WAAW;EACX,YAAY;AACd;;AAEA,4BAA4B;AAC5B;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA,iCAAiC;AACjC;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;EACf,aAAa;EACb,eAAe;EACf,gBAAgB;AAClB;;AAEA,kCAAkC;AAClC;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,eAAe;IACf,SAAS;IACT,OAAO;IACP,WAAW;IACX,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;IACjB,WAAW;IACX,wCAAwC;IACxC,UAAU;IACV,4BAA4B;IAC5B,gCAAgC;EAClC;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,gCAAgC;IAChC,kBAAkB;EACpB;;EAEA,6CAA6C;EAC7C;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,UAAU;IACV,oCAAoC;EACtC;;EAEA,iCAAiC;EACjC;IACE,aAAa;IACb,UAAU;IACV,wBAAwB;EAC1B;;EAEA;IACE,cAAc;IACd,UAAU;EACZ;;EAEA;IACE,cAAc;EAChB;AACF;;AAEA,qDAAqD;AACrD;EACE;IACE,wBAAwB;IACxB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF;;AAEA,8BAA8B;AAC9B;EACE,yDAAgE;EAChE,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA,gCAAgC;AAChC;EACE,yBAAyB;EACzB,8BAA8B;AAChC;;AAEA,+CAA+C;AAC/C;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,WAAW;EACX,aAAa;AACf;;AAEA;EACE;IACE,2DAA2D;IAC3D,SAAS;EACX;AACF;;AAEA,qCAAqC;AACrC;EACE,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,gBAAgB;EAChB,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,wBAAwB;AACxB;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,oCAAoC;EACpC,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,WAAW;AACb;;AAEA,sBAAsB;AACtB;EACE;IACE,aAAa;IACb,SAAS;EACX;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;AACF;AACA,oCAAoC;AACpC;EACE,aAAa;EACb,uBAAuB,EAAE,yBAAyB;EAClD,mBAAmB;EACnB,aAAa;EACb,WAAW;AACb;;AAEA,yBAAyB;AACzB,yBAAyB;AACzB;EACE,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,gBAAgB,EAAE,oCAAoC;AACxD;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,kBAAkB,EAAE,+BAA+B;AACrD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,cAAc;AAChB;;AAEA;;;EAGE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA,sCAAsC;AACtC;EACE,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA,uCAAuC;AACvC;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,2BAA2B,EAAE,oDAAoD;EACjF,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Skip link for accessibility */\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #333333;\n  color: #fff;\n  padding: 8px;\n  z-index: 100;\n  text-decoration: none;\n}\n\n/* Skip link will appear when focused */\n.skip-link:focus {\n  top: 0;\n}\n\n/* App Bar */\n.app-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #FF6347;\n  color: white;\n  padding: 1rem 2rem;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n}\n\n/* Brand styling with icon */\n.brand {\n  display: flex;\n  align-items: center;\n}\n\n.brand i {\n  color: #fff;\n  margin-right: 10px;\n}\n\n.brand h1 {\n  font-size: 1.8rem;\n  color: white;\n}\n\n/* Navigation links for desktop */\n.nav-links {\n  display: flex;\n  list-style: none;\n  padding-left: 0;\n  gap: 1.5rem;\n}\n\n.nav-links li {\n  display: inline;\n}\n\n.nav-links a {\n  display: inline-block;\n  align-items: center;\n  color: white;\n  text-decoration: none;\n  font-size: 1.1rem;\n  padding: 10px 15px;\n  min-width: 44px;\n  min-height: 44px;\n  transition: color 0.3s ease;\n}\n\n.nav-links a i {\n  margin-right: 5px;\n}\n\n.nav-links a:hover {\n  color: #FAEBD7;\n}\n\n/* Hamburger menu */\n#menu-toggle {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n  display: none;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/* Mobile Menu Hidden by Default */\n@media (max-width: 768px) {\n  .nav-links {\n    display: none;\n    flex-direction: column;\n    background-color: #FF6347;\n    position: fixed;\n    top: 60px;\n    left: 0;\n    width: 100%;\n    text-align: center;\n    justify-content: center;\n    padding-top: 10px;\n    z-index: 99;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    opacity: 0;\n    transform: translateY(-10px);\n    transition: all 0.4s ease-in-out;\n  }\n\n  .nav-links a {\n    color: #fff;\n    font-size: 1.5rem;\n    padding: 10px 15px;\n    margin: 0.5rem;\n    border-radius: 5px;\n    min-width: 44px;\n    min-height: 44px;\n    transition: all 0.3s ease-in-out;\n    text-align: center;\n  }\n\n  /* Add overlay behind mobile menu for focus */\n  .menu-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6);\n    z-index: 98;\n    display: none;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n  }\n\n  /* Show mobile menu and overlay */\n  #menu-toggle[aria-expanded=\"true\"] + .nav-links {\n    display: flex;\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  #menu-toggle[aria-expanded=\"true\"] + .nav-links + .menu-overlay {\n    display: block;\n    opacity: 1;\n  }\n\n  #menu-toggle {\n    display: block;\n  }\n}\n\n/* Reset menu display when resizing back to desktop */\n@media (min-width: 769px) {\n  .nav-links {\n    display: flex !important;\n    position: static;\n    flex-direction: row;\n    width: auto;\n    background: none;\n    box-shadow: none;\n    opacity: 1;\n    transform: none;\n  }\n\n  #menu-toggle {\n    display: none;\n  }\n\n  .menu-overlay {\n    display: none;\n  }\n}\n\n/* Hero Section with Overlay */\n.hero {\n  background-image: url('../public/images/heros/hero-image_2.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-align: center;\n  position: relative;\n  width: 100%;\n}\n\n.hero::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.hero-content {\n  z-index: 2;\n}\n\n.hero-content h2 {\n  font-size: 2.5rem;\n  margin: 0;\n}\n\n.hero-content p {\n  margin: 0.5rem 0 0;\n  font-size: 1.2rem;\n}\n\n/* Main content and background */\nbody {\n  background-color: #FAEBD7;\n  font-family: Arial, sans-serif;\n}\n\n/* Center and style for Restaurant List title */\n.section-title {\n  text-align: center;\n  padding: 2rem 0;\n  font-size: 2rem;\n  color: #333333;\n}\n\n#restaurant-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n@media (max-width: 320px) {\n  #restaurant-list {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n}\n\n/* Effect for restaurant item hover */\n.restaurant-item {\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n}\n\n.restaurant-item:hover {\n  transform: scale(1.05);\n}\n\n/* Rating Star Overlay */\n.restaurant-item .rating {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: #FFD700;\n  font-size: 1.2rem;\n  padding: 5px 10px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n}\n\n.rating i {\n  margin-right: 5px;\n}\n\n.restaurant-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.restaurant-info {\n  padding: 1rem;\n}\n\n.restaurant-info h3 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333333;\n}\n\n.restaurant-info p {\n  margin: 0.5rem 0;\n  color: #333333;\n}\n\n/* Footer */\nfooter {\n  text-align: center;\n  padding: 1rem;\n  background-color: #FF6347;\n  color: white;\n  font-size: 1rem;\n  width: 100%;\n}\n\n/* Responsive styles */\n@media (min-width: 768px) {\n  .nav-links {\n    display: flex;\n    gap: 1rem;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hero {\n    height: 500px;\n    background-size: cover;\n  }\n\n  .hero-content h2 {\n    font-size: 3.5rem;\n  }\n\n  .hero-content p {\n    font-size: 1.5rem;\n  }\n}\n/* Kontainer untuk Detail Restoran */\n#restaurant-detail {\n  display: none;\n  justify-content: center; /* Pusatkan card detail */\n  align-items: center;\n  padding: 2rem;\n  width: 100%;\n}\n\n/* Card Detail Restoran */\n/* Card Detail Restoran */\n.restaurant-detail-card {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  padding: 2rem;\n  max-width: 600px;\n  width: 100%;\n  text-align: left; /* Pastikan konten sejajar ke kiri */\n}\n\n.restaurant-detail-card h2 {\n  font-size: 1.8rem;\n  margin-bottom: 1rem;\n  color: #333333;\n  text-align: center; /* Hanya judul yang di center */\n}\n\n.restaurant-detail-card img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n  margin: 1rem 0;\n}\n\n.restaurant-detail-card p,\n.restaurant-detail-card ul,\n.restaurant-detail-card li {\n  font-size: 1rem;\n  margin: 0.5rem 0;\n  color: #333333;\n}\n\n.restaurant-detail-card ul {\n  padding-left: 1.5rem;\n  list-style-type: disc;\n}\n\n.favorite-button {\n  margin-top: 1.5rem;\n  padding: 0.5rem 1.5rem;\n  background-color: #FFD700;\n  color: #333;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease;\n}\n\n.favorite-button:hover {\n  background-color: #e6c200;\n}\n\n.back-button {\n  margin-top: 1.5rem;\n  padding: 0.5rem 1.5rem;\n  background-color: #FF6347;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease;\n}\n\n.back-button:hover {\n  background-color: #e6533d;\n}\n\n/* Styling untuk Tombol View Details */\n.view-details-button {\n  display: inline-block;\n  margin-top: 1rem;\n  padding: 0.5rem 1rem;\n  background-color: #FF6347;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease;\n}\n\n.view-details-button:hover {\n  background-color: #e6533d;\n}\n.favorite-button {\n  margin-top: 1.5rem;\n  padding: 0.5rem 1.5rem;\n  background-color: #FFD700;\n  color: #333;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease;\n}\n\n.favorite-button:hover {\n  background-color: #e6c200;\n}\n\n\n/* Styling khusus untuk Favorite List */\n#favorite-restaurant-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  justify-content: center;\n  padding: 2rem;\n}\n\n#favorite-restaurant-list .restaurant-item {\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  width: calc(33.333% - 1rem); /* Lebar 1/3 dari kontainer, dengan gap antar item */\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: transform 0.3s ease-in-out;\n}\n\n#favorite-restaurant-list .restaurant-item:hover {\n  transform: scale(1.05);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			524: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [0], () => (__webpack_require__(240)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map