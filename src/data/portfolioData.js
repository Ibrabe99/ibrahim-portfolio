export const portfolioData = {
  personal: {
    domain: 'ibrahimmb.me',
    websiteUrl: 'https://ibrahimmb.me',
    email: 'ibrahimbanour99@gmail.com',
    phone: '+218 92-4624861',
    tel: 'tel:+218924624861',
    whatsapp: 'https://wa.me/218924624861',
    github: 'https://github.com/Ibrabe99',
    githubHandle: 'github.com/Ibrabe99',
    linkedin: 'https://www.linkedin.com/in/ibrahim-mohammed-a0a09523b/',
    instagram: 'https://www.instagram.com/ibrahim_mb99?mdxt=b3FkMjBhNnpxb2tk',
    facebook: 'https://www.facebook.com/profile.php?id=100063673272012',
    tiktok: 'https://www.tiktok.com/@ibrahim_mb99',
    youtube: 'https://www.youtube.com/@ibrahimmohammed4279',
    cvUrl: './IBRAHIM_CV.pdf',
    socials: [
      {
        id: 'whatsapp',
        name: 'WhatsApp',
        handle: '+218 92-4624861',
        url: 'https://wa.me/218924624861',
      },
      {
        id: 'github',
        name: 'GitHub',
        handle: '@Ibrabe99',
        url: 'https://github.com/Ibrabe99',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        handle: 'Ibrahim Mohammed',
        url: 'https://www.linkedin.com/in/ibrahim-mohammed-a0a09523b/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        handle: '@ibrahim_mb99',
        url: 'https://www.instagram.com/ibrahim_mb99?mdxt=b3FkMjBhNnpxb2tk',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        handle: 'Ibrahim Mohammed',
        url: 'https://www.facebook.com/profile.php?id=100063673272012',
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        handle: '@ibrahim_mb99',
        url: 'https://www.tiktok.com/@ibrahim_mb99',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        handle: '@ibrahimmohammed4279',
        url: 'https://www.youtube.com/@ibrahimmohammed4279',
      },
    ],
  },

  ar: {
    dir: 'rtl',
    langLabel: 'EN',
    langName: 'English',
    name: 'إبراهيم بالنور',
    role: 'مطور ويب متكامل — Full Stack Developer',
    location: 'طرابلس، ليبيا',
    heroTitle: 'إبراهيم بالنور',
    heroSubtitle: 'مطور ويب متكامل (Laravel & React)',
    heroBio:
      'أقوم ببناء وتطوير تطبيقات الويب، لوحات التحكم الإدارية (Filament v3)، والواجهات البرمجية (RESTful APIs) باستخدام Laravel و React JS، مع التركيز على البساطة، الأداء العالي، وسهولة الاستخدام.',
    ctaProjects: 'تصفح الأعمال',
    ctaContact: 'تواصل معي',
    ctaDownloadCv: 'السيرة الذاتية (PDF)',

    nav: [
      { id: 'hero', label: 'الرئيسية' },
      { id: 'about', label: 'نبذة عني' },
      { id: 'services', label: 'الخدمات' },
      { id: 'skills', label: 'المهارات' },
      { id: 'projects', label: 'الأعمال' },
      { id: 'contact', label: 'تواصل' },
    ],

    about: {
      title: 'نبذة عني والتعليم',
      description:
        'مطور Full Stack متخصص في بيئة Laravel وتكاملها مع React و Livewire. أعمل على بناء لوحات تحكم إنتاجية، واجهات برمجية متينة، وتطبيقات ويب ومكتب وموبايل متكاملة.',
      stats: [
        { value: '+10', label: 'مشاريع وأنظمة منجزة' },
        { value: '+4', label: 'عملاء راضون' },
        { value: '+16', label: 'تقنية وأداة برمجية' },
        { value: '100%', label: 'التزام بالجودة والأداء' },
      ],
      experienceItems: [
        {
          title: 'تطوير الخلفية ولوحات التحكم',
          desc: 'بناء أنظمة إدارة متكاملة ولوحات تحكم باستخدام Laravel 11 و Filament v3 مع إدارة الصلاحيات والبيانات.',
        },
        {
          title: 'الأنظمة الفورية ومحركات البحث',
          desc: 'ربط التنبيهات الحية عبر Laravel Reverb و Redis مع البحث الفوري السريع باستخدام Meilisearch.',
        },
        {
          title: 'تطوير الواجهات وتعدد المنصات',
          desc: 'تصميم واجهات مستخدم نظيفة بـ React JS و Livewire وربطها عبر Sanctum REST APIs مع تطبيقات الموبايل وسطح المكتب.',
        },
      ],
      educationTitle: 'التعليم الأكاديمي',
      educationDegree: 'بكالوريوس تقنية المعلومات',
      educationUni: 'الجامعة الليبية المفتوحة — طرابلس',
      educationDate: 'التخرج المتوقع: ربيع 2027',
      languagesTitle: 'اللغات',
      languages: [
        { name: 'العربية', level: 'اللغة الأم' },
        { name: 'الإنجليزية', level: 'متوسط' },
      ],
    },

    servicesSection: {
      title: 'الخدمات التي أقدمها',
      description: 'حلول برمجية متكاملة للشركات والأفراد من التصميم المعماري وحتى الإطلاق.',
      items: [
        {
          title: 'أنظمة الإدارة ولوحات التحكم',
          tech: 'Laravel 11 · Filament v3 · MySQL',
          desc: 'بناء لوحات تحكم إدارية ومحاسبية متكاملة لإدارة المنتجات، الطلبات، المخزون، صلاحيات المستخدمين، والتقارير التفصيلية.',
        },
        {
          title: 'تطوير المواقع والمنصات التفاعلية',
          tech: 'React JS · Livewire · Responsive UI',
          desc: 'تصميم وتنفيذ مواقع تعريفية ومنصات ويب سريعة ومتجاوبة بالكامل مع جميع الشاشات وتدعم اللغتين العربية والإنجليزية.',
        },
        {
          title: 'الواجهات البرمجية وربط التطبيقات',
          tech: 'RESTful APIs · Laravel Sanctum',
          desc: 'هندسة وتأمين واجهات برمجية (APIs) عالية الكفاءة لربط تطبيقات الموبايل (React Native / Expo) والأنظمة الخارجية.',
        },
        {
          title: 'أنظمة الزمن الحقيقي والبحث السريع',
          tech: 'Reverb · Redis · Meilisearch',
          desc: 'إضافة ميزات الإشعارات الفورية والتحديث اللحظي للبيانات مع محركات بحث نصي فائقة السرعة للمتاجر والمنصات الكبيرة.',
        },
      ],
    },

    skillsSection: {
      title: 'المهارات التقنية',
      description: 'التقنيات والأدوات الأساسية التي أعتمد عليها في تطوير المشاريع.',
      categories: [
        {
          id: 'backend',
          num: '01',
          title: 'الخلفية والأنظمة',
          items: [
            { icon: 'laravel', name: 'Laravel 11' },
            { icon: 'php', name: 'PHP 8+' },
            { icon: 'filament', name: 'Filament v3' },
            { icon: 'shield', name: 'Sanctum & REST APIs' },
          ],
        },
        {
          id: 'frontend',
          num: '02',
          title: 'الواجهات التفاعلية',
          items: [
            { icon: 'react', name: 'React JS' },
            { icon: 'livewire', name: 'Livewire' },
            { icon: 'javascript', name: 'JavaScript (ES6+)' },
            { icon: 'bootstrap', name: 'HTML5 & Bootstrap' },
          ],
        },
        {
          id: 'infra',
          num: '03',
          title: 'البيانات والزمن الحقيقي',
          items: [
            { icon: 'mysql', name: 'MySQL' },
            { icon: 'redis', name: 'Redis' },
            { icon: 'search', name: 'Meilisearch' },
            { icon: 'reverb', name: 'Laravel Reverb' },
          ],
        },
        {
          id: 'tools',
          num: '04',
          title: 'الأدوات وتعدد المنصات',
          items: [
            { icon: 'git', name: 'Git & GitHub' },
            { icon: 'postman', name: 'Postman' },
            { icon: 'desktop', name: 'NativePHP' },
            { icon: 'mobile', name: 'Expo (React Native)' },
          ],
        },
      ],
    },

    projectsSection: {
      title: 'أحدث المشاريع',
      description: 'اضغط على تفاصيل أي مشروع لاستعراض الصور الإضافية والمميزات، أو افتح الموقع مباشرة.',
      visitBtn: 'زيارة الموقع',
      detailsBtn: 'التفاصيل والصور',
      closeModal: 'إغلاق',
      highlightsTitle: 'أبرز ما تم تنفيذه في المشروع:',
      projects: [
        {
          id: 'youth-for-change',
          title: 'منظمة شباب التغيير للتوعية والحقوق',
          domain: 'youthforchang.ly',
          role: 'تطوير متكامل (Full Stack)',
          image: './projects/youthforchange.png',
          images: ['./projects/youthforchange.png', './projects/youthforchange-2.png'],
          liveUrl: 'https://youthforchang.ly/',
          tags: ['Laravel', 'PHP', 'MySQL', 'RTL UI'],
          shortDesc:
            'الموقع الرسمي لمنظمة شباب التغيير للتوعية والحقوق، يضم التعريف بالمنظمة، مجالات العمل واللجان، الأنشطة، وبوابة الانضمام والتطوع.',
          highlights: [
            'تصميم وتطوير واجهة عربية رسمية متجاوبة بالكامل مع الهواتف وأجهزة سطح المكتب.',
            'بناء أقسام ديناميكية لعرض اللجان المتخصصة، الأنشطة والفعاليات، وإحصائيات المنظمة.',
            'تطوير نماذج انضمام المتطوعين والأعضاء والتواصل المباشر مع إدارة المنظمة.',
          ],
        },
        {
          id: 'nova-workspace',
          title: 'NOVA — مساحة العمل الذكية',
          domain: 'nova-three-eta.vercel.app',
          role: 'تطوير الواجهة ولوحة التحكم',
          image: './projects/nova.png',
          images: ['./projects/nova.png', './projects/nova-2.png'],
          liveUrl: 'https://nova-three-eta.vercel.app/',
          tags: ['React JS', 'Vite', 'Dashboard UI'],
          shortDesc:
            'واجهة منصة عمل حديثة مع معاينة تفاعلية للوحة التحكم لإدارة المشاريع، المهام، ومتابعة الإنتاجية.',
          highlights: [
            'بناء واجهة مستخدم عصرية (Dark UI) مع معاينة حية للوحة تحكم المشاريع والمهام.',
            'استعراض مؤشرات الأداء والإنتاجية والنشاطات الأخيرة بتجربة استخدام سلسة.',
            'تهيئة البنية البرمجية بـ React و Vite مع نشر سحابي سريع عبر Vercel.',
          ],
        },
        {
          id: 'foodera-platform',
          title: 'Foodera — منصة المطاعم والطلبات',
          domain: 'food-zeta-three.vercel.app',
          role: 'تطوير الواجهة الأمامية (Frontend)',
          image: './projects/food.png',
          images: ['./projects/food.png', './projects/food-2.png'],
          liveUrl: 'https://food-zeta-three.vercel.app/',
          tags: ['React JS', 'Bootstrap', 'Responsive'],
          shortDesc:
            'واجهة موقع مطعم وطلب طعام متجاوبة لاستعراض قائمة المأكولات، الإحصائيات، آراء العملاء، والأسئلة الشائعة.',
          highlights: [
            'تصميم واجهة جذابة لعرض قوائم الطعام الصحية والمكونات مع أزرار طلب واضحة.',
            'تنظيم أقسام متكاملة لإحصائيات المطعم، آراء الزبائن، والأسئلة المتكررة.',
            'توافق تام مع جميع أحجام الشاشات وسرعة تحميل عالية.',
          ],
        },
      ],
    },

    contactSection: {
      title: 'تواصل معي وحساباتي',
      description: 'تواصل معي مباشرة عبر النموذج أو واتساب أو تابعني على منصات التواصل الاجتماعي.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف (اضغط للاتصال)',
      locationLabel: 'الموقع',
      socialsTitle: 'حسابات التواصل الاجتماعي',
      copyText: 'نسخ',
      copiedText: 'تم النسخ',
      formTitle: 'أرسل رسالة مباشرة',
      namePlaceholder: 'الاسم الكريم',
      emailPlaceholder: 'بريدك الإلكتروني',
      subjectPlaceholder: 'الموضوع',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      sendEmailBtn: 'إرسال الرسالة الآن',
      sendingBtn: 'جاري الإرسال مباشرة...',
      sentSuccessMsg: 'تم إرسال رسالتك بنجاح وسرية من داخل الموقع! سأتواصل معك قريباً.',
      activationMsg: 'وصلتك رسالة تأكيد على بريدك ibrahimbanour99@gmail.com — اضغط على Activate Form لتفعيل وصول الرسائل فوراً.',
      errorMsg: 'حدث خطأ أثناء الإرسال، يرجى المحاولة مجدداً أو التواصل عبر واتساب.',
      sendWhatsappBtn: 'إرسال عبر واتساب',
    },
  },

  en: {
    dir: 'ltr',
    langLabel: 'عربي',
    langName: 'العربية',
    name: 'Ibrahim Banour',
    role: 'Full Stack Developer',
    location: 'Tripoli, Libya',
    heroTitle: 'Ibrahim Banour',
    heroSubtitle: 'Full Stack Developer (Laravel & React)',
    heroBio:
      'Full Stack Developer specializing in the Laravel ecosystem — building production-grade admin panels, RESTful APIs, and real-time web applications with clean React and Livewire integration on the frontend.',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
    ctaDownloadCv: 'Download CV (PDF)',

    nav: [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],

    about: {
      title: 'About & Education',
      description:
        'Full Stack Developer focused on the Laravel ecosystem, building admin panels, RESTful APIs, and multi-platform applications targeting web, desktop, and mobile.',
      stats: [
        { value: '+10', label: 'Completed Projects' },
        { value: '+4', label: 'Satisfied Clients' },
        { value: '+16', label: 'Technologies & Tools' },
        { value: '100%', label: 'Quality & Commitment' },
      ],
      experienceItems: [
        {
          title: 'Backend & Admin Systems',
          desc: 'Building production admin panels with Laravel 11 and Filament v3 for product management, workflows, inventory, and analytics.',
        },
        {
          title: 'Real-Time & Search',
          desc: 'Implementing full-text search with Meilisearch and live notifications via Laravel Reverb and Redis.',
        },
        {
          title: 'Frontend & Cross-Platform',
          desc: 'Developing clean React JS and Livewire interfaces backed by Sanctum-authenticated REST APIs, NativePHP, and Expo.',
        },
      ],
      educationTitle: 'Education',
      educationDegree: 'B.Sc. Information Technology',
      educationUni: 'Open Libya University — Tripoli',
      educationDate: 'Expected: Spring 2027',
      languagesTitle: 'Languages',
      languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
      ],
    },

    servicesSection: {
      title: 'Services I Provide',
      description: 'End-to-end software engineering solutions from backend architecture to frontend delivery.',
      items: [
        {
          title: 'Admin Panels & ERP Systems',
          tech: 'Laravel 11 · Filament v3 · MySQL',
          desc: 'Developing custom admin dashboards for inventory control, order workflows, role-based permissions, and business analytics.',
        },
        {
          title: 'Interactive Web Applications',
          tech: 'React JS · Livewire · Responsive UI',
          desc: 'Building fast, responsive, bilingual (RTL/LTR) web platforms and landing pages with clean component architecture.',
        },
        {
          title: 'RESTful APIs & Mobile Backends',
          tech: 'REST APIs · Laravel Sanctum',
          desc: 'Architecting secure, well-documented APIs powering mobile applications (React Native / Expo) and third-party integrations.',
        },
        {
          title: 'Real-Time & Instant Search',
          tech: 'Reverb · Redis · Meilisearch',
          desc: 'Integrating live WebSocket notifications, queue workers, and sub-millisecond full-text search for e-commerce and platforms.',
        },
      ],
    },

    skillsSection: {
      title: 'Technical Skills',
      description: 'Core technologies and tools I use to engineer, test, and ship full-stack applications.',
      categories: [
        {
          id: 'backend',
          num: '01',
          title: 'Backend & Systems',
          items: [
            { icon: 'laravel', name: 'Laravel 11' },
            { icon: 'php', name: 'PHP 8+' },
            { icon: 'filament', name: 'Filament v3' },
            { icon: 'shield', name: 'Sanctum & REST APIs' },
          ],
        },
        {
          id: 'frontend',
          num: '02',
          title: 'Frontend UI',
          items: [
            { icon: 'react', name: 'React JS' },
            { icon: 'livewire', name: 'Livewire' },
            { icon: 'javascript', name: 'JavaScript (ES6+)' },
            { icon: 'bootstrap', name: 'HTML5 & Bootstrap' },
          ],
        },
        {
          id: 'infra',
          num: '03',
          title: 'Data & Real-Time',
          items: [
            { icon: 'mysql', name: 'MySQL' },
            { icon: 'redis', name: 'Redis' },
            { icon: 'search', name: 'Meilisearch' },
            { icon: 'reverb', name: 'Laravel Reverb' },
          ],
        },
        {
          id: 'tools',
          num: '04',
          title: 'Tools & Platforms',
          items: [
            { icon: 'git', name: 'Git & GitHub' },
            { icon: 'postman', name: 'Postman' },
            { icon: 'desktop', name: 'NativePHP' },
            { icon: 'mobile', name: 'Expo (React Native)' },
          ],
        },
      ],
    },

    projectsSection: {
      title: 'Selected Projects',
      description: 'Inspect each project for additional screenshots and implementation details, or visit the live site.',
      visitBtn: 'Visit Website',
      detailsBtn: 'Details & Gallery',
      closeModal: 'Close',
      highlightsTitle: 'Key Implementation Highlights:',
      projects: [
        {
          id: 'youth-for-change',
          title: 'Youth for Change Organization',
          domain: 'youthforchang.ly',
          role: 'Full Stack Development',
          image: './projects/youthforchange.png',
          images: ['./projects/youthforchange.png', './projects/youthforchange-2.png'],
          liveUrl: 'https://youthforchang.ly/',
          tags: ['Laravel', 'PHP', 'MySQL', 'Arabic RTL'],
          shortDesc:
            'Official platform for the Youth for Change Organization for Awareness and Rights, featuring committees, initiatives, and volunteer registration.',
          highlights: [
            'Custom Arabic RTL visual layout optimized for both mobile and desktop screens.',
            'Structured presentation for organizational committees, awareness programs, and live statistics.',
            'Integrated volunteer onboarding and contact workflows.',
          ],
        },
        {
          id: 'nova-workspace',
          title: 'NOVA — Enterprise Workspace',
          domain: 'nova-three-eta.vercel.app',
          role: 'Frontend & Dashboard UI',
          image: './projects/nova.png',
          images: ['./projects/nova.png', './projects/nova-2.png'],
          liveUrl: 'https://nova-three-eta.vercel.app/',
          tags: ['React JS', 'Vite', 'Dashboard UI'],
          shortDesc:
            'Modern workspace landing page and interactive dashboard preview for managing projects, tasks, and team productivity.',
          highlights: [
            'Clean dark interface showcasing an interactive project and productivity dashboard.',
            'Visual widgets for active projects, completed tasks, and recent team activity.',
            'Built with React JS and Vite and deployed on Vercel.',
          ],
        },
        {
          id: 'foodera-platform',
          title: 'Foodera — Restaurant Platform',
          domain: 'food-zeta-three.vercel.app',
          role: 'Frontend Development',
          image: './projects/food.png',
          images: ['./projects/food.png', './projects/food-2.png'],
          liveUrl: 'https://food-zeta-three.vercel.app/',
          tags: ['React JS', 'Bootstrap', 'Responsive'],
          shortDesc:
            'Responsive restaurant and food ordering interface showcasing menu items, statistics, customer reviews, and FAQs.',
          highlights: [
            'Conversion-focused culinary presentation with clear call-to-action flows.',
            'Dedicated sections for menu exploration, partner metrics, testimonials, and FAQs.',
            'Responsive Bootstrap & React layout across mobile, tablet, and desktop.',
          ],
        },
      ],
    },

    contactSection: {
      title: 'Contact & Socials',
      description: 'Send a direct message below, chat on WhatsApp, or connect with me on social media.',
      emailLabel: 'Email',
      phoneLabel: 'Phone (Click to Call)',
      locationLabel: 'Location',
      socialsTitle: 'Social Networks',
      copyText: 'Copy',
      copiedText: 'Copied',
      formTitle: 'Send a Direct Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Write your message...',
      sendEmailBtn: 'Send Message Now',
      sendingBtn: 'Sending in background...',
      sentSuccessMsg: 'Your message has been sent successfully! I will reply shortly.',
      activationMsg: 'Please click Activate Form in the email sent to ibrahimbanour99@gmail.com to enable instant delivery.',
      errorMsg: 'Could not send the message. Please try again or reach out on WhatsApp.',
      sendWhatsappBtn: 'Send via WhatsApp',
    },
  },
};
