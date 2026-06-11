// Home View Component
import { store } from '../store.js';

export function HomeView() {
  const isRtl = store.lang === 'ar';

  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <video autoplay muted loop playsinline class="hero-video-bg">
        <source src="hero-bg.mp4" type="video/mp4">
      </video>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <span class="hero-tagline">${store.t('hero_tagline')}</span>
        <h1>${store.t('hero_title')}</h1>
        <p>${store.t('hero_desc')}</p>
        <div class="hero-actions">
          <a href="#/catalog" class="btn btn-primary-hero">${store.t('btn_discover_products')}</a>
          <a href="#/events" class="btn btn-secondary-hero">${store.t('btn_our_events')}</a>
        </div>
      </div>
    </section>

    <!-- Impact & Stats Section -->
    <section class="impact-section">
      <div class="impact-container">
        <div class="impact-text">
          <span class="impact-subtitle">${store.t('impact_subtitle')}</span>
          <h2>${store.t('impact_title')}</h2>
          <p>${store.t('impact_desc')}</p>
        </div>
        <div class="impact-grid">
          <div class="impact-item">
            <span class="impact-number">19+</span>
            <span class="impact-label">${store.t('stat_years')}</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">150+</span>
            <span class="impact-label">${store.t('stat_products')}</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">5k+</span>
            <span class="impact-label">${store.t('stat_hectares')}</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">100%</span>
            <span class="impact-label">${store.t('stat_durability')}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Solutions -->
    <section class="container core-solutions">
      <div class="section-title">
        <h2>${store.t('solutions_title')}</h2>
        <p>${store.t('solutions_subtitle')}</p>
      </div>
      
      <div class="solutions-grid">
        <div class="solution-card">
          <div class="solution-icon"><i class="fa-solid fa-leaf"></i></div>
          <h3>${store.t('category_nutrition')}</h3>
          <p>${store.t('solution_nutrition_desc')}</p>
          <a href="#/catalog?cat=nutrition" class="solution-link">${store.t('btn_read_more')} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        
        <div class="solution-card">
          <div class="solution-icon"><i class="fa-solid fa-seedling"></i></div>
          <h3>${store.t('category_biostimulants')}</h3>
          <p>${store.t('solution_biostimulants_desc')}</p>
          <a href="#/catalog?cat=biostimulants" class="solution-link">${store.t('btn_read_more')} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        
        <div class="solution-card">
          <div class="solution-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <h3>${store.t('category_protection')}</h3>
          <p>${store.t('solution_protection_desc')}</p>
          <a href="#/catalog?cat=protection" class="solution-link">${store.t('btn_read_more')} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- Flagship Products Section -->
    <section class="container flagship-products">
      <div class="section-title">
        <h2>${store.t('flagship_title')}</h2>
        <p>${store.t('flagship_subtitle')}</p>
      </div>
      <div class="flagship-grid">
        <div class="flagship-card">
          <div class="flagship-img">
            <img src="product-foliagro.webp" alt="FoliaGro 20-20-20">
          </div>
          <div class="flagship-info">
            <span class="flagship-tag">${store.t('category_nutrition')}</span>
            <h3>FoliaGro 20-20-20</h3>
            <p>${store.lang === 'ar' ? 'أسمدة ورقية عالية الذوبان ومتوازنة، غنية بالعناصر النادرة المخلبة لامتصاص سريع وقوي.' : store.lang === 'en' ? 'Highly soluble balanced foliar fertilizer, enriched with chelated trace elements for rapid assimilation.' : store.lang === 'es' ? 'Fertilizante foliar equilibrado altamente soluble, enriquecido con oligoelementos quelatados para una rápida asimilación.' : 'Engrais foliaire hautement soluble équilibré, enrichi en oligo-éléments chélatés pour une assimilation rapide.'}</p>
            <a href="#/catalog" class="btn-flagship-link">${store.t('btn_discover_products')} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        
        <div class="flagship-card">
          <div class="flagship-img">
            <img src="product-actiroot.webp" alt="ActiRoot Plus">
          </div>
          <div class="flagship-info">
            <span class="flagship-tag">${store.t('category_biostimulants')}</span>
            <h3>ActiRoot Plus</h3>
            <p>${store.lang === 'ar' ? 'منشط جذري قوي يعزز نمو النباتات الفتية ومقاومتها لإجهاد نقل الغرس.' : store.lang === 'en' ? 'Powerful root growth stimulator formulated with free amino acids to help during transplantation.' : store.lang === 'es' ? 'Potente estimulador del crecimiento radicular formulado con aminoácidos libres para ayudar durante el trasplante.' : 'Stimulateur de croissance racinaire formulé avec des acides aminés libres pour aider lors de la transplantation.'}</p>
            <a href="#/catalog" class="btn-flagship-link">${store.t('btn_discover_products')} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="flagship-card">
          <div class="flagship-img">
            <img src="product-fungistop.webp" alt="FungiStop Bio">
          </div>
          <div class="flagship-info">
            <span class="flagship-tag">${store.t('category_protection')}</span>
            <h3>FungiStop Bio</h3>
            <p>${store.lang === 'ar' ? 'مبيد فطري بيولوجي وقائي يقوي جدران الخلايا لمكافحة البياض الدقيقي ومختلف الأمراض الفطرية.' : store.lang === 'en' ? 'Preventive organic fungicide reinforcing cell walls to counter downy mildew, powdery mildew, and gray mold.' : store.lang === 'es' ? 'Fungicida biológico preventivo que refuerza las paredes celulares para combatir el mildiu, el oídio y el moho gris.' : 'Fongicide préventif biologique renforçant les parois cellulaires pour contrer le mildiou, l\'oïdium et la pourriture grise.'}</p>
            <a href="#/catalog" class="btn-flagship-link">${store.t('btn_discover_products')} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="flagship-all-cta">
        <a href="#/catalog" class="btn btn-primary-hero">${store.t('btn_see_all_catalog')}</a>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="why-us-section">
      <div class="container why-us-container">
        <div class="why-us-content">
          <h2>${store.t('why_title')}</h2>
          <p class="subtitle">${store.t('why_subtitle')}</p>
          
          <div class="why-list">
            <div class="why-item">
              <div class="why-icon"><i class="fa-solid fa-flask"></i></div>
              <div>
                <h4>${store.t('why_rd_title')}</h4>
                <p>${store.t('why_rd_desc')}</p>
              </div>
            </div>
            
            <div class="why-item">
              <div class="why-icon"><i class="fa-solid fa-handshake"></i></div>
              <div>
                <h4>${store.t('why_field_title')}</h4>
                <p>${store.t('why_field_desc')}</p>
              </div>
            </div>
            
            <div class="why-item">
              <div class="why-icon"><i class="fa-solid fa-earth-africa"></i></div>
              <div>
                <h4>${store.t('why_rse_title')}</h4>
                <p>${store.t('why_rse_desc')}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="why-us-visual">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" alt="Agriculture moderne au Maroc" class="why-img">
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container testimonials-section">
      <div class="section-title">
        <h2>${store.t('testimonials_title')}</h2>
        <p>${store.t('testimonials_subtitle')}</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="quote">"${store.t('testimonial_mehdi')}"</p>
          <div class="author">
            <strong>${store.t('testimonial_mehdi_author')}</strong>
            <span>${store.t('testimonial_mehdi_role')}</span>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="quote">"${store.t('testimonial_rachid')}"</p>
          <div class="author">
            <strong>${store.t('testimonial_rachid_author')}</strong>
            <span>${store.t('testimonial_rachid_role')}</span>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="quote">"${store.t('testimonial_meriem')}"</p>
          <div class="author">
            <strong>${store.t('testimonial_meriem_author')}</strong>
            <span>${store.t('testimonial_meriem_role')}</span>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p class="quote">"${store.t('testimonial_mohamed')}"</p>
          <div class="author">
            <strong>${store.t('testimonial_mohamed_author')}</strong>
            <span>${store.t('testimonial_mohamed_role')}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
