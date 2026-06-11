// Quote / Cart View Component
import { store } from '../store.js';

export function QuoteView() {
  const cart = store.cart;
  const lang = store.lang;
  
  if (cart.length === 0) {
    return `
      <section class="container quote-section empty">
        <div class="empty-state">
          <i class="fa-solid fa-file-circle-exclamation"></i>
          <h2>${store.t('quote_empty_cart')}</h2>
          <p>${lang === 'ar' ? 'سلتك فارغة تماماً من أي منتج حالياً. يرجى تصفح الكتالوج واختيار المنتجات المناسبة لعمل طلب السعر.' : lang === 'en' ? 'You have not selected any products yet. Browse our catalog to add products to your quote request.' : lang === 'es' ? 'No ha seleccionado ningún producto todavía. Explore nuestro catálogo para agregar productos a su solicitud.' : 'Vous n\'avez sélectionné aucun produit pour le moment. Parcourez notre catalogue pour ajouter des articles à votre demande de devis.'}</p>
          <a href="#/catalog" class="btn btn-primary-empty">${store.t('quote_empty_cta')}</a>
        </div>
      </section>
    `;
  }

  const cartItemsHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="item-details">
        <h3>${item.name}</h3>
        <p class="item-spec">${item.categoryLabel}</p>
      </div>
      <div class="item-qty-container">
        <button class="qty-btn dec-btn" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
        <input type="number" class="qty-input" data-id="${item.id}" value="${item.quantity}" min="1">
        <button class="qty-btn inc-btn" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
      </div>
      <button class="item-remove-btn" data-id="${item.id}" title="${lang === 'ar' ? 'حذف هذا المنتج' : lang === 'en' ? 'Remove product' : lang === 'es' ? 'Eliminar' : 'Retirer ce produit'}">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  return `
    <section class="container quote-section">
      <div class="section-title">
        <h2>${store.t('quote_title')}</h2>
        <p>${store.t('quote_subtitle')}</p>
      </div>

      <div class="quote-layout">
        <!-- Cart Items List -->
        <div class="quote-items-list">
          <h3>${lang === 'ar' ? 'المنتجات المختارة' : lang === 'en' ? 'Selected Products' : lang === 'es' ? 'Productos Seleccionados' : 'Produits sélectionnés'}</h3>
          <div class="cart-items-container">
            ${cartItemsHTML}
          </div>
        </div>

        <!-- Devis Form -->
        <div class="quote-form-card">
          <h3>${store.t('quote_form_title')}</h3>
          <p class="quote-form-subtitle-inline">${store.t('quote_form_subtitle')}</p>
          <form class="quote-form" id="quote-form">
            <div class="form-group">
              <label for="quote-company">${store.t('quote_label_company')}</label>
              <input type="text" id="quote-company" required placeholder="${lang === 'ar' ? 'مثال: ضيعة كرم السوس' : lang === 'en' ? 'Ex: Souss Farm' : lang === 'es' ? 'Ej: Finca del Souss' : 'Ex: Domaine Agricole Souss'}">
            </div>
            
            <div class="form-group">
              <label for="quote-name">${lang === 'ar' ? 'الاسم الكامل للمتصل *' : lang === 'en' ? 'Full Contact Name *' : lang === 'es' ? 'Nombre completo del contacto *' : 'Nom complet du contact *'}</label>
              <input type="text" id="quote-name" required placeholder="${lang === 'ar' ? 'مثال: عادل بنجلون' : lang === 'en' ? 'Ex: John Doe' : lang === 'es' ? 'Ej: Juan Pérez' : 'Ex: Adil Benjelloun'}">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="quote-email">${store.t('careers_label_email')}</label>
                <input type="email" id="quote-email" required placeholder="contact@domain.com">
              </div>
              <div class="form-group">
                <label for="quote-phone">${store.t('careers_label_phone')}</label>
                <input type="tel" id="quote-phone" required placeholder="+212 661 XX XX XX">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="quote-region">${store.t('quote_label_region')}</label>
                <input type="text" id="quote-region" required placeholder="${lang === 'ar' ? 'مثال: الغرب، سوس، الشرق' : lang === 'en' ? 'Ex: Gharb, Souss, Oriental' : lang === 'es' ? 'Ej: Gharb, Souss, Oriental' : 'Ex: Gharb, Souss, Oriental'}">
              </div>
              <div class="form-group">
                <label for="quote-surface">${lang === 'ar' ? 'المساحة الاجمالية بالهكتار' : lang === 'en' ? 'Farm Area (Hectares)' : lang === 'es' ? 'Superficie de explotación (Hectáreas)' : 'Superficie de l\'exploitation (Hectares)'}</label>
                <input type="number" id="quote-surface" placeholder="Ex: 50" min="0">
              </div>
            </div>

            <div class="form-group">
              <label for="quote-notes">${lang === 'ar' ? 'ملاحظات أو احتياجات محددة (نوع التربة، زراعة معينة...)' : lang === 'en' ? 'Specific needs or details (crop type, soil...)' : lang === 'es' ? 'Notas o necesidades específicas (cultivo, suelo...)' : 'Précisions ou besoins spécifiques (culture, type de sol...)'}</label>
              <textarea id="quote-notes" rows="4" placeholder="${lang === 'ar' ? 'اذكر هنا تفاصيل محصولك للحصول على استشارة متخصصة...' : lang === 'en' ? 'Provide details here for better agronomic advice...' : lang === 'es' ? 'Proporcione detalles para una mejor asesoramiento...' : 'Indiquez ici les détails de vos cultures pour un conseil agronomique plus ciblé...'}"></textarea>
            </div>

            <button type="submit" class="btn btn-submit-quote">
              <i class="fa-solid fa-paper-plane"></i>
              ${store.t('btn_submit_quote')}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// Global Event Listeners for Quote View (runs once)
if (!window.quoteInitialized) {
  // Quantity Adjustments & Removals
  window.addEventListener('click', e => {
    // Increment
    const incBtn = e.target.closest('.inc-btn');
    if (incBtn) {
      const id = parseInt(incBtn.getAttribute('data-id'));
      const item = store.cart.find(i => i.id === id);
      if (item) {
        store.updateQuantity(id, item.quantity + 1);
        refreshQuoteView();
      }
    }

    // Decrement
    const decBtn = e.target.closest('.dec-btn');
    if (decBtn) {
      const id = parseInt(decBtn.getAttribute('data-id'));
      const item = store.cart.find(i => i.id === id);
      if (item && item.quantity > 1) {
        store.updateQuantity(id, item.quantity - 1);
        refreshQuoteView();
      }
    }

    // Remove item
    const removeBtn = e.target.closest('.item-remove-btn');
    if (removeBtn) {
      const id = parseInt(removeBtn.getAttribute('data-id'));
      store.removeFromCart(id);
      refreshQuoteView();
    }
  });

  // Numeric input change
  window.addEventListener('change', e => {
    const input = e.target.closest('.qty-input');
    if (input) {
      const id = parseInt(input.getAttribute('data-id'));
      const val = parseInt(input.value);
      store.updateQuantity(id, val);
      refreshQuoteView();
    }
  });

  // Form Submission
  window.addEventListener('submit', e => {
    const form = e.target.closest('#quote-form');
    if (form) {
      e.preventDefault();
      
      const name = document.getElementById('quote-name').value;
      const company = document.getElementById('quote-company').value;
      const lang = store.lang;
      
      // Simulate submission success
      let successAlert = '';
      if (lang === 'ar') {
        successAlert = `شكراً جزيلاً يا ${name}! لقد تم إرسال طلب عرض السعر لضيعة "${company}" بنجاح، ويشمل ${store.getTotalCount()} منتج(ات). سيتصل بك خبراؤنا في غضون 24 ساعة.`;
      } else if (lang === 'en') {
        successAlert = `Thank you ${name}! Your quote request for "${company}" containing ${store.getTotalCount()} item(s) has been successfully submitted. Our advisors will contact you within 24 hours.`;
      } else if (lang === 'es') {
        successAlert = `¡Muchas gracias ${name}! Su solicitud de presupuesto para "${company}" con ${store.getTotalCount()} artículo(s) se ha enviado con éxito. Nuestros expertos le contactarán en 24h.`;
      } else {
        successAlert = `Merci ${name} ! Votre demande de devis pour l'exploitation "${company}" comprenant ${store.getTotalCount()} article(s) a bien été envoyée. Nos experts vous contacteront sous 24h.`;
      }
      
      alert(successAlert);
      
      // Empty cart
      store.clearCart();
      
      // Redirect to home
      window.location.hash = '#/';
    }
  });

  window.quoteInitialized = true;
}

// Helper to reload the current view HTML dynamically on cart changes
function refreshQuoteView() {
  const appContainer = document.getElementById('app');
  if (appContainer && window.location.hash.startsWith('#/quote')) {
    appContainer.innerHTML = `<div class="fade-in-section">${QuoteView()}</div>`;
  }
}
