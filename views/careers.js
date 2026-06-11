// Careers View Component
import { store } from '../store.js';

export const jobs = [
  {
    id: 1,
    title: {
      fr: 'Ingénieur Agronome Conseil',
      ar: 'مهندس زراعي مستشار',
      en: 'Consulting Agronomist Engineer',
      es: 'Ingeniero Agrónomo Consultor'
    },
    department: {
      fr: 'Technico-Commercial',
      ar: 'القسم التقني التجاري',
      en: 'Technical-Commercial',
      es: 'Técnico-Comercial'
    },
    location: {
      fr: 'Région du Gharb (Kénitra)',
      ar: 'منطقة الغرب (القنيطرة)',
      en: 'Gharb Region (Kenitra)',
      es: 'Región del Gharb (Kénitra)'
    },
    type: 'CDI',
    desc: {
      fr: 'Vous accompagnerez nos clients agriculteurs dans la mise en place de programmes de fertilisation et assurerez le suivi technique de nos produits sur le terrain.',
      ar: 'ستقوم بمرافقة عملائنا من المزارعين في إعداد برامج التسميد وضمان المتابعة الفنية لمنتجاتنا في الميدان.',
      en: 'You will assist our farmer clients in setting up fertilization programs and ensure the technical follow-up of our products in the field.',
      es: 'Acompañará a nuestros clientes agricultores en la implementación de programas de fertilización y asegurará el seguimiento técnico de nuestros productos en el campo.'
    },
    requirements: {
      fr: 'Diplôme d\'Ingénieur Agronome (IAV, ENA ou équivalent) + 3 ans d\'expérience minimum en conseil cultures.',
      ar: 'دبلوم مهندس زراعي (معهد الحسن الثاني للزراعة والبيطرة، المدرسة الوطنية للفلاحة أو ما يعادلها) + خبرة 3 سنوات على الأقل في تقديم المشورة للمحاصيل.',
      en: 'Degree in Agronomy Engineering (IAV, ENA or equivalent) + 3 years minimum experience in crop consulting.',
      es: 'Título de Ingeniero Agrónomo (IAV, ENA o equivalente) + 3 años de experiencia mínima en asesoramiento de cultivos.'
    }
  },
  {
    id: 2,
    title: {
      fr: 'Chef de Produit Nutrition Végétale',
      ar: 'مدير منتجات تغذية النباتات',
      en: 'Plant Nutrition Product Manager',
      es: 'Jefe de Producto de Nutrición Vegetal'
    },
    department: {
      fr: 'Marketing & Développement',
      ar: 'التسويق والتطوير',
      en: 'Marketing & Development',
      es: 'Marketing y Desarrollo'
    },
    location: {
      fr: 'Casablanca (Siège)',
      ar: 'الدار البيضاء (المقر الرئيسي)',
      en: 'Casablanca (Headquarters)',
      es: 'Casablanca (Sede)'
    },
    type: 'CDI',
    desc: {
      fr: 'Vous piloterez le cycle de vie de nos gammes d\'engrais foliaires et biostimulants, depuis l\'analyse des besoins du marché jusqu\'au lancement commercial.',
      ar: 'ستتولى إدارة دورة حياة مجموعاتنا من الأسمدة الورقية ومحفزات النمو، بدءاً من تحليل احتياجات السوق وحتى الإطلاق التجاري.',
      en: 'You will manage the lifecycle of our foliar fertilizer and biostimulant ranges, from analyzing market needs to commercial launch.',
      es: 'Gestionará el ciclo de vida de nuestras gamas de fertilizantes foliares y bioestimulantes, desde el análisis de las necesidades del mercado hasta el lanzamiento comercial.'
    },
    requirements: {
      fr: 'Formation supérieure en agronomie complétée par un Master en Marketing + Expérience réussie en agrofourniture.',
      ar: 'تعليم عالي في الزراعة مستكمل بماستر في التسويق + خبرة ناجحة في قطاع التجهيز والمواد الزراعية.',
      en: 'Higher education in agronomy completed by a Master in Marketing + Successful experience in agricultural supply business.',
      es: 'Educación superior en agronomía completada con un Máster en Marketing + Experiencia exitosa en el negocio de suministros agrícolas.'
    }
  }
];

export function CareersView() {
  const lang = store.lang;
  
  const jobCards = jobs.map(j => {
    const title = j.title[lang] || j.title['fr'];
    const department = j.department[lang] || j.department['fr'];
    const location = j.location[lang] || j.location['fr'];
    const desc = j.desc[lang] || j.desc['fr'];
    const requirements = j.requirements[lang] || j.requirements['fr'];
    
    return `
      <div class="job-card">
        <div class="job-header">
          <span class="job-badge">${j.type}</span>
          <span class="job-dept">${department}</span>
        </div>
        <h3>${title}</h3>
        <div class="job-meta">
          <span><i class="fa-solid fa-location-dot"></i> ${location}</span>
        </div>
        <p class="job-desc">${desc}</p>
        <div class="job-req">
          <strong>${lang === 'ar' ? 'الملف المطلوب :' : lang === 'en' ? 'Profile required:' : lang === 'es' ? 'Perfil buscado:' : 'Profil recherché :'}</strong> ${requirements}
        </div>
        <button class="btn btn-apply" data-job-id="${j.id}" data-job-title="${title}">
          ${lang === 'ar' ? 'تقديم الطلب لهذه الوظيفة' : lang === 'en' ? 'Apply for this job' : lang === 'es' ? 'Postular a esta oferta' : 'Postuler à cette offre'} <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    `;
  }).join('');

  return `
    <section class="container careers-section">
      <div class="section-title">
        <h2>${store.t('careers_title')}</h2>
        <p>${store.t('careers_subtitle')}</p>
      </div>

      <!-- Job List -->
      <div class="jobs-list">
        ${jobCards.length > 0 ? jobCards : `<p class="no-offers">${store.t('careers_empty_offers')}</p>`}
      </div>
    </section>

    <!-- Modal Form for Application -->
    <div class="modal-overlay" id="apply-modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
        <div class="modal-header">
          <h2>${store.t('careers_form_title')}</h2>
          <p id="modal-job-title">${store.t('careers_form_subtitle')}</p>
        </div>
        <form class="apply-form" id="apply-form">
          <input type="hidden" id="apply-job-id" value="">
          
          <div class="form-row">
            <div class="form-group">
              <label for="apply-name">${store.t('careers_label_name')}</label>
              <input type="text" id="apply-name" required placeholder="Karim Alaoui">
            </div>
            <div class="form-group">
              <label for="apply-email">${store.t('careers_label_email')}</label>
              <input type="email" id="apply-email" required placeholder="karim.alaoui@email.com">
            </div>
          </div>
 
          <div class="form-row">
            <div class="form-group">
              <label for="apply-phone">${store.t('careers_label_phone')}</label>
              <input type="tel" id="apply-phone" required placeholder="+212 661 XX XX XX">
            </div>
            <div class="form-group">
              <label for="apply-file">${store.t('careers_label_cv')}</label>
              <div class="file-upload-wrapper">
                <input type="file" id="apply-file" accept=".pdf" required>
                <div class="file-upload-trigger">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  <span>${store.t('careers_cv_placeholder')}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="apply-message">${store.t('careers_label_msg')}</label>
            <textarea id="apply-message" rows="4" placeholder="..."></textarea>
          </div>

          <button type="submit" class="btn btn-submit-apply">${store.t('btn_submit_application')}</button>
        </form>
      </div>
    </div>
  `;
}

// Global Event Handlers for Careers View
if (!window.careersInitialized) {
  // Opening the Modal
  window.addEventListener('click', e => {
    const btn = e.target.closest('.btn-apply');
    if (btn) {
      const jobId = btn.getAttribute('data-job-id');
      const jobTitle = btn.getAttribute('data-job-title');
      
      const modal = document.getElementById('apply-modal');
      const modalJobTitle = document.getElementById('modal-job-title');
      const inputJobId = document.getElementById('apply-job-id');
      
      if (modal && modalJobTitle && inputJobId) {
        const titleLabel = store.lang === 'ar' ? 'الوظيفة : ' : store.lang === 'en' ? 'Job: ' : store.lang === 'es' ? 'Oferta: ' : 'Offre : ';
        modalJobTitle.textContent = `${titleLabel}${jobTitle}`;
        inputJobId.value = jobId;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    }
  });

  // Closing the Modal
  window.addEventListener('click', e => {
    const isCloseBtn = e.target.closest('#modal-close');
    const isOverlay = e.target.classList.contains('modal-overlay');
    
    if (isCloseBtn || isOverlay) {
      const modal = document.getElementById('apply-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
        document.getElementById('apply-form').reset();
        resetFileInput();
      }
    }
  });

  // Form Submission
  window.addEventListener('submit', e => {
    const form = e.target.closest('#apply-form');
    if (form) {
      e.preventDefault();
      
      const name = document.getElementById('apply-name').value;
      const jobTitleElement = document.getElementById('modal-job-title');
      const prefix = store.lang === 'ar' ? 'الوظيفة : ' : store.lang === 'en' ? 'Job: ' : store.lang === 'es' ? 'Oferta: ' : 'Offre : ';
      const jobTitle = jobTitleElement ? jobTitleElement.textContent.replace(prefix, '') : 'Candidature';
      
      // Simulate submission
      const modal = document.getElementById('apply-modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
      
      // Show custom alert translated
      const alertStart = store.lang === 'ar' ? 'شكراً جزيلًا لك' : store.lang === 'en' ? 'Thank you' : store.lang === 'es' ? 'Muchas gracias' : 'Merci';
      const alertMid = store.lang === 'ar' ? '! لقد تم تسجيل ترشيحك بنجاح للوظيفة' : store.lang === 'en' ? '! Your application has been successfully recorded for the job' : store.lang === 'es' ? '! Su candidatura para la oferta' : ' ! Votre candidature pour l\'offre';
      const alertEnd = store.lang === 'es' ? ' ha sido simulada y registrada con éxito.' : store.lang === 'fr' ? ' a bien été simulée et enregistrée.' : '';
      
      alert(`${alertStart} ${name}${alertMid} "${jobTitle}"${alertEnd}`);
      form.reset();
      resetFileInput();
    }
  });

  // File Input visual feedback
  window.addEventListener('change', e => {
    const fileInput = e.target.closest('#apply-file');
    if (fileInput && fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      const trigger = fileInput.nextElementSibling;
      if (trigger) {
        trigger.querySelector('span').textContent = fileName;
        trigger.classList.add('file-selected');
        trigger.querySelector('i').className = 'fa-solid fa-file-pdf';
      }
    }
  });

  window.careersInitialized = true;
}

function resetFileInput() {
  const trigger = document.querySelector('.file-upload-trigger');
  if (trigger) {
    trigger.querySelector('span').textContent = store.t('careers_cv_placeholder');
    trigger.classList.remove('file-selected');
    trigger.querySelector('i').className = 'fa-solid fa-cloud-arrow-up';
  }
}
