export type Locale = 'en' | 'id' | 'ar'
export type ThemeMode = 'light' | 'dark' | 'system'

type NavKey = 'about' | 'experience' | 'certifications' | 'projects' | 'blog' | 'contact'
type ProjectStatus = 'active' | 'inProgress' | 'completed'
type CertificationCategory =
  | 'finance'
  | 'islamicFinance'
  | 'investmentBanking'
  | 'capitalMarkets'
  | 'consulting'
  | 'dataProductivity'
  | 'professionalProfile'

export interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
}

export interface CertificationItem {
  name: string
  issuer: string
  year: string
  category: string
  categoryKey: CertificationCategory
  description: string
  fileName: string
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  link: string
  status: ProjectStatus
  statusLabel: string
}

export interface BlogPostItem {
  title: string
  excerpt: string
  date: string
  link: string
  tags: string[]
}

export interface LocaleContent {
  ui: {
    language: string
    theme: string
    light: string
    dark: string
    system: string
    menuLabel: string
    closeMenuLabel: string
    builtWith: string
  }
  nav: Record<NavKey, string>
  home: {
    locationLabel: string
    heroName: string
    heroTagline: string
    heroDescription: string
    getInTouch: string
    viewProjects: string
    workedWith: string
    experienceSection: string
    projectsSection: string
    fullExperience: string
    stats: Array<{ num: string; label: string }>
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    skillsTitle: string
    skills: string[]
  }
  experiencePage: {
    eyebrow: string
    title: string
    educationTitle: string
    degree: string
    school: string
    detail: string
  }
  certificationsPage: {
    eyebrow: string
    title: string
    intro: string
    openFile: string
    download: string
    pdfFallback: string
  }
  projectsPage: {
    eyebrow: string
    title: string
  }
  blogPage: {
    eyebrow: string
    title: string
    introPrefix: string
    moreArticles: string
    readOnKumparan: string
  }
  contactPage: {
    eyebrow: string
    title: string
    intro: string
    links: Array<{ label: string; description: string; action: string }>
  }
  experiences: ExperienceItem[]
  certifications: CertificationItem[]
  projects: ProjectItem[]
  blogPosts: BlogPostItem[]
}

const sharedCertFiles = [
  'BCG MISK.pdf',
  'BCG MISK 2.pdf',
  'Bloomberg MISK.pdf',
  'BMC Certificate.pdf',
  'Coursera I0GNYN7YD41B.pdf',
  'citi bank sertifikat.pdf',
  'JP Morgan.pdf',
  'Excel.pdf',
  'Fundamental Financial.pdf',
  'IDX.png',
  'sertifikasi halal.pdf',
  'sertifikasi ekosistem ekomomi dan keuangan syariah (1).pdf',
  'SIDF MISK.pdf',
  'CV Muhammad Demmy.pdf',
] as const

export const certificationCategoryColors: Record<CertificationCategory, string> = {
  finance: '#3b82f6',
  islamicFinance: '#10b981',
  investmentBanking: '#2563eb',
  capitalMarkets: '#8b5cf6',
  consulting: '#0ea5e9',
  dataProductivity: '#f59e0b',
  professionalProfile: '#6b7280',
}

export const contentByLocale: Record<Locale, LocaleContent> = {
  en: {
    ui: {
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      menuLabel: 'Toggle menu',
      closeMenuLabel: 'Close menu',
      builtWith: 'Built with Next.js & Tailwind',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      certifications: 'Certifications',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      locationLabel: 'Jakarta, Indonesia',
      heroName: 'Demmy',
      heroTagline: 'BBA Economics & Management · Islamic Finance · Equity Research',
      heroDescription:
        'Finance analyst in training with a passion for Islamic finance, equity research, and algorithmic trading. Building DemmyFi — a finance education brand for Indonesia.',
      getInTouch: 'Get in Touch',
      viewProjects: 'View Projects',
      workedWith: 'Worked with',
      experienceSection: 'Experience',
      projectsSection: 'Projects',
      fullExperience: 'Full Experience →',
      stats: [
        { num: '3', label: 'Bloomberg Certifications' },
        { num: '14', label: 'Certifications Total' },
        { num: '2+', label: 'Years Trading' },
      ],
    },
    about: {
      eyebrow: 'Who I Am',
      title: 'About',
      paragraphs: [
        `I'm Demmy — a 23-year-old finance enthusiast based in Jakarta, Indonesia, currently completing a BBA in Economics & Management at LIPIA Jakarta on a full Saudi scholarship. All coursework is conducted in Arabic, affiliated with Imam Muhammad bin Saud Islamic University (IMAMU) in Riyadh.`,
        'My focus areas are Islamic finance, equity research, and investment banking. I hold three Bloomberg certifications — Bloomberg Market Concepts (BMC), Bloomberg Climate Finance, and Bloomberg Islamic Finance — alongside simulations from J.P. Morgan and Citi via Forage, and a Yale Financial Markets certificate from Coursera.',
        'Outside academics, I run DemmyFi — a finance and economics education brand on YouTube and Kumparan, targeting Indonesian audiences with content on macro explainers, market news, and Islamic finance perspectives.',
        'I also build algorithmic trading bots in cTrader (C#) and MetaTrader 5 (MQL5), focused on XAUUSD scalping and SMC-based strategies. Trading and coding keep my analytical thinking sharp and grounded in real market dynamics.',
        'My career goal is to work as an Investment Banking Analyst, Junior Financial Analyst, or Islamic Finance Analyst — ideally at the intersection of conventional and Shariah-compliant capital markets.',
      ],
      skillsTitle: 'Skills & Tools',
      skills: [
        'Bloomberg Terminal',
        'Islamic Finance',
        'Equity Research',
        'DCF Modeling',
        'cTrader / C#',
        'MQL5 / MT5',
        'Excel / VBA',
        'Financial Modeling',
        'Arabic (Professional)',
        'English (Fluent)',
        'Next.js',
        'Content Creation',
      ],
    },
    experiencePage: {
      eyebrow: 'Background',
      title: 'Experience',
      educationTitle: 'Education',
      degree: 'BBA — Economics & Management',
      school: 'LIPIA Jakarta · Affiliated with IMAMU, Riyadh',
      detail:
        'Full Saudi scholarship · Coursework in Arabic · Finance, Cost Accounting, Commercial Law, Organizational Behavior',
    },
    certificationsPage: {
      eyebrow: 'Credentials',
      title: 'Certifications',
      intro:
        'A complete archive of certificate files with built-in previews. Image certificates are displayed directly, while PDF certificates are embedded and include quick actions to open or download each file.',
      openFile: 'Open file',
      download: 'Download',
      pdfFallback: 'PDF preview is not supported in this browser.',
    },
    projectsPage: { eyebrow: 'Work', title: 'Projects' },
    blogPage: {
      eyebrow: 'Writing',
      title: 'Blog',
      introPrefix: 'Articles on finance, economics, and Islamic finance published on',
      moreArticles: 'More articles available on Kumparan',
      readOnKumparan: 'Read on Kumparan →',
    },
    contactPage: {
      eyebrow: 'Say Hello',
      title: 'Contact',
      intro:
        'Open to opportunities in investment banking, Islamic finance, equity research, and finance content collaboration.',
      links: [
        { label: 'LinkedIn', description: 'Professional profile & connect', action: 'View Profile →' },
        { label: 'YouTube', description: 'DemmyFi finance content', action: 'Watch Channel →' },
        { label: 'Kumparan', description: 'Finance & economics articles', action: 'Read Articles →' },
        { label: 'GitHub', description: 'Code & open source projects', action: 'View Code →' },
        { label: 'TikTok', description: 'Short finance insights & updates', action: 'Watch TikTok →' },
        { label: 'Instagram', description: 'Personal and content highlights', action: 'Open Instagram →' },
      ],
    },
    experiences: [
      {
        company: 'DemmyFi',
        role: 'Founder & Finance Content Creator',
        period: '2024 – Present',
        description:
          'Building a finance education brand covering macroeconomics, equity research, and Islamic finance. Content published via YouTube and Kumparan.',
        tags: ['Content Strategy', 'Finance Education', 'YouTube'],
      },
      {
        company: 'LIPIA Jakarta',
        role: 'BBA Student — Economics & Management',
        period: '2022 – Present',
        description:
          'Full Saudi scholarship program affiliated with Imam Muhammad bin Saud Islamic University (IMAMU), Riyadh. Coursework in Arabic covering finance, cost accounting, commercial law, and organizational behavior.',
        tags: ['Islamic Finance', 'Cost Accounting', 'Commercial Law'],
      },
      {
        company: 'Independent Trader',
        role: 'Algorithmic Trading & Prop Firm Research',
        period: '2024 – Present',
        description:
          'Developed cTrader C# and MetaTrader 5 MQL5 bots focused on XAUUSD scalping and SMC-based strategies. Evaluated prop firm challenges including FundedNext and FundingPips.',
        tags: ['cTrader', 'MQL5', 'XAUUSD', 'Algorithmic Trading'],
      },
    ],
    certifications: [
      {
        name: 'BCG MISK Program Certificate',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'Consulting',
        categoryKey: 'consulting',
        description: 'This certificate confirms completion of BCG and MISK learning activities focused on consulting-style business problem solving.',
        fileName: sharedCertFiles[0],
      },
      {
        name: 'BCG MISK Program Certificate (Part 2)',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'Consulting',
        categoryKey: 'consulting',
        description: 'This certificate recognizes additional BCG and MISK training in structured analysis and practical strategy execution.',
        fileName: sharedCertFiles[1],
      },
      {
        name: 'Bloomberg MISK Certificate',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'Finance',
        categoryKey: 'finance',
        description: 'This certificate verifies Bloomberg-led finance learning delivered in partnership with MISK Foundation.',
        fileName: sharedCertFiles[2],
      },
      {
        name: 'Bloomberg Market Concepts (BMC)',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'Finance',
        categoryKey: 'finance',
        description: 'This certificate demonstrates practical understanding of economics, fixed income, equities, and FX markets.',
        fileName: sharedCertFiles[3],
      },
      {
        name: 'Yale Financial Markets',
        issuer: 'Yale University via Coursera',
        year: '2024',
        category: 'Finance',
        categoryKey: 'finance',
        description: 'This certificate confirms completion of Yale Financial Markets covering core market concepts and risk topics.',
        fileName: sharedCertFiles[4],
      },
      {
        name: 'Citi Investment Banking Job Simulation',
        issuer: 'Citi via Forage',
        year: '2024',
        category: 'Investment Banking',
        categoryKey: 'investmentBanking',
        description: 'This certificate reflects hands-on simulation experience with investment banking workflows and deal analysis tasks.',
        fileName: sharedCertFiles[5],
      },
      {
        name: 'J.P. Morgan Investment Banking Job Simulation',
        issuer: 'J.P. Morgan via Forage',
        year: '2024',
        category: 'Investment Banking',
        categoryKey: 'investmentBanking',
        description: 'This certificate validates practical exposure to analyst-style investment banking work including valuation and presentation tasks.',
        fileName: sharedCertFiles[6],
      },
      {
        name: 'Excel Skills Certificate',
        issuer: 'Professional Training Program',
        year: '2024',
        category: 'Data & Productivity',
        categoryKey: 'dataProductivity',
        description: 'This certificate recognizes proficiency in spreadsheet workflows used for data organization and reporting.',
        fileName: sharedCertFiles[7],
      },
      {
        name: 'Fundamental Financial Course Certificate',
        issuer: 'Financial Education Program',
        year: '2024',
        category: 'Finance',
        categoryKey: 'finance',
        description: 'This certificate indicates completion of foundational financial learning in markets, analysis, and decision-making basics.',
        fileName: sharedCertFiles[8],
      },
      {
        name: 'IDX Capital Market School',
        issuer: 'IDX (Bursa Efek Indonesia)',
        year: '2024',
        category: 'Capital Markets',
        categoryKey: 'capitalMarkets',
        description: 'This certificate verifies training on Indonesian capital market structure and securities market fundamentals.',
        fileName: sharedCertFiles[9],
      },
      {
        name: 'Islamic Halal Certification Program',
        issuer: 'Islamic Certification Program',
        year: '2024',
        category: 'Islamic Finance',
        categoryKey: 'islamicFinance',
        description: 'This certificate confirms learning in halal standards relevant to Islamic economic and business practices.',
        fileName: sharedCertFiles[10],
      },
      {
        name: 'Sharia Economic and Financial Ecosystem Program',
        issuer: 'Islamic Finance Program',
        year: '2024',
        category: 'Islamic Finance',
        categoryKey: 'islamicFinance',
        description: 'This certificate recognizes participation in training about the sharia economic and financial ecosystem.',
        fileName: sharedCertFiles[11],
      },
      {
        name: 'SIDF MISK Certificate',
        issuer: 'SIDF × MISK Foundation',
        year: '2024',
        category: 'Finance',
        categoryKey: 'finance',
        description: 'This certificate documents completion of SIDF and MISK program content focused on financial sector knowledge.',
        fileName: sharedCertFiles[12],
      },
      {
        name: 'Curriculum Vitae Document',
        issuer: 'Muhammad Demmy',
        year: '2024',
        category: 'Professional Profile',
        categoryKey: 'professionalProfile',
        description: 'This document provides an overview of professional background, education, and key competencies in English.',
        fileName: sharedCertFiles[13],
      },
    ],
    projects: [
      {
        title: 'DemmyFi YouTube Channel',
        description: 'Finance & economics education channel covering macro explainers, market news, and strong opinion pieces targeting Indonesian audiences.',
        tags: ['Content Creation', 'Finance Education', 'YouTube'],
        link: 'https://youtube.com/@DemmyFi',
        status: 'active',
        statusLabel: 'Active',
      },
      {
        title: 'DemmyFi LinkedIn Newsletter',
        description: 'Subscribe on LinkedIn for concise market notes, finance briefings, and consistent DemmyFi insights tailored for professional growth.',
        tags: ['LinkedIn', 'Newsletter', 'Finance Content'],
        link: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7449281784950972416',
        status: 'active',
        statusLabel: 'Active',
      },
      {
        title: 'DemmyFi Spotify Podcast',
        description: 'A finance and economics podcast featuring market perspectives, practical insights, and educational episodes for Indonesian listeners.',
        tags: ['Spotify', 'Podcast', 'Finance Education'],
        link: 'https://open.spotify.com/show/5XCFxYGW8MR4FTX3dNPp0L?si=JaRu7xJ7SXOKm1PPPhTSMA',
        status: 'active',
        statusLabel: 'Active',
      },
      {
        title: 'XAUUSD Algorithmic Scalper',
        description: 'SMC-based scalping bot for gold (XAUUSD) built in cTrader C# and MetaTrader 5 MQL5. Targets Asian session liquidity sweeps with automated BSL/SSL detection.',
        tags: ['C#', 'MQL5', 'cTrader', 'Algorithmic Trading'],
        link: '#',
        status: 'inProgress',
        statusLabel: 'In Progress',
      },
      {
        title: 'DemmyFi Portfolio Website',
        description: 'This site — built with Next.js 15, TypeScript, and Tailwind CSS. Deployed on Vercel.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
        link: '#',
        status: 'active',
        statusLabel: 'Active',
      },
      {
        title: 'Excel Trading Dashboard',
        description: 'Performance analytics dashboard built in Excel for 64 XAUUSD trades. Includes equity curve, win rate, RR ratio, and pivot chart breakdowns.',
        tags: ['Excel', 'Data Analysis', 'Trading'],
        link: '#',
        status: 'completed',
        statusLabel: 'Completed',
      },
    ],
    blogPosts: [
      {
        title: "Everyone Asks 'Is a LIPIA Degree Valuable?' — That's the Wrong Question",
        excerpt: 'Reframing how we evaluate the economic value of a LIPIA education from a more useful perspective.',
        date: '2025',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['Education', 'Economics', 'LIPIA'],
      },
      {
        title: 'Eid 2026 Impact on Indonesia Q1 Economic Growth',
        excerpt: 'Analysis of how Eid momentum affects household consumption and first-quarter GDP growth.',
        date: '2026',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['Macroeconomics', 'Indonesia', 'GDP'],
      },
    ],
  },
  id: {
    ui: {
      language: 'Bahasa',
      theme: 'Tema',
      light: 'Terang',
      dark: 'Gelap',
      system: 'Sistem',
      menuLabel: 'Buka menu',
      closeMenuLabel: 'Tutup menu',
      builtWith: 'Dibuat dengan Next.js & Tailwind',
    },
    nav: {
      about: 'Tentang',
      experience: 'Pengalaman',
      certifications: 'Sertifikasi',
      projects: 'Proyek',
      blog: 'Blog',
      contact: 'Kontak',
    },
    home: {
      locationLabel: 'Jakarta, Indonesia',
      heroName: 'Demmy',
      heroTagline: 'BBA Ekonomi & Manajemen · Keuangan Syariah · Riset Ekuitas',
      heroDescription:
        'Calon analis keuangan dengan minat pada keuangan syariah, riset ekuitas, dan trading algoritmik. Membangun DemmyFi — brand edukasi keuangan untuk Indonesia.',
      getInTouch: 'Hubungi Saya',
      viewProjects: 'Lihat Proyek',
      workedWith: 'Pernah bekerja dengan',
      experienceSection: 'Pengalaman',
      projectsSection: 'Proyek',
      fullExperience: 'Lihat Semua Pengalaman →',
      stats: [
        { num: '3', label: 'Sertifikasi Bloomberg' },
        { num: '14', label: 'Total Sertifikasi' },
        { num: '2+', label: 'Tahun Trading' },
      ],
    },
    about: {
      eyebrow: 'Tentang Saya',
      title: 'Tentang',
      paragraphs: [
        'Saya Demmy — penggemar keuangan berusia 23 tahun di Jakarta, Indonesia, yang sedang menyelesaikan BBA Ekonomi & Manajemen di LIPIA Jakarta dengan beasiswa penuh Saudi. Seluruh perkuliahan menggunakan bahasa Arab dan terafiliasi dengan Imam Muhammad bin Saud Islamic University (IMAMU) di Riyadh.',
        'Fokus saya adalah keuangan syariah, riset ekuitas, dan investment banking. Saya memiliki tiga sertifikasi Bloomberg — Bloomberg Market Concepts (BMC), Bloomberg Climate Finance, dan Bloomberg Islamic Finance — serta simulasi dari J.P. Morgan dan Citi melalui Forage, dan sertifikat Yale Financial Markets dari Coursera.',
        'Di luar akademik, saya menjalankan DemmyFi — brand edukasi keuangan dan ekonomi di YouTube dan Kumparan untuk audiens Indonesia dengan konten makro, berita pasar, dan perspektif keuangan syariah.',
        'Saya juga membangun bot trading algoritmik di cTrader (C#) dan MetaTrader 5 (MQL5), berfokus pada scalping XAUUSD dan strategi berbasis SMC. Trading dan coding menjaga pola pikir analitis saya tetap tajam dan relevan dengan dinamika pasar.',
        'Tujuan karier saya adalah bekerja sebagai Investment Banking Analyst, Junior Financial Analyst, atau Islamic Finance Analyst — idealnya pada irisan pasar modal konvensional dan syariah.',
      ],
      skillsTitle: 'Keahlian & Tools',
      skills: [
        'Terminal Bloomberg',
        'Keuangan Syariah',
        'Riset Ekuitas',
        'Model DCF',
        'cTrader / C#',
        'MQL5 / MT5',
        'Excel / VBA',
        'Pemodelan Keuangan',
        'Arab (Profesional)',
        'Inggris (Fasih)',
        'Next.js',
        'Pembuatan Konten',
      ],
    },
    experiencePage: {
      eyebrow: 'Latar Belakang',
      title: 'Pengalaman',
      educationTitle: 'Pendidikan',
      degree: 'BBA — Ekonomi & Manajemen',
      school: 'LIPIA Jakarta · Afiliasi dengan IMAMU, Riyadh',
      detail: 'Beasiswa penuh Saudi · Perkuliahan bahasa Arab · Keuangan, Akuntansi Biaya, Hukum Dagang, Perilaku Organisasi',
    },
    certificationsPage: {
      eyebrow: 'Kredensial',
      title: 'Sertifikasi',
      intro:
        'Arsip lengkap file sertifikat dengan pratinjau bawaan. Sertifikat gambar ditampilkan langsung, sementara sertifikat PDF disematkan dengan aksi cepat untuk membuka atau mengunduh file.',
      openFile: 'Buka file',
      download: 'Unduh',
      pdfFallback: 'Pratinjau PDF tidak didukung di browser ini.',
    },
    projectsPage: { eyebrow: 'Karya', title: 'Proyek' },
    blogPage: {
      eyebrow: 'Tulisan',
      title: 'Blog',
      introPrefix: 'Artikel tentang keuangan, ekonomi, dan keuangan syariah yang dipublikasikan di',
      moreArticles: 'Artikel lainnya tersedia di Kumparan',
      readOnKumparan: 'Baca di Kumparan →',
    },
    contactPage: {
      eyebrow: 'Sapa Saya',
      title: 'Kontak',
      intro: 'Terbuka untuk peluang di investment banking, keuangan syariah, riset ekuitas, dan kolaborasi konten keuangan.',
      links: [
        { label: 'LinkedIn', description: 'Profil profesional & koneksi', action: 'Lihat Profil →' },
        { label: 'YouTube', description: 'Konten keuangan DemmyFi', action: 'Lihat Channel →' },
        { label: 'Kumparan', description: 'Artikel keuangan & ekonomi', action: 'Baca Artikel →' },
        { label: 'GitHub', description: 'Kode & proyek open source', action: 'Lihat Kode →' },
        { label: 'TikTok', description: 'Insight keuangan singkat & update', action: 'Lihat TikTok →' },
        { label: 'Instagram', description: 'Sorotan personal dan konten', action: 'Buka Instagram →' },
      ],
    },
    experiences: [
      {
        company: 'DemmyFi',
        role: 'Founder & Kreator Konten Keuangan',
        period: '2024 – Sekarang',
        description:
          'Membangun brand edukasi keuangan yang membahas makroekonomi, riset ekuitas, dan keuangan syariah. Konten dipublikasikan melalui YouTube dan Kumparan.',
        tags: ['Strategi Konten', 'Edukasi Keuangan', 'YouTube'],
      },
      {
        company: 'LIPIA Jakarta',
        role: 'Mahasiswa BBA — Ekonomi & Manajemen',
        period: '2022 – Sekarang',
        description:
          'Program beasiswa penuh Saudi yang terafiliasi dengan Imam Muhammad bin Saud Islamic University (IMAMU), Riyadh. Perkuliahan berbahasa Arab mencakup keuangan, akuntansi biaya, hukum dagang, dan perilaku organisasi.',
        tags: ['Keuangan Syariah', 'Akuntansi Biaya', 'Hukum Dagang'],
      },
      {
        company: 'Trader Independen',
        role: 'Trading Algoritmik & Riset Prop Firm',
        period: '2024 – Sekarang',
        description:
          'Mengembangkan bot cTrader C# dan MetaTrader 5 MQL5 untuk scalping XAUUSD dan strategi berbasis SMC. Mengevaluasi tantangan prop firm seperti FundedNext dan FundingPips.',
        tags: ['cTrader', 'MQL5', 'XAUUSD', 'Trading Algoritmik'],
      },
    ],
    certifications: [
      {
        name: 'Sertifikat Program BCG MISK',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'Konsultasi',
        categoryKey: 'consulting',
        description: 'Sertifikat ini menegaskan penyelesaian aktivitas pembelajaran BCG dan MISK yang berfokus pada pemecahan masalah bisnis ala konsultasi.',
        fileName: sharedCertFiles[0],
      },
      {
        name: 'Sertifikat Program BCG MISK (Bagian 2)',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'Konsultasi',
        categoryKey: 'consulting',
        description: 'Sertifikat ini mengakui pelatihan tambahan BCG dan MISK dalam analisis terstruktur dan eksekusi strategi praktis.',
        fileName: sharedCertFiles[1],
      },
      {
        name: 'Sertifikat Bloomberg MISK',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'Keuangan',
        categoryKey: 'finance',
        description: 'Sertifikat ini memverifikasi pembelajaran keuangan yang dipimpin Bloomberg bersama MISK Foundation.',
        fileName: sharedCertFiles[2],
      },
      {
        name: 'Bloomberg Market Concepts (BMC)',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'Keuangan',
        categoryKey: 'finance',
        description: 'Sertifikat ini menunjukkan pemahaman praktis tentang ekonomi, pendapatan tetap, ekuitas, dan pasar valas.',
        fileName: sharedCertFiles[3],
      },
      {
        name: 'Yale Financial Markets',
        issuer: 'Yale University via Coursera',
        year: '2024',
        category: 'Keuangan',
        categoryKey: 'finance',
        description: 'Sertifikat ini menegaskan penyelesaian program Yale Financial Markets yang membahas konsep pasar inti dan topik risiko.',
        fileName: sharedCertFiles[4],
      },
      {
        name: 'Simulasi Kerja Investment Banking Citi',
        issuer: 'Citi via Forage',
        year: '2024',
        category: 'Investment Banking',
        categoryKey: 'investmentBanking',
        description: 'Sertifikat ini mencerminkan pengalaman simulasi langsung pada alur kerja investment banking dan analisis transaksi.',
        fileName: sharedCertFiles[5],
      },
      {
        name: 'Simulasi Kerja Investment Banking J.P. Morgan',
        issuer: 'J.P. Morgan via Forage',
        year: '2024',
        category: 'Investment Banking',
        categoryKey: 'investmentBanking',
        description: 'Sertifikat ini memvalidasi paparan praktis terhadap pekerjaan investment banking gaya analis termasuk valuasi dan presentasi.',
        fileName: sharedCertFiles[6],
      },
      {
        name: 'Sertifikat Keahlian Excel',
        issuer: 'Professional Training Program',
        year: '2024',
        category: 'Data & Produktivitas',
        categoryKey: 'dataProductivity',
        description: 'Sertifikat ini mengakui kemahiran workflow spreadsheet untuk pengelolaan data dan pelaporan.',
        fileName: sharedCertFiles[7],
      },
      {
        name: 'Sertifikat Kursus Dasar Keuangan',
        issuer: 'Financial Education Program',
        year: '2024',
        category: 'Keuangan',
        categoryKey: 'finance',
        description: 'Sertifikat ini menunjukkan penyelesaian pembelajaran dasar keuangan terkait pasar, analisis, dan pengambilan keputusan.',
        fileName: sharedCertFiles[8],
      },
      {
        name: 'Sekolah Pasar Modal IDX',
        issuer: 'IDX (Bursa Efek Indonesia)',
        year: '2024',
        category: 'Pasar Modal',
        categoryKey: 'capitalMarkets',
        description: 'Sertifikat ini memverifikasi pelatihan struktur pasar modal Indonesia dan dasar-dasar pasar sekuritas.',
        fileName: sharedCertFiles[9],
      },
      {
        name: 'Program Sertifikasi Halal Islam',
        issuer: 'Islamic Certification Program',
        year: '2024',
        category: 'Keuangan Syariah',
        categoryKey: 'islamicFinance',
        description: 'Sertifikat ini menegaskan pembelajaran standar halal yang relevan untuk praktik ekonomi dan bisnis syariah.',
        fileName: sharedCertFiles[10],
      },
      {
        name: 'Program Ekosistem Ekonomi dan Keuangan Syariah',
        issuer: 'Islamic Finance Program',
        year: '2024',
        category: 'Keuangan Syariah',
        categoryKey: 'islamicFinance',
        description: 'Sertifikat ini mengakui partisipasi dalam pelatihan tentang ekosistem ekonomi dan keuangan syariah.',
        fileName: sharedCertFiles[11],
      },
      {
        name: 'Sertifikat SIDF MISK',
        issuer: 'SIDF × MISK Foundation',
        year: '2024',
        category: 'Keuangan',
        categoryKey: 'finance',
        description: 'Sertifikat ini mendokumentasikan penyelesaian konten program SIDF dan MISK yang berfokus pada pengetahuan sektor keuangan.',
        fileName: sharedCertFiles[12],
      },
      {
        name: 'Dokumen Curriculum Vitae',
        issuer: 'Muhammad Demmy',
        year: '2024',
        category: 'Profil Profesional',
        categoryKey: 'professionalProfile',
        description: 'Dokumen ini memberikan gambaran latar belakang profesional, pendidikan, dan kompetensi utama dalam bahasa Inggris.',
        fileName: sharedCertFiles[13],
      },
    ],
    projects: [
      {
        title: 'Kanal YouTube DemmyFi',
        description: 'Kanal edukasi keuangan & ekonomi dengan konten penjelasan makro, berita pasar, dan opini kuat untuk audiens Indonesia.',
        tags: ['Pembuatan Konten', 'Edukasi Keuangan', 'YouTube'],
        link: 'https://youtube.com/@DemmyFi',
        status: 'active',
        statusLabel: 'Aktif',
      },
      {
        title: 'Newsletter LinkedIn DemmyFi',
        description: 'Subscribe on LinkedIn untuk update pasar yang ringkas, briefing keuangan, dan insight DemmyFi yang konsisten untuk pengembangan profesional.',
        tags: ['LinkedIn', 'Newsletter', 'Konten Keuangan'],
        link: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7449281784950972416',
        status: 'active',
        statusLabel: 'Aktif',
      },
      {
        title: 'Podcast Spotify DemmyFi',
        description: 'Podcast keuangan dan ekonomi berisi perspektif pasar, insight praktis, dan episode edukatif untuk audiens Indonesia.',
        tags: ['Spotify', 'Podcast', 'Edukasi Keuangan'],
        link: 'https://open.spotify.com/show/5XCFxYGW8MR4FTX3dNPp0L?si=JaRu7xJ7SXOKm1PPPhTSMA',
        status: 'active',
        statusLabel: 'Aktif',
      },
      {
        title: 'Scalper Algoritmik XAUUSD',
        description: 'Bot scalping berbasis SMC untuk emas (XAUUSD) dibangun dengan cTrader C# dan MetaTrader 5 MQL5. Menargetkan liquidity sweep sesi Asia dengan deteksi BSL/SSL otomatis.',
        tags: ['C#', 'MQL5', 'cTrader', 'Trading Algoritmik'],
        link: '#',
        status: 'inProgress',
        statusLabel: 'Dalam Proses',
      },
      {
        title: 'Website Portofolio DemmyFi',
        description: 'Website ini — dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS. Dideploy di Vercel.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
        link: '#',
        status: 'active',
        statusLabel: 'Aktif',
      },
      {
        title: 'Dashboard Trading Excel',
        description: 'Dashboard analitik performa di Excel untuk 64 trading XAUUSD. Berisi equity curve, win rate, rasio RR, dan breakdown pivot chart.',
        tags: ['Excel', 'Analisis Data', 'Trading'],
        link: '#',
        status: 'completed',
        statusLabel: 'Selesai',
      },
    ],
    blogPosts: [
      {
        title: "Semua Orang Tanya 'Gelar LIPIA Laku Tidak?' — Itu Pertanyaan yang Salah",
        excerpt: 'Framing ulang pertanyaan tentang nilai ekonomi pendidikan LIPIA dari perspektif yang lebih tepat.',
        date: '2025',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['Pendidikan', 'Ekonomi', 'LIPIA'],
      },
      {
        title: 'Dampak Lebaran 2026 pada Pertumbuhan Ekonomi Indonesia Q1',
        excerpt: 'Analisis bagaimana momen Lebaran mempengaruhi konsumsi rumah tangga dan pertumbuhan PDB kuartal pertama.',
        date: '2026',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['Makroekonomi', 'Indonesia', 'PDB'],
      },
    ],
  },
  ar: {
    ui: {
      language: 'اللغة',
      theme: 'المظهر',
      light: 'فاتح',
      dark: 'داكن',
      system: 'النظام',
      menuLabel: 'فتح القائمة',
      closeMenuLabel: 'إغلاق القائمة',
      builtWith: 'تم البناء باستخدام Next.js و Tailwind',
    },
    nav: {
      about: 'نبذة',
      experience: 'الخبرة',
      certifications: 'الشهادات',
      projects: 'المشاريع',
      blog: 'المدونة',
      contact: 'تواصل',
    },
    home: {
      locationLabel: 'جاكرتا، إندونيسيا',
      heroName: 'ديمي',
      heroTagline: 'بكالوريوس إدارة واقتصاد · التمويل الإسلامي · أبحاث الأسهم',
      heroDescription:
        'محلل مالي قيد التطوير بشغف تجاه التمويل الإسلامي وأبحاث الأسهم والتداول الخوارزمي. أبني DemmyFi كعلامة تعليم مالي للجمهور الإندونيسي.',
      getInTouch: 'تواصل معي',
      viewProjects: 'عرض المشاريع',
      workedWith: 'عملت مع',
      experienceSection: 'الخبرة',
      projectsSection: 'المشاريع',
      fullExperience: 'عرض الخبرات كاملة ←',
      stats: [
        { num: '3', label: 'شهادات بلومبرغ' },
        { num: '14', label: 'إجمالي الشهادات' },
        { num: '2+', label: 'سنوات تداول' },
      ],
    },
    about: {
      eyebrow: 'من أنا',
      title: 'نبذة',
      paragraphs: [
        'أنا ديمي، شاب في الثالثة والعشرين من جاكرتا بإندونيسيا، أُكمل حاليًا بكالوريوس الاقتصاد والإدارة في LIPIA جاكرتا بمنحة سعودية كاملة. تُقدَّم جميع المقررات باللغة العربية بالتعاون مع جامعة الإمام محمد بن سعود الإسلامية في الرياض.',
        'تركيزي في التمويل الإسلامي وأبحاث الأسهم والخدمات المصرفية الاستثمارية. أحمل ثلاث شهادات من بلومبرغ: Bloomberg Market Concepts وBloomberg Climate Finance وBloomberg Islamic Finance، إضافة إلى محاكاة من J.P. Morgan وCiti عبر Forage، وشهادة Yale Financial Markets من Coursera.',
        'خارج الدراسة، أدير DemmyFi، وهي علامة تعليمية في الاقتصاد والتمويل على يوتيوب وكومباران، تستهدف الجمهور الإندونيسي بمحتوى الاقتصاد الكلي وأخبار السوق ورؤى التمويل الإسلامي.',
        'كما أبني روبوتات تداول خوارزمية باستخدام cTrader ‏(C#) وMetaTrader 5 ‏(MQL5)، مع تركيز على سكالبينغ XAUUSD واستراتيجيات SMC. التداول والبرمجة يحافظان على حدة التفكير التحليلي وارتباطه بحركة السوق الفعلية.',
        'هدفي المهني هو العمل كمحلل في الخدمات المصرفية الاستثمارية أو محلل مالي مبتدئ أو محلل تمويل إسلامي، ويفضل في نقطة التقاء أسواق رأس المال التقليدية والمتوافقة مع الشريعة.',
      ],
      skillsTitle: 'المهارات والأدوات',
      skills: [
        'Bloomberg Terminal',
        'التمويل الإسلامي',
        'أبحاث الأسهم',
        'نمذجة DCF',
        'cTrader / C#',
        'MQL5 / MT5',
        'Excel / VBA',
        'النمذجة المالية',
        'العربية (احترافي)',
        'الإنجليزية (طلاقة)',
        'Next.js',
        'صناعة المحتوى',
      ],
    },
    experiencePage: {
      eyebrow: 'الخلفية',
      title: 'الخبرة',
      educationTitle: 'التعليم',
      degree: 'بكالوريوس — الاقتصاد والإدارة',
      school: 'LIPIA جاكرتا · بالتعاون مع جامعة الإمام بالرياض',
      detail: 'منحة سعودية كاملة · دراسة باللغة العربية · تمويل، محاسبة تكاليف، قانون تجاري، سلوك تنظيمي',
    },
    certificationsPage: {
      eyebrow: 'الاعتمادات',
      title: 'الشهادات',
      intro:
        'أرشيف كامل لملفات الشهادات مع معاينة مدمجة. تُعرض شهادات الصور مباشرة، بينما تُضمن ملفات PDF مع إجراءات سريعة للفتح أو التنزيل.',
      openFile: 'فتح الملف',
      download: 'تنزيل',
      pdfFallback: 'معاينة PDF غير مدعومة في هذا المتصفح.',
    },
    projectsPage: { eyebrow: 'الأعمال', title: 'المشاريع' },
    blogPage: {
      eyebrow: 'الكتابة',
      title: 'المدونة',
      introPrefix: 'مقالات عن التمويل والاقتصاد والتمويل الإسلامي منشورة على',
      moreArticles: 'مقالات إضافية متاحة على كومباران',
      readOnKumparan: 'اقرأ على كومباران ←',
    },
    contactPage: {
      eyebrow: 'مرحبًا بك',
      title: 'تواصل',
      intro: 'منفتح على فرص في الخدمات المصرفية الاستثمارية والتمويل الإسلامي وأبحاث الأسهم والتعاون في محتوى مالي.',
      links: [
        { label: 'LinkedIn', description: 'الملف المهني والتواصل', action: 'عرض الملف ←' },
        { label: 'YouTube', description: 'محتوى DemmyFi المالي', action: 'مشاهدة القناة ←' },
        { label: 'Kumparan', description: 'مقالات في التمويل والاقتصاد', action: 'قراءة المقالات ←' },
        { label: 'GitHub', description: 'الكود والمشاريع المفتوحة', action: 'عرض الكود ←' },
        { label: 'TikTok', description: 'مقاطع مالية قصيرة وتحديثات', action: 'عرض تيك توك ←' },
        { label: 'Instagram', description: 'لمحات شخصية ومحتوى', action: 'فتح إنستغرام ←' },
      ],
    },
    experiences: [
      {
        company: 'DemmyFi',
        role: 'مؤسس وصانع محتوى مالي',
        period: '2024 – الآن',
        description:
          'بناء علامة تعليم مالي تغطي الاقتصاد الكلي وأبحاث الأسهم والتمويل الإسلامي. يُنشر المحتوى عبر يوتيوب وكومباران.',
        tags: ['استراتيجية المحتوى', 'تعليم مالي', 'YouTube'],
      },
      {
        company: 'LIPIA جاكرتا',
        role: 'طالب بكالوريوس — الاقتصاد والإدارة',
        period: '2022 – الآن',
        description:
          'برنامج منحة سعودية كاملة بالتعاون مع جامعة الإمام محمد بن سعود الإسلامية في الرياض. الدراسة باللغة العربية وتشمل التمويل ومحاسبة التكاليف والقانون التجاري والسلوك التنظيمي.',
        tags: ['التمويل الإسلامي', 'محاسبة التكاليف', 'القانون التجاري'],
      },
      {
        company: 'متداول مستقل',
        role: 'تداول خوارزمي وبحث شركات التمويل',
        period: '2024 – الآن',
        description:
          'تطوير روبوتات cTrader C# وMetaTrader 5 MQL5 الموجهة لسكالبينغ XAUUSD واستراتيجيات SMC. تقييم تحديات شركات التمويل مثل FundedNext وFundingPips.',
        tags: ['cTrader', 'MQL5', 'XAUUSD', 'تداول خوارزمي'],
      },
    ],
    certifications: [
      {
        name: 'شهادة برنامج BCG MISK',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'استشارات',
        categoryKey: 'consulting',
        description: 'تؤكد هذه الشهادة إكمال أنشطة تعلم BCG وMISK في حل المشكلات التجارية بأسلوب استشاري.',
        fileName: sharedCertFiles[0],
      },
      {
        name: 'شهادة برنامج BCG MISK (الجزء الثاني)',
        issuer: 'Boston Consulting Group (BCG) × MISK Foundation',
        year: '2024',
        category: 'استشارات',
        categoryKey: 'consulting',
        description: 'تعترف هذه الشهادة بتدريب إضافي من BCG وMISK في التحليل المنهجي وتنفيذ الاستراتيجية عمليًا.',
        fileName: sharedCertFiles[1],
      },
      {
        name: 'شهادة Bloomberg MISK',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'التمويل',
        categoryKey: 'finance',
        description: 'تثبت هذه الشهادة التعلم المالي بقيادة بلومبرغ بالشراكة مع MISK Foundation.',
        fileName: sharedCertFiles[2],
      },
      {
        name: 'Bloomberg Market Concepts (BMC)',
        issuer: 'Bloomberg',
        year: '2024',
        category: 'التمويل',
        categoryKey: 'finance',
        description: 'تُظهر هذه الشهادة فهمًا عمليًا للاقتصاد والدخل الثابت والأسهم وأسواق العملات.',
        fileName: sharedCertFiles[3],
      },
      {
        name: 'Yale Financial Markets',
        issuer: 'Yale University via Coursera',
        year: '2024',
        category: 'التمويل',
        categoryKey: 'finance',
        description: 'تؤكد هذه الشهادة إكمال برنامج Yale Financial Markets الذي يغطي مفاهيم السوق الأساسية وموضوعات المخاطر.',
        fileName: sharedCertFiles[4],
      },
      {
        name: 'محاكاة عمل الخدمات المصرفية الاستثمارية من Citi',
        issuer: 'Citi via Forage',
        year: '2024',
        category: 'الخدمات المصرفية الاستثمارية',
        categoryKey: 'investmentBanking',
        description: 'تعكس هذه الشهادة خبرة محاكاة عملية في سير عمل الخدمات المصرفية الاستثمارية ومهام تحليل الصفقات.',
        fileName: sharedCertFiles[5],
      },
      {
        name: 'محاكاة عمل الخدمات المصرفية الاستثمارية من J.P. Morgan',
        issuer: 'J.P. Morgan via Forage',
        year: '2024',
        category: 'الخدمات المصرفية الاستثمارية',
        categoryKey: 'investmentBanking',
        description: 'توثق هذه الشهادة تعرضًا عمليًا لعمل المحلل في الخدمات المصرفية الاستثمارية بما في ذلك التقييم والعروض.',
        fileName: sharedCertFiles[6],
      },
      {
        name: 'شهادة مهارات Excel',
        issuer: 'Professional Training Program',
        year: '2024',
        category: 'البيانات والإنتاجية',
        categoryKey: 'dataProductivity',
        description: 'تعترف هذه الشهادة بالكفاءة في سير عمل الجداول لتنظيم البيانات وإعداد التقارير.',
        fileName: sharedCertFiles[7],
      },
      {
        name: 'شهادة دورة الأساسيات المالية',
        issuer: 'Financial Education Program',
        year: '2024',
        category: 'التمويل',
        categoryKey: 'finance',
        description: 'تشير هذه الشهادة إلى إكمال تعلم أساسيات التمويل في الأسواق والتحليل واتخاذ القرار.',
        fileName: sharedCertFiles[8],
      },
      {
        name: 'مدرسة سوق رأس المال IDX',
        issuer: 'IDX (بورصة إندونيسيا)',
        year: '2024',
        category: 'أسواق رأس المال',
        categoryKey: 'capitalMarkets',
        description: 'تؤكد هذه الشهادة التدريب على هيكل سوق رأس المال الإندونيسي وأساسيات سوق الأوراق المالية.',
        fileName: sharedCertFiles[9],
      },
      {
        name: 'برنامج الشهادة الحلال الإسلامية',
        issuer: 'Islamic Certification Program',
        year: '2024',
        category: 'التمويل الإسلامي',
        categoryKey: 'islamicFinance',
        description: 'تؤكد هذه الشهادة التعلم في معايير الحلال ذات الصلة بالممارسات الاقتصادية والتجارية الإسلامية.',
        fileName: sharedCertFiles[10],
      },
      {
        name: 'برنامج منظومة الاقتصاد والتمويل الإسلامي',
        issuer: 'Islamic Finance Program',
        year: '2024',
        category: 'التمويل الإسلامي',
        categoryKey: 'islamicFinance',
        description: 'تعترف هذه الشهادة بالمشاركة في تدريب حول منظومة الاقتصاد والتمويل الإسلامي.',
        fileName: sharedCertFiles[11],
      },
      {
        name: 'شهادة SIDF MISK',
        issuer: 'SIDF × MISK Foundation',
        year: '2024',
        category: 'التمويل',
        categoryKey: 'finance',
        description: 'توثق هذه الشهادة إكمال محتوى برنامج SIDF وMISK الذي يركز على المعرفة بالقطاع المالي.',
        fileName: sharedCertFiles[12],
      },
      {
        name: 'وثيقة السيرة الذاتية',
        issuer: 'Muhammad Demmy',
        year: '2024',
        category: 'الملف المهني',
        categoryKey: 'professionalProfile',
        description: 'توفر هذه الوثيقة نظرة عامة على الخلفية المهنية والتعليمية والكفاءات الرئيسية باللغة الإنجليزية.',
        fileName: sharedCertFiles[13],
      },
    ],
    projects: [
      {
        title: 'قناة DemmyFi على يوتيوب',
        description: 'قناة تعليمية في التمويل والاقتصاد تقدم شروحات الاقتصاد الكلي وأخبار السوق وآراء قوية للجمهور الإندونيسي.',
        tags: ['صناعة المحتوى', 'تعليم مالي', 'YouTube'],
        link: 'https://youtube.com/@DemmyFi',
        status: 'active',
        statusLabel: 'نشط',
      },
      {
        title: 'نشرة DemmyFi على LinkedIn',
        description: 'اشترك في نشرة LinkedIn للحصول على ملخصات السوق وموجزات مالية ورؤى DemmyFi بشكل منتظم لدعم النمو المهني.',
        tags: ['LinkedIn', 'Newsletter', 'محتوى مالي'],
        link: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7449281784950972416',
        status: 'active',
        statusLabel: 'نشط',
      },
      {
        title: 'بودكاست DemmyFi على Spotify',
        description: 'بودكاست في التمويل والاقتصاد يقدم رؤى عن الأسواق وأفكارًا عملية وحلقات تعليمية للمستمعين في إندونيسيا.',
        tags: ['Spotify', 'Podcast', 'تعليم مالي'],
        link: 'https://open.spotify.com/show/5XCFxYGW8MR4FTX3dNPp0L?si=JaRu7xJ7SXOKm1PPPhTSMA',
        status: 'active',
        statusLabel: 'نشط',
      },
      {
        title: 'سكالبير خوارزمي XAUUSD',
        description: 'روبوت سكالبينغ قائم على SMC للذهب (XAUUSD) مبني باستخدام cTrader C# وMetaTrader 5 MQL5. يستهدف سحوبات السيولة في الجلسة الآسيوية مع كشف تلقائي لـ BSL/SSL.',
        tags: ['C#', 'MQL5', 'cTrader', 'تداول خوارزمي'],
        link: '#',
        status: 'inProgress',
        statusLabel: 'قيد التنفيذ',
      },
      {
        title: 'موقع DemmyFi الشخصي',
        description: 'هذا الموقع مبني باستخدام Next.js 15 وTypeScript وTailwind CSS، ومُستضاف على Vercel.',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
        link: '#',
        status: 'active',
        statusLabel: 'نشط',
      },
      {
        title: 'لوحة تداول Excel',
        description: 'لوحة تحليل أداء مبنية في Excel لـ 64 صفقة XAUUSD، تشمل منحنى رأس المال ونسبة الفوز ونسبة RR وتحليلات Pivot Chart.',
        tags: ['Excel', 'تحليل البيانات', 'تداول'],
        link: '#',
        status: 'completed',
        statusLabel: 'مكتمل',
      },
    ],
    blogPosts: [
      {
        title: "الجميع يسأل: هل شهادة LIPIA مجدية؟ — هذا هو السؤال الخطأ",
        excerpt: 'إعادة صياغة طريقة تقييم القيمة الاقتصادية لتعليم LIPIA من منظور أدق.',
        date: '2025',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['تعليم', 'اقتصاد', 'LIPIA'],
      },
      {
        title: 'أثر عيد 2026 على نمو اقتصاد إندونيسيا في الربع الأول',
        excerpt: 'تحليل لكيفية تأثير موسم العيد على استهلاك الأسر ونمو الناتج المحلي في الربع الأول.',
        date: '2026',
        link: 'https://kumparan.com/muhammad-demmy',
        tags: ['اقتصاد كلي', 'إندونيسيا', 'GDP'],
      },
    ],
  },
}
