// Catalog View Component
import { store } from '../store.js';

export const products = [
  {
    id: 1,
    name: 'FoliaGro 20-20-20',
    category: 'nutrition',
    categoryLabel: {
      fr: 'Nutrition Végétale',
      ar: 'تغذية النباتات',
      en: 'Plant Nutrition',
      es: 'Nutrición Vegetal'
    },
    desc: {
      fr: 'Engrais foliaire hautement soluble équilibré, enrichi en oligo-éléments chélatés pour une assimilation rapide.',
      ar: 'أسمدة ورقية عالية الذوبان ومتوازنة، غنية بالعناصر النادرة المخلبة لامتصاص سريع وقوي.',
      en: 'Highly soluble balanced foliar fertilizer, enriched with chelated trace elements for rapid assimilation.',
      es: 'Fertilizante foliar equilibrado altamente soluble, enriquecido con oligoelementos quelatados para una rápida asimilación.'
    },
    image: 'product-foliagro.webp',
    spec: {
      fr: 'Azote (20%), Anhydride Phosphorique (20%), Oxyde de Potassium (20%) + Micro-éléments.',
      ar: 'نيتروجين (20٪)، حمض الفوسفوريك (20٪)، أكسيد البوتاسيوم (20٪) + عناصر صغرى.',
      en: 'Nitrogen (20%), Phosphoric Anhydride (20%), Potassium Oxide (20%) + Trace elements.',
      es: 'Nitrógeno (20%), Anhídrido Fosfórico (20%), Óxido de Potasio (20%) + Microelementos.'
    }
  },
  {
    id: 2,
    name: 'BioPotash K50',
    category: 'nutrition',
    categoryLabel: {
      fr: 'Nutrition Végétale',
      ar: 'تغذية النباتات',
      en: 'Plant Nutrition',
      es: 'Nutrición Vegetal'
    },
    desc: {
      fr: 'Solution liquide riche en potassium pour favoriser la maturation des fruits, le calibre et la teneur en sucre.',
      ar: 'محلول سائل غني بالبوتاسيوم لتعزيز نضج الثمار، حجمها ونسبة السكر فيها.',
      en: 'Liquid solution rich in potassium to promote fruit ripening, sizing, and sugar content.',
      es: 'Solución líquida rica en potasio para favorecer la maduración de los frutos, el calibre y el contenido de azúcar.'
    },
    image: 'product-biopotash.webp',
    spec: {
      fr: 'Oxyde de Potassium K2O (500 g/L).',
      ar: 'أكسيد البوتاسيوم K2O (500 جم/لتر).',
      en: 'Potassium Oxide K2O (500 g/L).',
      es: 'Óxido de Potasio K2O (500 g/L).'
    }
  },
  {
    id: 3,
    name: 'ActiRoot Plus',
    category: 'biostimulants',
    categoryLabel: {
      fr: 'Biostimulants',
      ar: 'محفزات النمو',
      en: 'Biostimulants',
      es: 'Bioestimulantes'
    },
    desc: {
      fr: 'Stimulateur de croissance racinaire formulé avec des acides aminés libres pour aider lors de la transplantation.',
      ar: 'منشط جذري قوي يعزز نمو النباتات الفتية ومقاومتها لإجهاد نقل الغرس.',
      en: 'Powerful root growth stimulator formulated with free amino acids to help during transplantation.',
      es: 'Potente estimulador del crecimiento radicular formulado con aminoácidos libres para ayudar durante el trasplante.'
    },
    image: 'product-actiroot.webp',
    spec: {
      fr: 'Acides aminés libres (12%), Azote organique (3%), Matière organique (20%).',
      ar: 'أحماض أمينية حرة (12٪)، نيتروجين عضوي (3٪)، مواد عضوية (20٪).',
      en: 'Free amino acids (12%), Organic nitrogen (3%), Organic matter (20%).',
      es: 'Aminoácidos libres (12%), Nitrógeno orgánico (3%), Materia orgánica (20%).'
    }
  },
  {
    id: 4,
    name: 'Algamax Eco',
    category: 'biostimulants',
    categoryLabel: {
      fr: 'Biostimulants',
      ar: 'محفزات النمو',
      en: 'Biostimulants',
      es: 'Bioestimulantes'
    },
    desc: {
      fr: 'Extrait pur d\'algues marines (Ascophyllum nodosum) pour stimuler la floraison et la résistance au stress hydrique.',
      ar: 'مستخلص نقي من الأعشاب البحرية لتحفيز التزهير ومقاومة الإجهاد المائي.',
      en: 'Pure seaweed extract (Ascophyllum nodosum) to stimulate flowering and resistance to drought stress.',
      es: 'Extracto puro de algas marinas (Ascophyllum nodosum) para estimular la floración y la resistencia al estrés hídrico.'
    },
    image: 'product-algamax.webp',
    spec: {
      fr: 'Extrait d\'algues (100% naturel), Alginates, Mannitol.',
      ar: 'مستخلص أعشاب بحرية (100٪ طبيعي)، ألجينات، مانيتول.',
      en: 'Seaweed extract (100% natural), Alginates, Mannitol.',
      es: 'Extracto de algas (100% natural), Alginatos, Manitol.'
    }
  },
  {
    id: 5,
    name: 'FungiStop Bio',
    category: 'protection',
    categoryLabel: {
      fr: 'Protection des Cultures',
      ar: 'وقاية المحاصيل',
      en: 'Crop Protection',
      es: 'Protección'
    },
    desc: {
      fr: 'Fongicide préventif biologique renforçant les parois cellulaires pour contrer le mildiou, l\'oïdium et la pourriture grise.',
      ar: 'مبيد فطري بيولوجي وقائي يقوي جدران الخلايا لمكافحة البياض الدقيقي ومختلف الأمراض الفطرية.',
      en: 'Preventive organic fungicide reinforcing cell walls to counter downy mildew, powdery mildew, and gray mold.',
      es: 'Fungicida biológico preventivo que refuerza las paredes celulares para combatir el mildiu, el oídio y el moho gris.'
    },
    image: 'product-fungistop.webp',
    spec: {
      fr: 'Extrait de Prêle (70%), Chitosan (30%).',
      ar: 'مستخلص ذيل الحصان (70٪)، شيتوزان (30٪).',
      en: 'Horsetail extract (70%), Chitosan (30%).',
      es: 'Extracto de Cola de Caballo (70%), Quitosano (30%).'
    }
  },
  {
    id: 6,
    name: 'BioNeem Repel',
    category: 'protection',
    categoryLabel: {
      fr: 'Protection des Cultures',
      ar: 'وقاية المحاصيل',
      en: 'Crop Protection',
      es: 'Protección'
    },
    desc: {
      fr: 'Insecticide-acaricide naturel à base d\'huile de Neem purifiée pour lutter contre les pucerons, acariens et aleurodes.',
      ar: 'مبيد طبيعي للحشرات والقراد يعتمد على زيت النيم النقي لمكافحة المن، العناكب والذباب الأبيض.',
      en: 'Natural insecticide-acaricide based on purified Neem oil to control aphids, mites, and whiteflies.',
      es: 'Insecticida-acaricida natural a base de aceite de Neem purificado para combatir pulgones, ácaros y mosca blanca.'
    },
    image: 'product-bioneem.webp',
    spec: {
      fr: 'Azadirachtine pure (10 g/L), Huile de Neem.',
      ar: 'أزاديراتشين نقي (10 جم/لتر)، زيت النيم.',
      en: 'Pure Azadirachtin (10 g/L), Neem oil.',
      es: 'Azadiractina pura (10 g/L), Aceite de Neem.'
    }
  }
];

export function CatalogView(query) {
  const selectedCat = query.cat || 'all';
  const currentLang = store.lang;
  
  // Filter products by category
  const filteredProducts = selectedCat === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCat);

  const productCards = filteredProducts.map(p => {
    const inCart = store.isInCart(p.id);
    const btnText = inCart ? store.t('btn_added_to_quote') : store.t('btn_add_to_quote');
    const btnClass = inCart ? 'btn-add-quote added' : 'btn-add-quote';
    
    // Resolve localized strings safely
    const catLabel = p.categoryLabel[currentLang] || p.categoryLabel['fr'];
    const description = p.desc[currentLang] || p.desc['fr'];
    const specification = p.spec[currentLang] || p.spec['fr'];
    
    return `
      <div class="product-card" data-category="${p.category}">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}">
          <span class="product-cat-tag">${catLabel}</span>
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p class="product-desc">${description}</p>
          <div class="product-spec">
            <strong>${store.t('composition_label')}</strong> ${specification}
          </div>
          <button class="${btnClass}" data-id="${p.id}">
            <i class="fa-solid fa-file-signature"></i>
            <span>${btnText}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="container catalog-section">
      <div class="section-title">
        <h2>${store.t('catalog_title')}</h2>
        <p>${store.t('catalog_subtitle')}</p>
      </div>

      <!-- Filters -->
      <div class="catalog-filters">
        <a href="#/catalog" class="filter-tab ${selectedCat === 'all' ? 'active' : ''}">${store.t('category_all')}</a>
        <a href="#/catalog?cat=nutrition" class="filter-tab ${selectedCat === 'nutrition' ? 'active' : ''}">${store.t('category_nutrition')}</a>
        <a href="#/catalog?cat=biostimulants" class="filter-tab ${selectedCat === 'biostimulants' ? 'active' : ''}">${store.t('category_biostimulants')}</a>
        <a href="#/catalog?cat=protection" class="filter-tab ${selectedCat === 'protection' ? 'active' : ''}">${store.t('category_protection')}</a>
      </div>

      <!-- Product Grid -->
      <div class="product-grid" id="product-grid">
        ${productCards.length > 0 ? productCards : `<p class="no-products">${store.t('no_products_found')}</p>`}
      </div>
    </section>
  `;
}

// Global Event Listener for Catalog Page (runs once, handles clicks)
if (!window.catalogInitialized) {
  window.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add-quote');
    if (btn) {
      const productId = parseInt(btn.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      if (product) {
        if (!store.isInCart(productId)) {
          // Resolve standard localized version for state cart
          const lang = store.lang;
          const cartItem = {
            id: product.id,
            name: product.name,
            categoryLabel: product.categoryLabel[lang] || product.categoryLabel['fr'],
            image: product.image
          };
          store.addToCart(cartItem);
          // Update button style directly
          btn.classList.add('added');
          btn.querySelector('span').textContent = store.t('btn_added_to_quote');
          
          // Toast Notification simulation
          showToast(`"${product.name}" ${store.t('toast_added')}`);
        } else {
          // Go to quote page
          window.location.hash = '#/quote';
        }
      }
    }
  });
  
  window.catalogInitialized = true;
}

// Helper to show modern toast notifications
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
