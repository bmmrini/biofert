// Store for Quote Cart & Multilingual Translation state management
import { translations } from './translations.js';

export const store = {
  // Cart State
  cart: JSON.parse(localStorage.getItem('biofert_quote_cart')) || [],
  
  // Language State
  lang: localStorage.getItem('biofert_lang') || 'fr',

  // Save cart to local storage and update badge
  save() {
    localStorage.setItem('biofert_quote_cart', JSON.stringify(this.cart));
    this.updateBadge();
    // Dispatch a custom event to notify components/views that the cart has changed
    window.dispatchEvent(new CustomEvent('cart-updated'));
  },

  // Add a product to the quote cart
  addToCart(product) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.save();
  },

  // Remove a product from the quote cart
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.save();
  },

  // Update product quantity in quote cart
  updateQuantity(productId, quantity) {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(quantity) || 1);
      this.save();
    }
  },

  // Empty the quote cart
  clearCart() {
    this.cart = [];
    this.save();
  },

  // Get total number of items in cart
  getTotalCount() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Check if a product is already in the cart
  isInCart(productId) {
    return this.cart.some(item => item.id === productId);
  },

  // Update the visual badge in the header
  updateBadge() {
    const badge = document.getElementById('quote-badge');
    if (badge) {
      badge.textContent = this.getTotalCount();
      // Add a small bounce animation to the badge on update
      badge.classList.remove('bounce-animation');
      void badge.offsetWidth; // trigger reflow
      badge.classList.add('bounce-animation');
    }
  },

  // Language translation helper
  t(key) {
    const dictionary = translations[this.lang] || translations['fr'];
    return dictionary[key] || translations['fr'][key] || key;
  },

  // Set selected language and update HTML attributes
  setLanguage(newLang) {
    if (translations[newLang]) {
      this.lang = newLang;
      localStorage.setItem('biofert_lang', newLang);
      
      // Update HTML document direction and lang attribute
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
      
      // Update UI texts (badge, navigation, static footer elements)
      this.updateBadge();
      
      // Dispatch custom events to trigger routers and views to re-render
      window.dispatchEvent(new CustomEvent('lang-changed', { detail: newLang }));
    }
  },

  // Synchronize dynamic elements direction on startup
  syncDirection() {
    document.documentElement.dir = this.lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = this.lang;
  }
};

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  store.syncDirection();
  store.updateBadge();
});
