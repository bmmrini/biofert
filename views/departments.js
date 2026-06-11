// Departments View Component
import { store } from '../store.js';
import { products } from './catalog.js';

export const departments = [
  {
    id: 'matieres',
    title: {
      fr: 'Matières Fertilisantes et Supports des Cultures',
      ar: 'المواد المخصبة ودعائم الزراعة',
      en: 'Fertilizing Materials and Crop Supports',
      es: 'Materias Fertilizantes y Soportes de Cultivos'
    },
    image: 'optimized_Matières Fertilisantes et Supports des Cultures (2).webp',
    shortDesc: {
      fr: 'Solutions avancées de nutrition végétale pour maximiser vos rendements tout en préservant le sol.',
      ar: 'حلول متقدمة لتغذية النباتات من أجل زيادة محاصيلكم مع الحفاظ على التربة.',
      en: 'Advanced plant nutrition solutions to maximize your yields while preserving the soil.',
      es: 'Soluciones avanzadas de nutrición vegetal para maximizar sus rendimientos preservando el suelo.'
    },
    desc: {
      fr: 'Nous mettons à disposition une large gamme d\'engrais et de fertilisants spéciaux, conçus pour répondre aux besoins variés des agriculteurs et optimiser les rendements agricoles.',
      ar: 'نضع رهن إشارتكم مجموعة واسعة من الأسمدة والمخصبات الخاصة المصممة لتلبية احتياجات المزارعين المتنوعة وتحسين الإنتاجية الزراعية.',
      en: 'We offer a wide range of special fertilizers designed to meet the diverse needs of farmers and optimize agricultural yields.',
      es: 'Ofrecemos una amplia gama de fertilizantes especiales diseñados para satisfacer las diversas necesidades de los agricultores y optimizar los rendimientos agrícolas.'
    },
    details: {
      fr: 'Nos solutions de nutrition végétale couvrent tous les stades physiologiques des cultures. De la fertilisation de fond aux applications foliaires de précision, nous formulons des intrants enrichis en oligo-éléments chélatés et acides aminés pour surmonter les stress abiotiques. Notre but est de maximiser la rentabilité de chaque hectare tout en favorisant une agriculture plus durable et respectueuse des sols marocains.',
      ar: 'تغطي حلولنا لتغذية النباتات جميع المراحل الفسيولوجية للمحاصيل. من التسميد الأساسي إلى التطبيقات الورقية الدقيقة، نقوم بتركيب مدخلات معززة بالعناصر النادرة المخلبة والأحماض الأمينية للتغلب على الإجهاد المناخي. هدفنا هو تحقيق أقصى قدر من الربحية لكل هكتار مع تعزيز زراعة أكثر استدامة واحتراماً للتربة المغربية.',
      en: 'Our plant nutrition solutions cover all physiological crop stages. From basic fertilization to precision foliar applications, we formulate inputs enriched with chelated trace elements and amino acids to overcome abiotic stress. Our goal is to maximize the profitability of each hectare while promoting sustainable agriculture that respects Moroccan soils.',
      es: 'Nuestras soluciones de nutrición vegetal cubren todas las etapas fisiológicas de los cultivos. Desde la fertilización básica hasta las aplicaciones foliares de precisión, formulamos insumos enriquecidos con oligoelementos quelados y aminoácidos para superar el estrés abiótico. Nuestro objetivo es maximizar la rentabilidad de cada hectárea promoviendo una agricultura más sostenible y respetuosa con los suelos marroquíes.'
    },
    categoryKey: 'nutrition',
    catLabel: {
      fr: 'Voir la Nutrition Végétale',
      ar: 'عرض منتجات تغذية النباتات',
      en: 'View Plant Nutrition',
      es: 'Ver Nutrición Vegetal'
    },
    catLink: '#/catalog?cat=nutrition',
    benefits: {
      fr: [
        'Assimilation ultra-rapide par voie racinaire et foliaire',
        'Correction ciblée des carences nutritionnelles',
        'Stimulation de la vie microbienne du sol'
      ],
      ar: [
        'امتصاص سريع جداً عبر الجذور والأوراق',
        'تصحيح مستهدف للاختلالات الغذائية النباتية',
        'تحفيز النشاط الميكروبي المفيد للتربة'
      ],
      en: [
        'Ultra-rapid assimilation via root and foliar pathways',
        'Targeted correction of nutritional deficiencies',
        'Stimulation of beneficial soil microbial life'
      ],
      es: [
        'Asimilación ultra rápida por vía radicular y foliar',
        'Corrección dirigida de deficiencias nutricionales',
        'Estimulación de la vida microbiana del suelo'
      ]
    }
  },
  {
    id: 'pesticides',
    title: {
      fr: 'Pesticides',
      ar: 'مبيدات الآفات الزراعية',
      en: 'Pesticides',
      es: 'Pesticidas'
    },
    image: 'optimized_Pesticides (2).webp',
    shortDesc: {
      fr: 'Protection ciblée contre les ravageurs et maladies fongiques dans le respect des normes.',
      ar: 'حماية موجهة ضد الآفات والأمراض الفطرية مع الالتزام التام بالمعايير الصحية والبيئية.',
      en: 'Targeted protection against pests and fungal diseases in compliance with safety standards.',
      es: 'Protección dirigida contra plagas y enfermedades fúngicas de acuerdo con las normas de seguridad.'
    },
    desc: {
      fr: 'Nous proposons une gamme complète de pesticides de qualité, adaptés aux besoins des agriculteurs, tout en respectant les normes de sécurité et l\'environnement.',
      ar: 'نقدم مجموعة متكاملة من مبيدات الآفات عالية الجودة المصممة لتلبية احتياجات المزارعين، مع الاحترام التام لمعايير السلامة والبيئة.',
      en: 'We offer a comprehensive range of quality pesticides tailored to farmers\' needs, while respecting safety and environmental standards.',
      es: 'Ofrecemos una gama completa de pesticidas de calidad adaptados a las necesidades de los agricultores, respetando las normas de seguridad y el medio ambiente.'
    },
    details: {
      fr: 'La protection des cultures est essentielle pour sécuriser vos récoltes. Biofert Maroc sélectionne et distribue des produits phytosanitaires de haute pureté et efficacité : fongicides, insecticides et herbicides formulés pour répondre aux pressions parasitaires locales. Nous mettons un point d\'honneur à former nos clients sur les bonnes pratiques de dosage et d\'application sécuritaire.',
      ar: 'حماية المحاصيل أمر أساسي لضمان محاصيلكم وتأمينها. تختار بيوفيرت المغرب وتوزع منتجات وقاية النباتات ذات النقاء والفعالية العالية: مبيدات فطريات ومبيدات حشرات ومبيدات أعشاب مهيأة للاستجابة لظروف الآفات المحلية. نلتزم بشدة بتدريب عملائنا على الممارسات الجيدة للجرعات والتطبيق الآمن.',
      en: 'Crop protection is essential to secure your harvest. Biofert Maroc selects and distributes phytosanitary products of high purity and efficacy: fungicides, insecticides, and herbicides formulated to respond to local pest pressures. We make it a priority to train our clients on good dosing and safe application practices.',
      es: 'La protección de cultivos es esencial para asegurar sus cosechas. Biofert Maroc selecciona y distribuye productos fitosanitarios de alta pureza y eficacia: fungicidas, insecticidas y herbicidas formulados para responder a las presiones de plagas locales. Nos esforzamos por capacitar a nuestros clientes en buenas prácticas de dosificación y aplicación segura.'
    },
    categoryKey: 'protection',
    catLabel: {
      fr: 'Voir la Protection des Cultures',
      ar: 'عرض منتجات وقاية المحاصيل',
      en: 'View Crop Protection',
      es: 'Ver Protección de Cultivos'
    },
    catLink: '#/catalog?cat=protection',
    benefits: {
      fr: [
        'Haute efficacité à faible dose d\'application',
        'Protection durable contre les ravageurs majeurs',
        'Formulations certifiées conformes aux exigences réglementaires'
      ],
      ar: [
        'فعالية عالية بجرعة تطبيق منخفضة',
        'حماية طويلة الأمد ضد الآفات الزراعية الرئيسية',
        'تركيبات معتمدة ومتطابقة مع المتطلبات التنظيمية الصارمة'
      ],
      en: [
        'High efficacy at low application doses',
        'Durable protection against major pests',
        'Certified formulations compliant with regulatory standards'
      ],
      es: [
        'Alta eficacia con dosis de aplicación bajas',
        'Protección duradera contra las principales plagas',
        'Formulaciones certificadas de acuerdo con los requisitos reglamentarios'
      ]
    }
  },
  {
    id: 'hygiene',
    title: {
      fr: 'Hygiène Publique',
      ar: 'الصحة العامة البيئية',
      en: 'Public Hygiene',
      es: 'Higiene Pública'
    },
    image: 'optimized_Hygiène Publique.webp',
    shortDesc: {
      fr: 'Produits biocides et désinfectants pour la sécurité sanitaire des espaces professionnels.',
      ar: 'مطهرات ومبيدات حيوية متطورة لضمان السلامة الصحية للمساحات المهنية والعامة.',
      en: 'Biocide products and disinfectants for the sanitary safety of professional spaces.',
      es: 'Productos biocidas y desinfectantes para la seguridad sanitaria de espacios profesionales.'
    },
    desc: {
      fr: 'Nous offrons une gamme de produits spécialisés d\'hygiène publique pour éliminer les germes, bactéries et virus, lutter contre les rongeurs et réduire les nuisibles.',
      ar: 'نقدم مجموعة من المنتجات المتخصصة في الصحة العامة للقضاء على الجراثيم والبكتيريا والفيروسات، ومكافحة القوارض والحد من الحشرات الضارة.',
      en: 'We offer a range of specialized public hygiene products to eliminate germs, bacteria, and viruses, fight rodents, and reduce pests.',
      es: 'Ofrecemos una gama de productos de higiene pública especializados para eliminar gérmenes, bacterias y virus, combatir roedores y reducir plagas.'
    },
    details: {
      fr: 'Destinée aux collectivités, aux industries agroalimentaires et aux professionnels de l\'assainissement, notre gamme d\'hygiène publique offre des solutions radicales. Nous fournissons des désinfectants à large spectre, des rodenticides à haute attractivité et des insecticides d\'ambiance. Tous nos produits sont rigoureusement homologués pour garantir la sécurité des utilisateurs et des lieux traités.',
      ar: 'موجهة للجماعات المحلية، الصناعات الغذائية ومهنيي التطهير والتعقيم، تقدم مجموعتنا للصحة العامة حلولاً جذرية. نوفر مطهرات واسعة النطاق ومبيدات قوارض ومبيدات حشرات طائرة وزاحفة. جميع منتجاتنا مرخصة بدقة لضمان سلامة المستخدمين والأماكن المعالجة.',
      en: 'Aimed at local authorities, food industries, and sanitation professionals, our public hygiene range offers radical solutions. We provide broad-spectrum disinfectants, highly attractive rodenticides, and ambient insecticides. All our products are rigorously registered to guarantee user and facility safety.',
      es: 'Dirigida a entidades públicas, industrias agroalimentarias y profesionales del saneamiento, nuestra gama de higiene pública ofrece soluciones definitivas. Suministramos desinfectantes de amplio espectro, raticidas de alta atracción e insecticidas de ambiente. Todos nuestros productos están estrictamente autorizados para garantizar la seguridad.'
    },
    categoryKey: 'hygiene',
    catLabel: {
      fr: 'Demander un catalogue Hygiène',
      ar: 'طلب كتالوج منتجات الصحة العامة',
      en: 'Request Hygiene Catalog',
      es: 'Solicitar catálogo de Higiene'
    },
    catLink: '#/quote',
    benefits: {
      fr: [
        'Formules adaptées aux protocoles sanitaires stricts',
        'Haute rémanence et action immédiate',
        'Respect des normes d\'hygiène et sécurité publique'
      ],
      ar: [
        'تركيبات ملائمة للبروتوكولات الصحية الصارمة',
        'تأثير فوري ممتد المفعول',
        'احترام تام لمعايير النظافة والسلامة العامة'
      ],
      en: [
        'Formulas adapted to strict sanitary protocols',
        'High persistence and immediate action',
        'Compliance with public hygiene and safety standards'
      ],
      es: [
        'Fórmulas adaptadas a estrictos protocolos sanitarios',
        'Alta persistencia y acción inmediata',
        'Cumplimiento de las normas de higiene y seguridad pública'
      ]
    }
  },
  {
    id: 'produits',
    title: {
      fr: 'Produits chimiques',
      ar: 'المنتجات الكيميائية الصناعية',
      en: 'Chemical Products',
      es: 'Productos Químicos'
    },
    image: 'optimized_Produits chimiques.webp',
    shortDesc: {
      fr: 'Matières premières et solutions chimiques pures pour les professionnels de l\'agrochimie.',
      ar: 'مواد خام وحلول كيميائية نقية للمهنيين والمصنعين في قطاع الصناعات الكيميائية الزراعية.',
      en: 'Raw materials and pure chemical solutions for agrochemical professionals.',
      es: 'Materias primas y soluciones químicas puras para profesionales de la agroquímica.'
    },
    desc: {
      fr: 'Nous proposons une gamme variée de produits chimiques et agrochimiques adaptés aux besoins des professionnels, tout en mettant l\'accent sur la sécurité et l\'efficacité.',
      ar: 'نقترح تشكيلة متنوعة من المنتجات الكيميائية والصناعية الملائمة للاحتياجات المهنية، مع التركيز التام على الفعالية وشروط الأمان.',
      en: 'We offer a varied range of chemical and agrochemical products adapted to professional needs, focusing on safety and efficiency.',
      es: 'Ofrecemos una gama variada de productos químicos y agroquímicos adaptados a las necesidades profesionales, enfocados en la seguridad y la eficacia.'
    },
    details: {
      fr: 'En tant que distributeur historique de matières premières chimiques de haute pureté, Biofert Maroc soutient les formulateurs et industries du pays. Nos acides, solvants, agents chélatants et sels minéraux sont soumis à des contrôles qualité stricts. Nous assurons une logistique sécurisée et un approvisionnement stable pour pérenniser vos chaînes de production.',
      ar: 'بصفتنا موزعاً تاريخياً للمواد الخام الكيميائية عالية النقاء، تدعم بيوفيرت المغرب جهود التصنيع والتركيب في البلاد. تخضع الأحماض والمذيبات وعوامل المخلبات والأملاح المعدنية لرقابة صارمة على الجودة. نضمن خدمات لوجستية آمنة وتدفقات إمداد مستقرة لتأمين خطوط إنتاجكم.',
      en: 'As a historical distributor of high-purity chemical raw materials, Biofert Maroc supports national formulators and industries. Our acids, solvents, chelating agents, and mineral salts undergo strict quality controls. We ensure secure logistics and stable supply chains to sustain your production.',
      es: 'Como distribuidor histórico de materias primas químicas de alta pureza, Biofert Maroc apoya a los formuladores e industrias del país. Nuestros ácidos, solventes, agentes quelantes y sales minerales se someten a estrictos controles de calidad. Aseguramos una logística segura.'
    },
    categoryKey: 'all',
    catLabel: {
      fr: 'Parcourir notre catalogue global',
      ar: 'تصفح الكتالوج الشامل لمنتجاتنا',
      en: 'Browse Our Global Catalog',
      es: 'Navegar por el catálogo global'
    },
    catLink: '#/catalog',
    benefits: {
      fr: [
        'Pureté chimique garantie avec fiches techniques de lots',
        'Conditionnements industriels sécurisés et sur-mesure',
        'Support logistique et réglementaire complet'
      ],
      ar: [
        'نقاء كيميائي مضمون مع شهادات التحليل التقنية لكل دفعة',
        'تعبئة وتغليف صناعي آمن ومصمم حسب الطلب',
        'دعم لوجستي وتنظيمي كامل ومتكامل'
      ],
      en: [
        'Guaranteed chemical purity with technical batch data sheets',
        'Secure and customized industrial packaging',
        'Full logistical and regulatory support'
      ],
      es: [
        'Pureza química garantizada con fichas técnicas de lote',
        'Envase industrial seguro y personalizado',
        'Soporte logístico y regulatorio integral'
      ]
    }
  }
];

export function DepartmentsView(query) {
  const selectedDeptId = query.id;
  const lang = store.lang;

  // Render detail view if a specific department is requested
  if (selectedDeptId) {
    const dept = departments.find(d => d.id === selectedDeptId);
    if (dept) {
      return renderDepartmentDetail(dept, lang);
    }
  }

  // Render listing view by default
  const cardElements = departments.map(d => {
    const title = d.title[lang] || d.title['fr'];
    const shortDesc = d.shortDesc[lang] || d.shortDesc['fr'];
    
    return `
      <div class="department-card-premium">
        <div class="dept-card-image">
          <img src="${d.image}" alt="${title}">
        </div>
        <div class="dept-card-content">
          <h3>${title}</h3>
          <p class="dept-card-short">${shortDesc}</p>
          <div class="dept-card-actions">
            <a href="#/departments?id=${d.id}" class="btn-read-more">${store.t('btn_read_more')} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section class="container departments-section">
      <div class="section-title">
        <h2>${store.t('dept_main_title')}</h2>
        <p>${store.t('dept_main_subtitle')}</p>
      </div>

      <div class="departments-grid-2col">
        ${cardElements}
      </div>

      <div class="departments-info-box">
        <div class="info-icon">
          <i class="fa-solid fa-circle-info"></i>
        </div>
        <div class="info-content">
          <h3>${store.t('dept_infobox_title')}</h3>
          <p>${store.t('dept_infobox_desc')}</p>
          <a href="#/quote" class="btn-info-action">${store.t('dept_infobox_btn')}</a>
        </div>
      </div>
    </section>
  `;
}

function renderDepartmentDetail(dept, lang) {
  // Find related products in the catalog
  const relatedProducts = products.filter(p => p.category === dept.categoryKey);
  
  const title = dept.title[lang] || dept.title['fr'];
  const shortDesc = dept.shortDesc[lang] || dept.shortDesc['fr'];
  const desc = dept.desc[lang] || dept.desc['fr'];
  const details = dept.details[lang] || dept.details['fr'];
  const catLabel = dept.catLabel[lang] || dept.catLabel['fr'];
  const benefits = dept.benefits[lang] || dept.benefits['fr'];
  
  const productSection = relatedProducts.length > 0 
    ? `
      <div class="dept-related-products">
        <h3>${store.t('dept_detail_related_products')}</h3>
        <div class="flagship-grid">
          ${relatedProducts.map(p => {
            const pCatLabel = p.categoryLabel[lang] || p.categoryLabel['fr'];
            const pDesc = p.desc[lang] || p.desc['fr'];
            
            return `
              <div class="flagship-card">
                <div class="flagship-img">
                  <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="flagship-info">
                  <span class="flagship-tag">${pCatLabel}</span>
                  <h3>${p.name}</h3>
                  <p>${pDesc}</p>
                  <a href="#/catalog?cat=${p.category}" class="btn-flagship-link">${store.t('btn_read_more')} <i class="fa-solid fa-chevron-right"></i></a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `
    : `
      <div class="dept-no-products-cta">
        <p>${store.t('dept_detail_no_products')}</p>
        <a href="#/quote" class="btn-info-action"><i class="fa-solid fa-file-invoice"></i> ${store.t('dept_detail_brochure_btn')}</a>
      </div>
    `;

  const benefitsList = benefits.map(b => `
    <li><i class="fa-solid fa-circle-check"></i> <span>${b}</span></li>
  `).join('');

  return `
    <section class="container department-detail-section">
      <!-- Back button -->
      <a href="#/departments" class="btn-back-departments"><i class="fa-solid fa-arrow-left"></i> ${store.t('btn_back_departments')}</a>

      <div class="dept-detail-header">
        <div class="dept-detail-img">
          <img src="${dept.image}" alt="${title}">
        </div>
        <div class="dept-detail-title-wrapper">
          <h2>${title}</h2>
          <p class="dept-subtitle">${shortDesc}</p>
        </div>
      </div>

      <div class="dept-detail-grid">
        <div class="dept-detail-main">
          <h3>${store.t('dept_detail_desc_title')}</h3>
          <p class="dept-full-desc">${desc}</p>
          <p class="dept-long-details">${details}</p>
          
          ${productSection}
        </div>

        <div class="dept-detail-sidebar">
          <div class="sidebar-box benefits-box">
            <h4>${store.t('dept_detail_sidebar_benefits')}</h4>
            <ul class="benefits-ul">
              ${benefitsList}
            </ul>
          </div>

          <div class="sidebar-box contact-box">
            <h4>${store.t('dept_detail_sidebar_contact')}</h4>
            <p>${store.t('dept_detail_sidebar_contact_desc')}</p>
            <a href="#/quote" class="btn-info-action w-100 text-center"><i class="fa-solid fa-paper-plane"></i> ${store.t('btn_request_quote')}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
