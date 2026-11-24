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
      role: "Senior Java Backend Engineer · Enterprise Systems & AI Tools",
      status: "En activo · Gob. de Cantabria",
      pillCompany: "🏢 Plexus Tech · Gob. Cantabria (Actualidad)",
      pillCore: "☕ Java Backend Specialist · Spring Boot & REST APIs",
      pillAi: "🤖 Claude, Cursor & Antigravity AI",
      pillEdu: "🎓 Ing. en Informática de Sistemas (UAH)",
      pillExp: `⚡ +${expYears} años de experiencia`,
      pillAngular: "💻 Angular (Frontend Secundario)",
      pillLocation: "📍 Madrid / Remoto (España)",
      pillLang: "🌐 Inglés B2 · Español Nativo",
      btnEmail: "Contactar por Email",
      btnLinkedIn: "Perfil de LinkedIn",
      btnGitHub: "GitHub (@ElenaGSSG)",
      btnPrint: "Descargar CV (PDF)"
    },
    summary: {
      tag: "Perfil Profesional",
      title: "Resumen Ejecutivo",
      p1: `<strong>Ingeniera Técnica en Informática de Sistemas</strong> por la Universidad de Alcalá de Henares (UAH) con más de <strong>${expYears} años de trayectoria continuada</strong> (en activo ininterrumpido desde 2011), especializada como ingeniera de software backend en el desarrollo y evolución de plataformas empresariales críticas.`,
      p2: `Sólida especialización en el <strong>ecosistema Java backend (Java 6 a 17, Lambdas y Streams)</strong>, frameworks <strong>Spring y Spring Boot</strong>, arquitectura de microservicios y servicios web <strong>REST y SOAP</strong>, optimización avanzada de persistencia y procedimientos en <strong>Oracle SQL / PL-SQL</strong>, y desarrollo frontend complementario con <strong>Angular</strong>. Integración continua de flujos de desarrollo asistido con Inteligencia Artificial mediante <strong>Claude (Anthropic), Cursor IDE y Google Antigravity</strong>.`,
      p3: `Amplia experiencia técnica en sectores de máxima exigencia operativa y criticidad ciudadana: <strong>Administración Pública</strong> (Gobierno de Cantabria, Seguridad Social), <strong>Banca Internacional</strong> (Deutsche Bank) y <strong>Telecomunicaciones</strong> (Orange), participando activamente en el ciclo de vida del software, diseño técnico, testing riguroso y despliegues productivos.`,
      metricExpVal: `+${expYears}`,
      metricExpLbl: "Años de Trayectoria",
      metricCoreVal: "Java & Spring Boot",
      metricCoreLbl: "Especialidad Core Backend",
      metricSqlVal: "Oracle SQL & PL-SQL",
      metricSqlLbl: "Persistencia & Bases de Datos",
      metricCritVal: "Claude & Cursor AI",
      metricCritLbl: "Desarrollo Asistido con IA"
    },
    timeline: {
      tag: "Carrera Profesional",
      title: "Experiencia Laboral",
      filters: {
        all: "Todas",
        gobierno: "Gob. Cantabria",
        seguridadsocial: "Seguridad Social",
        banca: "Deutsche Bank",
        telecom: "Orange"
      },
      gobierno: {
        role: "Desarrolladora Senior Backend en Gobierno de Cantabria (Puntal)",
        company: "Plexus Tech · Jornada completa · Remoto",
        date: "Oct. 2024 — Actualidad",
        b1: "<strong>Análisis funcional y técnico:</strong> Toma y definición de requisitos, elaboración de especificaciones de casos de uso y diseño y ejecución rigurosa de planes de pruebas de integración para el sistema corporativo Puntal.",
        b2: "<strong>Desarrollo Backend & Core:</strong> Servicios y microservicios backend con <strong>Java y Spring Boot</strong>, junto con desarrollo y mantenimiento de vistas reactivas complementarias en <strong>Angular</strong>.",
        b3: "<strong>Optimización y Persistencia SQL:</strong> Modelado relacional, diseño y optimización de consultas complejas y procedimientos sobre bases de datos <strong>Oracle SQL</strong> de alta disponibilidad."
      },
      seguridadsocial: {
        role: "Analista Desarrolladora Java en Seguridad Social",
        company: "Inetum / GrupoSolutia · Jornada completa · Madrid / Remoto",
        date: "Ene. 2020 — Oct. 2024 (4 años 10 meses)",
        b1: "<strong>Desarrollo en marco AGILE:</strong> Análisis, diseño técnico y desarrollo integral de aplicaciones corporativas Java en entorno Scrum de alta criticidad ciudadana.",
        b2: "<strong>Modernización Java:</strong> Refactorización funcional de módulos legados incorporando expresiones Lambda, streams y buenas prácticas de concurrencia y mantenibilidad.",
        b3: "<strong>Control de calidad y testing:</strong> Ejecución de suites completas de pruebas unitarias e integración en ALM y auditoría estática de calidad y vulnerabilidades con Kiuwan."
      },
      deutsche: {
        role: "Analista Desarrolladora de Aplicaciones Bancarias en Deutsche Bank",
        company: "CGI · Jornada completa · Madrid",
        date: "Ene. 2018 — Ene. 2020 (2 años)",
        b1: "<strong>Ciclo completo de vida de aplicaciones bancarias:</strong> Toma de requerimientos técnicos directamente con stakeholders de la entidad, diseño evolutivo y testing exhaustivo.",
        b2: "<strong>Despliegues y Mantenimiento:</strong> Gestión de despliegues en preproducción y producción en entornos Unix con control de versiones SVN e incidencias en ServiceNow.",
        b3: "<strong>Colaboración técnica e integración:</strong> Soporte de nivel especializado, resolución ágil de incidencias en entornos transaccionales y trabajo conjunto con equipos multidisciplinares."
      },
      orange: {
        role: "Ingeniera de Desarrollo & Testing QA en Telecomunicaciones (Orange)",
        company: "CGI · Jornada completa · Madrid",
        date: "Jun. 2011 — Ene. 2018 (6 años 7 meses)",
        b1: "<strong>Desarrollo evolutivo y correctivo:</strong> Análisis técnico e implementación de requerimientos en plataformas críticas de facturación y gestión operativa de telecomunicaciones.",
        b2: "<strong>Aseguramiento de Calidad (QA Testing):</strong> Creación, diseño y ejecución sistemática de planes y casos de prueba para garantizar la fiabilidad del software en producción.",
        b3: "<strong>Ecosistema Tecnológico:</strong> Mantenimiento y evolución sobre Java, Spring, bases de datos relacionales SQL / PL-SQL, Powerbuilder, C++ y entornos Unix."
      }
    },
    skills: {
      tag: "Especialización",
      title: "Habilidades & Stack Tecnológico",
      backendTitle: "Arquitectura Backend & Core Java",
      aiTitle: "IA & Desarrollo Asistido",
      dataTitle: "Bases de Datos & SQL",
      frontTitle: "Frontend Secundario & Web",
      devopsTitle: "DevOps, QA & Metodologías"
    },
    education: {
      tag: "Academia & Cursos",
      title: "Formación & Certificaciones",
      degreeTitle: "Ingeniería Técnica en Informática de Sistemas",
      degreeSchool: "Universidad de Alcalá de Henares (UAH) · 2014",
      degreeDesc: "Sólida formación en fundamentos computacionales, algoritmia, sistemas distribuidos, bases de datos y arquitectura de software.",
      coursesTitle: "+50 Cursos Técnicos Especializados",
      coursesSchool: "OpenWebinars · Udemy · Coursera · Tutellus · MiriadaX (2014 — Actualidad)",
      coursesDesc: "Formación continuada y actualización constante en tecnologías backend Java, Spring Boot, microservicios, seguridad, frontend y bases de datos.",
      webTitle: "Desarrollo Web con HTML5 y Visual Studio",
      webSchool: "Especialización Acreditada (30 horas)",
      webDesc: "Maquetación moderna, diseño web semántico, accesibilidad, integración cliente-servidor y estándares web W3C.",
      gameTitle: "Especialización en Gráficos 3D, Simulación y Videojuegos",
      gameSchool: "Universidad de Alcalá de Henares (UAH) · 195 horas acreditadas",
      gameDesc: "Introducción y técnicas avanzadas en motores gráficos, realidad virtual, modelado 3D y algoritmia espacial interactiva."
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
      role: "Senior Java Backend Engineer · Enterprise Systems & AI Tools",
      status: "Active · Gov. of Cantabria",
      pillCompany: "🏢 Plexus Tech · Gov. of Cantabria (Present)",
      pillCore: "☕ Java Backend Specialist · Spring Boot & REST APIs",
      pillAi: "🤖 Claude, Cursor & Antigravity AI",
      pillEdu: "🎓 B.S. in Computer Systems Engineering (UAH)",
      pillExp: `⚡ +${expYears} years of experience`,
      pillAngular: "💻 Angular (Secondary Frontend)",
      pillLocation: "📍 Madrid / Remote (Spain)",
      pillLang: "🌐 English B2 · Spanish Native",
      btnEmail: "Contact via Email",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub (@ElenaGSSG)",
      btnPrint: "Download Resume (PDF)"
    },
    summary: {
      tag: "Professional Profile",
      title: "Executive Summary",
      p1: `<strong>Computer Systems Engineer</strong> graduated from Universidad de Alcalá de Henares (UAH) with over <strong>${expYears} years of continuous professional trajectory</strong> (continuously active since 2011), specialized as a backend software engineer developing and scaling mission-critical enterprise platforms.`,
      p2: `Strong specialization in the <strong>Java backend ecosystem (Java 6 to 17, Lambdas, and Streams)</strong>, <strong>Spring & Spring Boot</strong> frameworks, microservices and <strong>REST / SOAP</strong> web services, advanced database tuning and procedures in <strong>Oracle SQL / PL-SQL</strong>, and complementary frontend engineering with <strong>Angular</strong>. Active integration of AI-assisted software engineering workflows utilizing <strong>Claude (Anthropic), Cursor IDE, and Google Antigravity</strong>.`,
      p3: `Extensive technical experience in mission-critical environments: <strong>Public Administration</strong> (Government of Cantabria, Social Security), <strong>International Banking</strong> (Deutsche Bank), and <strong>Telecommunications</strong> (Orange), actively contributing across the full software lifecycle, technical design, rigorous QA testing, and production deployments.`,
      metricExpVal: `+${expYears}`,
      metricExpLbl: "Years of Experience",
      metricCoreVal: "Java & Spring Boot",
      metricCoreLbl: "Core Backend Specialty",
      metricSqlVal: "Oracle SQL & PL-SQL",
      metricSqlLbl: "Database Persistence",
      metricCritVal: "Claude & Cursor AI",
      metricCritLbl: "AI-Assisted Engineering"
    },
    timeline: {
      tag: "Career Path",
      title: "Work Experience",
      filters: {
        all: "All",
        gobierno: "Gov. Cantabria",
        seguridadsocial: "Social Security",
        banca: "Deutsche Bank",
        telecom: "Orange"
      },
      gobierno: {
        role: "Senior Backend Developer at Government of Cantabria (Puntal)",
        company: "Plexus Tech · Full-time · Remote",
        date: "Oct. 2024 — Present",
        b1: "<strong>Functional & Technical Analysis:</strong> Requirements gathering, use case specification, and thorough design and execution of integration test plans for the Puntal public management platform.",
        b2: "<strong>Backend & Core Engineering:</strong> Developing backend services and microservices in <strong>Java and Spring Boot</strong>, with complementary reactive frontend interfaces in <strong>Angular</strong>.",
        b3: "<strong>SQL Optimization & Persistence:</strong> Relational modeling, query optimization, and complex procedures on high-availability <strong>Oracle SQL</strong> databases."
      },
      seguridadsocial: {
        role: "Java Analyst & Software Developer at Social Security Administration",
        company: "Inetum / GrupoSolutia · Full-time · Madrid / Remote",
        date: "Jan. 2020 — Oct. 2024 (4 yrs 10 mos)",
        b1: "<strong>AGILE Development:</strong> Analysis, technical architecture, and development of mission-critical citizen-facing Java applications within an Agile (Scrum) framework.",
        b2: "<strong>Java Modernization:</strong> Refactoring legacy modules with Lambda expressions, streams, and enterprise concurrency best practices.",
        b3: "<strong>Quality Assurance & Testing:</strong> Full test suite execution with HP ALM and static code analysis and security auditing with Kiuwan."
      },
      deutsche: {
        role: "Banking Software Applications Analyst at Deutsche Bank",
        company: "CGI · Full-time · Madrid",
        date: "Jan. 2018 — Jan. 2020 (2 years)",
        b1: "<strong>End-to-End Banking Applications:</strong> Direct requirement gathering with corporate banking stakeholders, evolutionary development, and rigorous testing.",
        b2: "<strong>Deployments & Maintenance:</strong> CI/CD and deployment management in pre-production and production Unix environments with SVN and ServiceNow ticketing.",
        b3: "<strong>Technical Collaboration & Integration:</strong> Specialized technical support, resolving incidents in high-concurrency transactional environments, and close alignment with cross-functional teams."
      },
      orange: {
        role: "Software Development & QA Testing Engineer at Orange Telecom",
        company: "CGI · Full-time · Madrid",
        date: "Jun. 2011 — Jan. 2018 (6 yrs 7 mos)",
        b1: "<strong>Evolutionary & Corrective Engineering:</strong> Technical design and feature implementation in telecom billing and operational core platforms.",
        b2: "<strong>Quality Assurance & Testing:</strong> Designing, drafting, and systematically running functional test suites to ensure maximum release stability.",
        b3: "<strong>Core Tech Stack:</strong> Maintenance and enhancements using Java, Spring, SQL / PL-SQL, Powerbuilder, C++, and Unix environments."
      }
    },
    skills: {
      tag: "Specialization",
      title: "Technical Stack & Core Skills",
      backendTitle: "Backend Architecture & Core Java",
      aiTitle: "AI & Assisted Engineering",
      dataTitle: "Databases & SQL Engineering",
      frontTitle: "Secondary Frontend & Web",
      devopsTitle: "DevOps, QA & Agile Methodologies"
    },
    education: {
      tag: "Academia & Courses",
      title: "Education & Certifications",
      degreeTitle: "B.S. in Computer Systems Engineering",
      degreeSchool: "Universidad de Alcalá de Henares (UAH) · 2014",
      degreeDesc: "Comprehensive engineering curriculum in computer fundamentals, algorithms, distributed systems, relational databases, and enterprise software architecture.",
      coursesTitle: "+50 Accredited Technical Certifications",
      coursesSchool: "OpenWebinars · Udemy · Coursera · Tutellus · MiriadaX (2014 — Present)",
      coursesDesc: "Continuous learning and professional specialization in Java backend ecosystems, Spring Boot, REST APIs, security, and cloud architectures.",
      webTitle: "Modern Web Development with HTML5 & Visual Studio",
      webSchool: "Accredited Specialization (30 hours)",
      webDesc: "Semantic web layout, accessibility, responsive UI, client-server integration, and W3C industry standards.",
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
let currentLang = localStorage.getItem('elenags_lang') || 'es';

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
  document.getElementById('btn-hero-print').innerHTML = `<span>📥</span> ${t.hero.btnPrint}`;

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
  document.getElementById('filter-gobierno').textContent = t.timeline.filters.gobierno;
  document.getElementById('filter-seguridadsocial').textContent = t.timeline.filters.seguridadsocial;
  document.getElementById('filter-banca').textContent = t.timeline.filters.banca;
  document.getElementById('filter-telecom').textContent = t.timeline.filters.telecom;

  // Timeline Jobs
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
