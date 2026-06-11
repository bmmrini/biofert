import { HomeView } from './views/home.js';
import { CatalogView } from './views/catalog.js';
import { EventsView } from './views/events.js';
import { CareersView } from './views/careers.js';
import { QuoteView } from './views/quote.js';
import { DepartmentsView } from './views/departments.js';
import { AboutView } from './views/about.js';
import { store } from './store.js';

const routes = {
  '/': HomeView,
  '/catalog': CatalogView,
  '/events': EventsView,
  '/careers': CareersView,
  '/quote': QuoteView,
  '/departments': DepartmentsView,
  '/about': AboutView
};

const appContainer = document.getElementById('app');

function getRouteInfo() {
  const hash = window.location.hash || '#/';
  // Separate hash from query params
  const [routePart, queryPart] = hash.slice(1).split('?');
  
  const queryParams = {};
  if (queryPart) {
    queryPart.split('&').forEach(param => {
      const [key, value] = param.split('=');
      queryParams[key] = decodeURIComponent(value);
    });
  }
  
  return {
    path: routePart || '/',
    query: queryParams
  };
}

function translateStaticElements() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = store.t(key);
    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
      el.setAttribute('placeholder', translation);
    } else {
      el.textContent = translation;
    }
  });
}

function router() {
  const { path, query } = getRouteInfo();
  
  // Find matching view or default to HomeView
  const viewFn = routes[path] || HomeView;
  
  // Render the view inside the app container
  if (appContainer) {
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Render view and get potential cleanup function
    const viewHTML = viewFn(query);
    appContainer.innerHTML = `<div class="fade-in-section">${viewHTML}</div>`;
    
    // Translate all static shell elements
    translateStaticElements();
    
    // Run view initialization lifecycle (post-render script triggers)
    const initEvent = new CustomEvent('view-init', { detail: { path, query } });
    window.dispatchEvent(initEvent);
  }
  
  // Update header navigation active states
  document.querySelectorAll('.nav-item').forEach(item => {
    const route = item.getAttribute('data-route');
    if (route === path) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Close mobile navigation on route change
  const mainNav = document.getElementById('main-nav');
  if (mainNav) {
    mainNav.classList.remove('active');
  }
}

// Navigation Events
window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  // Sync the store badge on startup
  store.updateBadge();
  router();
});

// Re-render the active view when language is switched
window.addEventListener('lang-changed', () => {
  router();
});

// Mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }
  
  // Language Switcher toggle and switcher logic
  const langBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  const activeLangLabel = document.getElementById('active-lang-label');
  
  if (langBtn && langDropdown && activeLangLabel) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
    
    // Initialize the toggle button with active lang stored in the store
    activeLangLabel.textContent = store.lang.toUpperCase();
    
    langDropdown.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        const targetLang = option.getAttribute('data-lang');
        store.setLanguage(targetLang);
        activeLangLabel.textContent = targetLang.toUpperCase();
      });
    });
  }
  
  // Shrink header on scroll
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
