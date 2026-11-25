/**
 * Elena García Sánchez — Interactive CV Application
 * Features:
 * - Bilingual Switcher (ES / EN) with LocalStorage persistence
 * - Dynamic Experience Years Calculator (currentYear - 2011)
 * - Constellation Particle Canvas Background (Amethyst / Violet / Fuchsia / Cyan)
 * - Timeline Category Filtering
 * - Print / PDF Trigger
 */

// 1. Dynamic Experience Calculator
const START_YEAR = 2011;
const currentYear = new Date().getFullYear();
const expYears = currentYear - START_YEAR;

// 2. Bilingual Dictionary
const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto"
    },
    hero: {
      role: "Senior Java Backend Engineer · Ecosistema Java, Spring Boot & Herramientas de IA",
      status: "En activo · Gob. de Galicia (Plexus Tech)",
      pillCompany: "🏢 Plexus Tech · Gob. de Galicia (Actualidad)",
      pillCore: "☕ Especialista Backend Java 21 · Spring Boot & APIs REST",
      pillAi: "🚀 Vibecoding & IA: Claude (Skills/Workflows) + Rovo",
      pillEdu: "🎓 Ing. Técnica en Informática de Sistemas (UAH)",
      pillExp: `⚡ +${expYears} años de experiencia`,
      pillAngular: "💻 Angular (Frontend Complementario)",
      pillLocation: "📍 Madrid / Remoto (España)",
      pillLang: "🌐 Inglés B2 · Español Nativo",
      btnEmail: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnGitHub: "GitHub (@ElenaGSSG)",
      btnPrint: "Descargar CV (PDF)",
      cvPdfPath: "assets/docs/CV_Elena_Garcia_Sanchez.pdf",
      cvPdfName: "CV_Elena_Garcia_Sanchez.pdf"
    },
    summary: {
      tag: "Perfil Profesional",
      title: "Resumen Ejecutivo",
      p1: `<strong>Ingeniera Técnica en Informática de Sistemas</strong> por la Universidad de Alcalá de Henares (UAH), con más de <strong>${expYears} años de experiencia profesional</strong> en ingeniería de software y desarrollo backend (en activo desde 2011).`,
      p2: `Especializada en el <strong>ecosistema Java (desde Java 6 hasta Java 21, Lambdas y Streams)</strong>, arquitectura de microservicios con <strong>Spring y Spring Boot</strong>, diseño e integración de servicios <strong>REST y SOAP</strong>, y optimización sobre bases de datos relacionales en <strong>Oracle SQL y PL/SQL</strong>. En mi trayectoria reciente aplico metodologías de <strong>vibecoding</strong> y desarrollo aumentado mediante <strong>Claude</strong> (con <em>skills</em> y <em>workflows</em> estructurados) y <strong>Atlassian Rovo</strong> para acelerar drásticamente el análisis de código, la calidad de refactorización y la cobertura de pruebas, con soporte complementario en <strong>Angular</strong>.`,
      p3: `A lo largo de mi trayectoria he trabajado en entornos de gran envergadura y alta exigencia técnica en el <strong>sector público</strong> (Gobierno de Galicia en colaboración con NTT Data, Gobierno de Cantabria y Seguridad Social), <strong>banca internacional</strong> (Deutsche Bank) y <strong>telecomunicaciones</strong> (Orange), participando activamente en el análisis técnico, desarrollo, pruebas de integración y despliegues en producción.`,
      metricExpVal: `+${expYears}`,
      metricExpLbl: "Años de Experiencia",
      metricCoreVal: "Java & Spring Boot",
      metricCoreLbl: "Especialidad Core Backend",
      metricSqlVal: "Oracle SQL & PL-SQL",
      metricSqlLbl: "Bases de Datos & Persistencia",
      metricCritVal: "Claude, Rovo & Vibecoding",
      metricCritLbl: "Desarrollo Aumentado con IA"
    },
    timeline: {
      tag: "Carrera Profesional",
      title: "Experiencia Laboral",
      filters: {
        all: "Todas",
        galicia: "Gob. Galicia",
        gobierno: "Gob. Cantabria",
        seguridadsocial: "Seguridad Social",
        banca: "Deutsche Bank",
        telecom: "Orange"
      },
      galicia: {
        role: "Desarrolladora Senior Backend & AI Workflows en Gobierno de Galicia",
        company: "Plexus Tech (en colaboración con NTT Data) · Jornada completa · Remoto",
        date: "Jun. 2026 — Actualidad",
        b1: "<strong>Ingeniería Backend con Java 21 & Spring Boot:</strong> Diseño, implementación y evolución de microservicios y APIs REST de alto rendimiento en equipo de gran escala técnica en colaboración con <strong>NTT Data</strong>, garantizando escalabilidad y robustez.",
        b2: "<strong>Vibecoding & Flujos Asistidos con IA:</strong> Adopción de desarrollo asistido de vanguardia mediante <strong>Claude</strong> (aplicando flujos con <em>skills</em> y <em>workflows</em> estructurados) y <strong>Atlassian Rovo</strong>, logrando un salto drástico en productividad, análisis exploratorio de código, generación de baterías de tests y refactorizaciones.",
        b3: "<strong>Persistencia Relacional & Frontend:</strong> Modelado y optimización sobre <strong>Oracle SQL</strong>, soporte complementario a vistas en <strong>Angular</strong> y ciclo de integración continua bajo metodología <strong>Gitflow</strong>."
      },
      gobierno: {
        role: "Desarrolladora Senior Backend en Gobierno de Cantabria (Puntal)",
        company: "Plexus Tech · Jornada completa · Remoto",
        date: "Oct. 2024 — Jun. 2026 (1 año 9 meses)",
        b1: "<strong>Análisis funcional y técnico:</strong> Toma de requisitos, definición de especificaciones y casos de uso, y diseño y ejecución de planes de pruebas de integración para la plataforma de gestión corporativa Puntal.",
        b2: "<strong>Desarrollo Backend:</strong> Implementación de servicios y microservicios en <strong>Java con Spring Boot</strong>, junto con el soporte y evolución de vistas complementarias en <strong>Angular</strong>.",
        b3: "<strong>Bases de Datos & Persistencia:</strong> Modelado relacional, diseño y optimización de consultas complejas y procedimientos sobre bases de datos <strong>Oracle SQL</strong>."
      },
      seguridadsocial: {
        role: "Analista Desarrolladora Java en Seguridad Social",
        company: "Inetum / GrupoSolutia · Jornada completa · Madrid / Remoto",
        date: "Ene. 2020 — Oct. 2024 (4 años 10 meses)",
        b1: "<strong>Desarrollo ágil (Scrum):</strong> Análisis y desarrollo de aplicativos corporativos Java para la Seguridad Social, trabajando en sprints quincenales y entregas continuas.",
        b2: "<strong>Modernización Java:</strong> Refactorización y evolución de módulos legados a versiones modernas de Java, incorporando expresiones Lambda, streams y concurrencia eficiente.",
        b3: "<strong>Control de calidad y pruebas:</strong> Mantenimiento y ejecución de suites de pruebas con HP ALM, y auditoría de calidad y vulnerabilidades de código con Kiuwan."
      },
      deutsche: {
        role: "Analista Desarrolladora de Aplicaciones Bancarias en Deutsche Bank",
        company: "CGI · Jornada completa · Madrid",
        date: "Ene. 2018 — Ene. 2020 (2 años)",
        b1: "<strong>Aplicaciones bancarias core:</strong> Toma de requisitos directamente con usuarios de negocio, desarrollo de evolutivos y pruebas funcionales en sistemas transaccionales.",
        b2: "<strong>Operación y despliegues:</strong> Gestión de despliegues en entornos Unix, control de versiones con SVN y seguimiento de incidencias con ServiceNow.",
        b3: "<strong>Soporte y coordinación:</strong> Resolución de incidencias en producción y coordinación técnica con equipos de infraestructura y arquitectura."
      },
      orange: {
        role: "Ingeniera de Desarrollo & Testing QA en Telecomunicaciones (Orange)",
        company: "CGI · Jornada completa · Madrid",
        date: "Jun. 2011 — Ene. 2018 (6 años 7 meses)",
        b1: "<strong>Desarrollo y mantenimiento:</strong> Análisis técnico, corrección de incidencias y desarrollo de evolutivos en plataformas de facturación y gestión operativa de telecomunicaciones.",
        b2: "<strong>Aseguramiento de Calidad (QA):</strong> Diseño, preparación de datos de prueba y ejecución sistemática de baterías de test funcionales antes de despliegues productivos.",
        b3: "<strong>Ecosistema tecnológico heterogéneo:</strong> Mantenimiento y evolución sobre Java, Spring, PL/SQL, Powerbuilder, C++ y entornos Unix."
      }
    },
    skills: {
      tag: "Especialización",
      title: "Habilidades & Stack Tecnológico",
      backendTitle: "Arquitectura Backend & Core Java",
      aiTitle: "IA, Vibecoding & Flujos Asistidos",
      dataTitle: "Bases de Datos & SQL",
      frontTitle: "Frontend Complementario & Web",
      devopsTitle: "DevOps, QA & Metodologías"
    },
    education: {
      tag: "Academia & Cursos",
      title: "Formación & Certificaciones",
      degreeTitle: "Ingeniería Técnica en Informática de Sistemas",
      degreeSchool: "Universidad de Alcalá de Henares (UAH) · 2014",
      degreeDesc: "Fundamentos de la computación, algoritmia, sistemas operativos, bases de datos y arquitectura de software.",
      coursesTitle: "+50 Cursos Técnicos Acreditados",
      coursesSchool: "OpenWebinars · Udemy · Coursera · Tutellus · MiriadaX (2014 — Actualidad)",
      coursesDesc: "Formación continua y actualización constante en tecnologías backend Java, Spring Boot, microservicios, seguridad y buenas prácticas de desarrollo.",
      webTitle: "Desarrollo Web con HTML5 y Visual Studio",
      webSchool: "Especialización Acreditada (30 horas)",
      webDesc: "Maquetación semántica, diseño web moderno, accesibilidad, integración cliente-servidor y estándares W3C.",
      gameTitle: "Especialización en Gráficos 3D, Simulación y Videojuegos",
      gameSchool: "Universidad de Alcalá de Henares (UAH) · 195 horas acreditadas",
      gameDesc: "Introducción y técnicas en motores gráficos, realidad virtual, modelado 3D y algoritmia espacial interactiva."
    },
    contact: {
      tag: "Comunicación",
      title: "Contacto Profesional",
      emailTitle: "Correo Electrónico",
      phoneTitle: "Teléfono Móvil",
      locationTitle: "Ubicación",
      locationVal: "Madrid, España (Disponible en Remoto)",
      linkedInTitle: "LinkedIn",
      githubTitle: "GitHub"
    },
    footer: {
      copy: `© ${currentYear} Elena García Sánchez · Senior Java Backend Engineer · Madrid, España.`
    }
  },
  en: {
    nav: {
      about: "About Me",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      role: "Senior Java Backend Engineer · Java Ecosystem, Spring Boot & AI Tools",
      status: "Active · Gov. of Galicia (Plexus Tech)",
      pillCompany: "🏢 Plexus Tech · Gov. of Galicia (Present)",
      pillCore: "☕ Java 21 Backend Specialist · Spring Boot & REST APIs",
      pillAi: "🚀 Vibecoding & AI: Claude (Skills/Workflows) + Rovo",
      pillEdu: "🎓 B.S. in Computer Systems Engineering (UAH)",
      pillExp: `⚡ +${expYears} years of experience`,
      pillAngular: "💻 Angular (Complementary Frontend)",
      pillLocation: "📍 Madrid / Remote (Spain)",
      pillLang: "🌐 English B2 · Spanish Native",
      btnEmail: "Contact via Email",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub (@ElenaGSSG)",
      btnPrint: "Download CV (PDF)",
      cvPdfPath: "assets/docs/CV_Elena_Garcia_Sanchez_EN.pdf",
      cvPdfName: "CV_Elena_Garcia_Sanchez_EN.pdf"
    },
    summary: {
      tag: "Professional Profile",
      title: "Executive Summary",
      p1: `<strong>Computer Systems Engineer</strong> graduated from Universidad de Alcalá de Henares (UAH) with over <strong>${expYears} years of professional experience</strong> in software engineering and backend development (active since 2011).`,
      p2: `Specialized in the <strong>Java ecosystem (Java 6 through 21, Lambdas, and Streams)</strong>, microservices architecture with <strong>Spring and Spring Boot</strong>, <strong>REST APIs and SOAP web services</strong>, and relational database optimization with <strong>Oracle SQL and PL/SQL</strong>. In my recent roles I actively practice <strong>vibecoding</strong> and AI-augmented software engineering using <strong>Claude</strong> (leveraging structured <em>skills</em> and <em>workflows</em>) and <strong>Atlassian Rovo</strong> to dramatically accelerate code exploration, refactoring velocity, and unit test suites, alongside complementary frontend support in <strong>Angular</strong>.`,
      p3: `Proven track record in high-impact enterprise environments across <strong>public administration</strong> (Government of Galicia in collaboration with NTT Data, Government of Cantabria, and Social Security), <strong>international banking</strong> (Deutsche Bank), and <strong>telecommunications</strong> (Orange), contributing across technical analysis, core backend development, integration testing, and production releases.`,
      metricExpVal: `+${expYears}`,
      metricExpLbl: "Years of Experience",
      metricCoreVal: "Java & Spring Boot",
      metricCoreLbl: "Core Backend Specialty",
      metricSqlVal: "Oracle SQL & PL-SQL",
      metricSqlLbl: "Databases & Persistence",
      metricCritVal: "Claude, Rovo & Vibecoding",
      metricCritLbl: "AI-Augmented Engineering"
    },
    timeline: {
      tag: "Career Path",
      title: "Work Experience",
      filters: {
        all: "All",
        galicia: "Gov. Galicia",
        gobierno: "Gov. Cantabria",
        seguridadsocial: "Social Security",
        banca: "Deutsche Bank",
        telecom: "Orange"
      },
      galicia: {
        role: "Senior Backend Developer & AI Workflows at Government of Galicia",
        company: "Plexus Tech (in collaboration with NTT Data) · Full-time · Remote",
        date: "Jun. 2026 — Present",
        b1: "<strong>Backend Engineering with Java 21 & Spring Boot:</strong> Designing, building, and optimizing high-performance microservices and REST APIs within a large-scale engineering team in partnership with <strong>NTT Data</strong>.",
        b2: "<strong>Vibecoding & AI-Assisted Workflows:</strong> Pioneering AI-augmented workflows using <strong>Claude</strong> (structured <em>skills</em> and <em>workflows</em>) and <strong>Atlassian Rovo</strong>, drastically boosting development velocity, architectural analysis, unit test generation, and continuous refactoring.",
        b3: "<strong>Relational Persistence & Frontend:</strong> Advanced modeling and query tuning on <strong>Oracle SQL</strong>, UI support in <strong>Angular</strong>, and collaborative CI/CD under <strong>Gitflow</strong>."
      },
      gobierno: {
        role: "Senior Backend Developer at Government of Cantabria (Puntal)",
        company: "Plexus Tech · Full-time · Remote",
        date: "Oct. 2024 — Jun. 2026 (1 yr 9 mos)",
        b1: "<strong>Functional & Technical Analysis:</strong> Requirements gathering, use case specification, and integration test planning for the Puntal public management platform.",
        b2: "<strong>Backend Development:</strong> Implementing core services and microservices in <strong>Java with Spring Boot</strong>, alongside complementary frontend views in <strong>Angular</strong>.",
        b3: "<strong>Databases & Persistence:</strong> Relational modeling, query optimization, and complex procedures on <strong>Oracle SQL</strong> databases."
      },
      seguridadsocial: {
        role: "Java Analyst & Software Developer at Social Security Administration",
        company: "Inetum / GrupoSolutia · Full-time · Madrid / Remote",
        date: "Jan. 2020 — Oct. 2024 (4 yrs 10 mos)",
        b1: "<strong>Agile Development (Scrum):</strong> Analysis and development of citizen-facing Java applications for Social Security, operating in bi-weekly sprints.",
        b2: "<strong>Java Modernization:</strong> Refactoring legacy modules to modern Java standards using Lambda expressions, streams, and concurrency best practices.",
        b3: "<strong>Quality Assurance:</strong> Maintaining and executing test suites with HP ALM, and conducting static code analysis and vulnerability auditing with Kiuwan."
      },
      deutsche: {
        role: "Banking Software Applications Analyst at Deutsche Bank",
        company: "CGI · Full-time · Madrid",
        date: "Jan. 2018 — Jan. 2020 (2 years)",
        b1: "<strong>Core Banking Applications:</strong> Direct requirement gathering with business stakeholders, evolutionary development, and functional testing on transactional systems.",
        b2: "<strong>Operations & Deployments:</strong> Deployment management in Unix environments, SVN version control, and incident tracking via ServiceNow.",
        b3: "<strong>Support & Collaboration:</strong> Production issue troubleshooting and cross-functional collaboration with infrastructure and architecture teams."
      },
      orange: {
        role: "Software Development & QA Testing Engineer at Orange Telecom",
        company: "CGI · Full-time · Madrid",
        date: "Jun. 2011 — Jan. 2018 (6 yrs 7 mos)",
        b1: "<strong>Development & Maintenance:</strong> Technical analysis, bug fixing, and feature enhancements for telecom billing and operational platforms.",
        b2: "<strong>Quality Assurance (QA):</strong> Designing test scenarios, preparing test datasets, and systematically executing functional test suites prior to production releases.",
        b3: "<strong>Heterogeneous Tech Stack:</strong> Maintenance and evolution across Java, Spring, PL/SQL, Powerbuilder, C++, and Unix environments."
      }
    },
    skills: {
      tag: "Specialization",
      title: "Technical Stack & Core Skills",
      backendTitle: "Backend Architecture & Core Java",
      aiTitle: "AI, Vibecoding & Assisted Workflows",
      dataTitle: "Databases & SQL Engineering",
      frontTitle: "Complementary Frontend & Web",
      devopsTitle: "DevOps, QA & Agile Methodologies"
    },
    education: {
      tag: "Academia & Courses",
      title: "Education & Certifications",
      degreeTitle: "B.S. in Computer Systems Engineering",
      degreeSchool: "Universidad de Alcalá de Henares (UAH) · 2014",
      degreeDesc: "Comprehensive foundations in computer science, algorithms, operating systems, relational databases, and enterprise software architecture.",
      coursesTitle: "+50 Accredited Technical Certifications",
      coursesSchool: "OpenWebinars · Udemy · Coursera · Tutellus · MiriadaX (2014 — Present)",
      coursesDesc: "Continuous professional learning in Java backend ecosystems, Spring Boot, microservices, security, and clean code practices.",
      webTitle: "Modern Web Development with HTML5 & Visual Studio",
      webSchool: "Accredited Specialization (30 hours)",
      webDesc: "Semantic web layout, modern UI design, accessibility, client-server integration, and W3C industry standards.",
      gameTitle: "Specialization in 3D Graphics, Simulation & Games",
      gameSchool: "Universidad de Alcalá de Henares (UAH) · 195 accredited hours",
      gameDesc: "Introductory and advanced techniques in rendering engines, virtual reality, 3D modeling, and interactive spatial algorithms."
    },
    contact: {
      tag: "Get in Touch",
      title: "Professional Contact",
      emailTitle: "Email Address",
      phoneTitle: "Mobile Phone",
      locationTitle: "Location",
      locationVal: "Madrid, Spain (Available for Remote)",
      linkedInTitle: "LinkedIn",
      githubTitle: "GitHub"
    },
    footer: {
      copy: `© ${currentYear} Elena García Sánchez · Senior Java Backend Engineer · Madrid, Spain.`
    }
  }
};

// 3. Language State & Switcher
const urlParams = new URLSearchParams(window.location.search);
const langParam = urlParams.get('lang');
let currentLang = (langParam === 'en' || langParam === 'es') ? langParam : (localStorage.getItem('elenags_lang') || 'es');

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('elenags_lang', lang);

  // Update switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const t = translations[lang];

  // Nav
  document.getElementById('nav-about').textContent = t.nav.about;
  document.getElementById('nav-experience').textContent = t.nav.experience;
  document.getElementById('nav-skills').textContent = t.nav.skills;
  document.getElementById('nav-education').textContent = t.nav.education;
  document.getElementById('nav-contact').textContent = t.nav.contact;

  // Hero
  document.getElementById('hero-role').textContent = t.hero.role;
  document.getElementById('hero-status').textContent = t.hero.status;
  document.getElementById('pill-company').textContent = t.hero.pillCompany;
  document.getElementById('pill-core').textContent = t.hero.pillCore;
  if (document.getElementById('pill-ai')) {
    document.getElementById('pill-ai').textContent = t.hero.pillAi;
  }
  document.getElementById('pill-edu').textContent = t.hero.pillEdu;
  document.getElementById('pill-exp').textContent = t.hero.pillExp;
  if (document.getElementById('pill-angular')) {
    document.getElementById('pill-angular').textContent = t.hero.pillAngular;
  }
  document.getElementById('pill-location').textContent = t.hero.pillLocation;
  document.getElementById('pill-lang').textContent = t.hero.pillLang;
  document.getElementById('btn-hero-email').innerHTML = `<span>✉️</span> ${t.hero.btnEmail}`;
  document.getElementById('btn-hero-linkedin').innerHTML = `<span>💼</span> ${t.hero.btnLinkedIn}`;
  document.getElementById('btn-hero-github').innerHTML = `<span>🐙</span> ${t.hero.btnGitHub}`;
  const btnPrint = document.getElementById('btn-hero-print');
  if (btnPrint) {
    btnPrint.innerHTML = `<span>📥</span> ${t.hero.btnPrint}`;
    if (t.hero.cvPdfPath) btnPrint.setAttribute('href', t.hero.cvPdfPath);
    if (t.hero.cvPdfName) btnPrint.setAttribute('download', t.hero.cvPdfName);
  }

  // Summary
  document.getElementById('summary-tag').textContent = t.summary.tag;
  document.getElementById('summary-title').textContent = t.summary.title;
  document.getElementById('summary-p1').innerHTML = t.summary.p1;
  document.getElementById('summary-p2').innerHTML = t.summary.p2;
  document.getElementById('summary-p3').innerHTML = t.summary.p3;
  document.getElementById('metric-exp-val').textContent = t.summary.metricExpVal;
  document.getElementById('metric-exp-lbl').textContent = t.summary.metricExpLbl;
  document.getElementById('metric-core-val').textContent = t.summary.metricCoreVal;
  document.getElementById('metric-core-lbl').textContent = t.summary.metricCoreLbl;
  document.getElementById('metric-sql-val').textContent = t.summary.metricSqlVal;
  document.getElementById('metric-sql-lbl').textContent = t.summary.metricSqlLbl;
  document.getElementById('metric-crit-val').textContent = t.summary.metricCritVal;
  document.getElementById('metric-crit-lbl').textContent = t.summary.metricCritLbl;

  // Timeline
  document.getElementById('timeline-tag').textContent = t.timeline.tag;
  document.getElementById('timeline-title').textContent = t.timeline.title;
  document.getElementById('filter-all').textContent = t.timeline.filters.all;
  if (document.getElementById('filter-galicia')) {
    document.getElementById('filter-galicia').textContent = t.timeline.filters.galicia;
  }
  document.getElementById('filter-gobierno').textContent = t.timeline.filters.gobierno;
  document.getElementById('filter-seguridadsocial').textContent = t.timeline.filters.seguridadsocial;
  document.getElementById('filter-banca').textContent = t.timeline.filters.banca;
  document.getElementById('filter-telecom').textContent = t.timeline.filters.telecom;

  // Timeline Jobs
  if (document.getElementById('galicia-role')) {
    document.getElementById('galicia-role').textContent = t.timeline.galicia.role;
    document.getElementById('galicia-company').textContent = t.timeline.galicia.company;
    document.getElementById('galicia-date').textContent = t.timeline.galicia.date;
    document.getElementById('galicia-b1').innerHTML = t.timeline.galicia.b1;
    document.getElementById('galicia-b2').innerHTML = t.timeline.galicia.b2;
    document.getElementById('galicia-b3').innerHTML = t.timeline.galicia.b3;
  }

  document.getElementById('gob-role').textContent = t.timeline.gobierno.role;
  document.getElementById('gob-company').textContent = t.timeline.gobierno.company;
  document.getElementById('gob-date').textContent = t.timeline.gobierno.date;
  document.getElementById('gob-b1').innerHTML = t.timeline.gobierno.b1;
  document.getElementById('gob-b2').innerHTML = t.timeline.gobierno.b2;
  document.getElementById('gob-b3').innerHTML = t.timeline.gobierno.b3;

  document.getElementById('ss-role').textContent = t.timeline.seguridadsocial.role;
  document.getElementById('ss-company').textContent = t.timeline.seguridadsocial.company;
  document.getElementById('ss-date').textContent = t.timeline.seguridadsocial.date;
  document.getElementById('ss-b1').innerHTML = t.timeline.seguridadsocial.b1;
  document.getElementById('ss-b2').innerHTML = t.timeline.seguridadsocial.b2;
  document.getElementById('ss-b3').innerHTML = t.timeline.seguridadsocial.b3;

  document.getElementById('db-role').textContent = t.timeline.deutsche.role;
  document.getElementById('db-company').textContent = t.timeline.deutsche.company;
  document.getElementById('db-date').textContent = t.timeline.deutsche.date;
  document.getElementById('db-b1').innerHTML = t.timeline.deutsche.b1;
  document.getElementById('db-b2').innerHTML = t.timeline.deutsche.b2;
  document.getElementById('db-b3').innerHTML = t.timeline.deutsche.b3;

  document.getElementById('orange-role').textContent = t.timeline.orange.role;
  document.getElementById('orange-company').textContent = t.timeline.orange.company;
  document.getElementById('orange-date').textContent = t.timeline.orange.date;
  document.getElementById('orange-b1').innerHTML = t.timeline.orange.b1;
  document.getElementById('orange-b2').innerHTML = t.timeline.orange.b2;
  document.getElementById('orange-b3').innerHTML = t.timeline.orange.b3;

  // Skills
  document.getElementById('skills-tag').textContent = t.skills.tag;
  document.getElementById('skills-title').textContent = t.skills.title;
  document.getElementById('cat-backend-title').textContent = t.skills.backendTitle;
  if (document.getElementById('cat-ai-title')) {
    document.getElementById('cat-ai-title').textContent = t.skills.aiTitle;
  }
  document.getElementById('cat-data-title').textContent = t.skills.dataTitle;
  document.getElementById('cat-front-title').textContent = t.skills.frontTitle;
  document.getElementById('cat-devops-title').textContent = t.skills.devopsTitle;

  // Education
  document.getElementById('edu-tag').textContent = t.education.tag;
  document.getElementById('edu-title').textContent = t.education.title;
  document.getElementById('edu-deg-title').textContent = t.education.degreeTitle;
  document.getElementById('edu-deg-school').textContent = t.education.degreeSchool;
  document.getElementById('edu-deg-desc').textContent = t.education.degreeDesc;
  document.getElementById('edu-courses-title').textContent = t.education.coursesTitle;
  document.getElementById('edu-courses-school').textContent = t.education.coursesSchool;
  document.getElementById('edu-courses-desc').textContent = t.education.coursesDesc;
  document.getElementById('edu-web-title').textContent = t.education.webTitle;
  document.getElementById('edu-web-school').textContent = t.education.webSchool;
  document.getElementById('edu-web-desc').textContent = t.education.webDesc;
  document.getElementById('edu-game-title').textContent = t.education.gameTitle;
  document.getElementById('edu-game-school').textContent = t.education.gameSchool;
  document.getElementById('edu-game-desc').textContent = t.education.gameDesc;

  // Contact
  document.getElementById('contact-tag').textContent = t.contact.tag;
  document.getElementById('contact-title').textContent = t.contact.title;
  document.getElementById('contact-email-title').textContent = t.contact.emailTitle;
  if (document.getElementById('contact-phone-title')) {
    document.getElementById('contact-phone-title').textContent = t.contact.phoneTitle;
  }
  document.getElementById('contact-loc-title').textContent = t.contact.locationTitle;
  document.getElementById('contact-loc-val').textContent = t.contact.locationVal;

  // Footer
  document.getElementById('footer-copy').textContent = t.footer.copy;
}

// 4. Timeline Category Filter
function filterTimeline(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// 5. Interactive Constellation Canvas
function initConstellationCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
  const particles = [];
  const colors = ['#8b5cf6', '#a855f7', '#ec4899', '#0284c7', '#6366f1'];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.45 + 0.35
    });
  }

  let mouse = { x: null, y: null, maxDist: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connect with mouse
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#8b5cf6';
          ctx.globalAlpha = (1 - dist / mouse.maxDist) * 0.45;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Connect neighbor particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#c4b5fd';
          ctx.globalAlpha = (1 - dist / 110) * 0.35;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initConstellationCanvas();
});
