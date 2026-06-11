// Events View Component
import { store } from '../store.js';

export const events = [
  {
    id: 1,
    title: {
      fr: 'SIAM 2027 - Meknès',
      ar: 'المعرض الدولي للفلاحة بالمغرب 2027 - مكناس',
      en: 'SIAM 2027 - Meknes',
      es: 'SIAM 2027 - Meknés'
    },
    date: {
      fr: '21 - 26 Avril 2027',
      ar: '21 - 26 أبريل 2027',
      en: 'April 21 - 26, 2027',
      es: '21 - 26 de Abril de 2027'
    },
    status: 'upcoming',
    type: {
      fr: 'Salon National',
      ar: 'معرض وطني',
      en: 'National Exhibition',
      es: 'Salón Nacional'
    },
    desc: {
      fr: 'Retrouvez Biofert Maroc au Salon International de l\'Agriculture au Maroc. Présentation de nos dernières innovations en biostimulation et fertilisation durable.',
      ar: 'ابحثوا عن رواق بيوفيرت المغرب في المعرض الدولي للفلاحة بالمغرب. سنقدم لكم أحدث ابتكاراتنا في مجالات تحفيز النمو والتسميد المستدام.',
      en: 'Find Biofert Maroc at the International Agriculture Exhibition in Morocco. Presentation of our latest innovations in biostimulation and sustainable fertilization.',
      es: 'Encuentre a Biofert Maroc en el Salón Internacional de la Agricultura en Marruecos. Presentación de nuestras últimas innovaciones en bioestimulación y fertilización sostenible.'
    },
    image: 'optimized_agriculture.webp'
  },
  {
    id: 2,
    title: {
      fr: 'Séminaire Technique - Agadir',
      ar: 'ندوة تقنية - أكادير',
      en: 'Technical Seminar - Agadir',
      es: 'Seminario Técnico - Agadir'
    },
    date: {
      fr: '14 Novembre 2026',
      ar: '14 نوفمبر 2026',
      en: 'November 14, 2026',
      es: '14 de Noviembre de 2026'
    },
    status: 'upcoming',
    type: {
      fr: 'Conférence',
      ar: 'محاضرة علمية',
      en: 'Conference',
      es: 'Conferencia'
    },
    desc: {
      fr: 'Journée d\'échange autour de la gestion du stress hydrique chez les cultures maraîchères grâce aux extraits d\'algues marines Algamax.',
      ar: 'يوم دراسي وتبادل للخبرات حول كيفية التعامل مع الإجهاد المائي لمحاصيل الخضروات باستخدام مستخلصات الأعشاب البحرية ألجاماكس.',
      en: 'Exchange session focusing on drought stress management in vegetable crops using Algamax marine seaweed extracts.',
      es: 'Jornada de intercambio sobre la gestión del estrés hídrico en cultivos hortícolas mediante extractos de algas marinas Algamax.'
    },
    image: 'optimized_agriculture (1).webp'
  },
  {
    id: 3,
    title: {
      fr: 'Démonstration Agrumes - Taroudant',
      ar: 'عروض ميدانية للحمضيات - تارودانت',
      en: 'Citrus Field Demo - Taroudant',
      es: 'Demostración de Cítricos - Taroudant'
    },
    date: {
      fr: '18 Mai 2026',
      ar: '18 مايو 2026',
      en: 'May 18, 2026',
      es: '18 de Mayo de 2026'
    },
    status: 'past',
    type: {
      fr: 'Démonstration Terrain',
      ar: 'عروض ميدانية تطبيقية',
      en: 'Field Demonstration',
      es: 'Demostración en Terreno'
    },
    desc: {
      fr: 'Application pratique et résultats comparatifs sur verger d\'agrumes après l\'utilisation combinée d\'ActiRoot et BioPotash.',
      ar: 'تطبيق عملي وتقديم نتائج مقارنة في بساتين الحمضيات بعد الاستخدام المشترك لـ أكتيروت وبيوبوتاس.',
      en: 'Practical application and comparative results in a citrus orchard following combined use of ActiRoot and BioPotash.',
      es: 'Aplicación práctica y resultados comparativos en un huerto de cítricos tras el uso combinado de ActiRoot y BioPotash.'
    },
    image: 'optimized_agriculture (2).webp'
  },
  {
    id: 4,
    title: {
      fr: 'Lancement de Gamme - Berkane',
      ar: 'إطلاق مجموعة منتجات جديدة - بركان',
      en: 'Range Launch - Berkane',
      es: 'Lanzamiento de Gama - Berkane'
    },
    date: {
      fr: '05 Mars 2026',
      ar: '05 مارس 2026',
      en: 'March 05, 2026',
      es: '05 de Marzo de 2026'
    },
    status: 'past',
    type: {
      fr: 'Conférence & Lancement',
      ar: 'ندوة إطلاق تجاري',
      en: 'Conference & Launch',
      es: 'Conferencia y Lanzamiento'
    },
    desc: {
      fr: 'Présentation officielle de notre nouvelle gamme de correcteurs de carences auprès des distributeurs de la région de l\'Oriental.',
      ar: 'التقديم الرسمي لمجموعتنا الجديدة من مصححات النقص لصالح شبكة موزعينا في المنطقة الشرقية للمملكة.',
      en: 'Official presentation of our new range of deficiency correctors to distributors in the Oriental region.',
      es: 'Presentación oficial de nuestra nueva gama de correctores de deficiencias a distribuidores de la región Oriental.'
    },
    image: 'optimized_agriculture (3).webp'
  }
];

export function EventsView(query) {
  const currentTab = query.filter || 'upcoming';
  const lang = store.lang;
  
  const filteredEvents = events.filter(e => e.status === currentTab);
  
  const eventCards = filteredEvents.map(e => {
    const title = e.title[lang] || e.title['fr'];
    const date = e.date[lang] || e.date['fr'];
    const type = e.type[lang] || e.type['fr'];
    const desc = e.desc[lang] || e.desc['fr'];
    
    return `
      <div class="event-card">
        <div class="event-img">
          <img src="${e.image}" alt="${title}">
          <span class="event-type-badge">${type}</span>
        </div>
        <div class="event-details">
          <div class="event-date">
            <i class="fa-solid fa-calendar-days"></i>
            <span>${date}</span>
          </div>
          <h3>${title}</h3>
          <p>${desc}</p>
          ${e.status === 'upcoming' 
            ? `<a href="#/contact" class="event-cta" onclick="event.preventDefault(); alert(store.t('event_interest_success'));">${store.t('event_register')} <i class="fa-solid fa-arrow-right"></i></a>` 
            : `<span class="event-past-label"><i class="fa-solid fa-circle-check"></i> ${store.t('event_finished')}</span>`}
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="container events-section">
      <div class="section-title">
        <h2>${store.t('events_title')}</h2>
        <p>${store.t('events_subtitle')}</p>
      </div>

      <!-- Filter tabs -->
      <div class="events-filters">
        <a href="#/events?filter=upcoming" class="events-filter-btn ${currentTab === 'upcoming' ? 'active' : ''}">${store.t('status_upcoming')}</a>
        <a href="#/events?filter=past" class="events-filter-btn ${currentTab === 'past' ? 'active' : ''}">${store.t('status_past')}</a>
      </div>

      <!-- Events List / Timeline -->
      <div class="events-timeline">
        ${eventCards.length > 0 ? eventCards : `<p class="no-events">${store.t('no_events')}</p>`}
      </div>
    </section>
  `;
}
