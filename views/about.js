import { store } from '../store.js';

export function AboutView() {
  const isRtl = store.lang === 'ar';

  return `
    <!-- Page Header / Hero -->
    <section class="about-hero">
      <div class="about-hero-overlay"></div>
      <div class="container about-hero-content">
        <h1>${store.t('about_title')}</h1>
        <p class="subtitle">${store.t('about_subtitle')}</p>
      </div>
    </section>

    <!-- Main Content Intro -->
    <section class="container about-intro-section">
      <div class="about-grid">
        <div class="about-text-content">
          <p class="lead-text">${store.t('about_desc_1')}</p>
          <p>${store.t('about_desc_2')}</p>
        </div>
        <div class="about-image-content">
          <div class="image-wrapper">
            <img src="optimized_agriculture.webp" alt="Biofert Maroc Agriculture" class="about-img">
            <div class="badge-experience">
              <span class="badge-num">${store.t('about_stat_experience_val')}</span>
              <span class="badge-text">${store.t('about_stat_experience_lbl')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="about-stats-section">
      <div class="container">
        <div class="section-title">
          <h2>${store.t('about_stats_title')}</h2>
          <p>${store.t('about_stats_subtitle')}</p>
        </div>
        <div class="about-stats-grid">
          <div class="about-stat-card">
            <div class="stat-icon"><i class="fa-solid fa-seedling"></i></div>
            <span class="stat-number">${store.t('about_stat_experience_val')}</span>
            <span class="stat-label">${store.t('about_stat_experience_lbl')}</span>
          </div>
          <div class="about-stat-card">
            <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            <span class="stat-number">${store.t('about_stat_clients_val')}</span>
            <span class="stat-label">${store.t('about_stat_clients_lbl')}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="container about-values-section">
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon"><i class="fa-solid fa-eye"></i></div>
          <h3>${store.t('about_vision_title')}</h3>
          <p>${store.t('about_vision_desc')}</p>
        </div>
        <div class="value-card">
          <div class="value-icon"><i class="fa-solid fa-bullseye"></i></div>
          <h3>${store.t('about_mission_title')}</h3>
          <p>${store.t('about_mission_desc')}</p>
        </div>
      </div>
    </section>
  `;
}
