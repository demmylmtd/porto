'use client'

import Image from 'next/image'
import { GoldButton, HoverCard, OutlineAnchor } from '@/components/Interactive'
import { useAppSettings } from '@/components/AppSettingsProvider'
import { Locale } from '@/lib/content'

type CaseStudy = {
  company: string
  role: string
  title: string
  summary: string
  image: string
  outcomes: string[]
  tasks: Array<{ title: string; description: string }>
  previewLink?: string
}

const caseStudiesByLocale: Record<
  Locale,
  { eyebrow: string; title: string; intro: string; openTaskPreviewLabel: string; ctaLabel: string; studies: CaseStudy[] }
> = {
  en: {
    eyebrow: 'Finance & Consulting Deep Dives',
    title: 'Case Studies',
    intro:
      'A curated portfolio of simulation work across Islamic finance, M&A, and strategic consulting with Bloomberg, Citi, and BCG. Each case highlights methodology, financial logic, and execution outcomes.',
    openTaskPreviewLabel: 'Open Full Task Preview',
    ctaLabel: "Let's Build a Project Together",
    studies: [
      {
        company: 'Bloomberg',
        role: 'Islamic Finance Work Experience',
        title: 'Strategic Green Sukuk Issuance',
        summary:
          'Hands-on Islamic finance analysis using Bloomberg Terminal and Saudi Exchange data, ending with a full financing structure for a green transition use case.',
        image: '/case-studies/bloomberg-cover.png',
        outcomes: ['Structured $2B Sukuk issuance', '6.00% semi-annual coupon design', 'Wakala-Mudaraba hybrid model'],
        tasks: [
          {
            title: 'Task 1: Islamic Finance Fundamentals & Compliance',
            description:
              'Applied Shariah screening criteria and validated instrument suitability across Mudaraba, Murabaha, and Musharaka structures.',
          },
          {
            title: 'Task 2: Market Report & Issuer Analysis',
            description:
              'Assessed Saudi debt market behavior and issuer liquidity dynamics to identify fixed-income resilience patterns.',
          },
          {
            title: 'Task 3: Sovereign Sukuk Comparative Analysis',
            description:
              'Compared benchmark, mid-term, and long-term sovereign Sukuk to evaluate yield, duration sensitivity, and return profile.',
          },
          {
            title: 'Final Task: Strategic Green Sukuk Issuance',
            description:
              'Designed an Aramco-aligned Green Sukuk strategy with long-dated maturity and tradeability safeguards through tangible-asset ratio controls.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1JDoY7eI-H6QOIR1Rg_K9oKLv2qmb6I_z?usp=sharing',
      },
      {
        company: 'Citi',
        role: 'M&A Buy-Side Analyst Simulation',
        title: 'Target Evaluation & Deal Support Pack',
        summary:
          'Built analyst-ready investment banking outputs to evaluate a target company and support internal decision-making on a buy-side process.',
        image: '/case-studies/citi-cover.png',
        outcomes: ['5-year projection model', 'Comparable company analysis', 'Internal summary memo'],
        tasks: [
          {
            title: 'Company Profile',
            description: 'Developed a structured profile of the target business, strategic position, and investment context.',
          },
          {
            title: 'Financial Projection',
            description: 'Built a five-year income-statement-focused projection model to estimate core performance trajectory.',
          },
          {
            title: 'Relative Valuation',
            description: 'Prepared a comps analysis to benchmark valuation levels against relevant peer companies.',
          },
          {
            title: 'Decision Memo',
            description: 'Synthesized findings into a concise internal update format for investment committee consumption.',
          },
        ],
      },
      {
        company: 'BCG',
        role: 'Junior Consultant Assistant Simulation',
        title: 'Telecom Profitability Growth Strategy',
        summary:
          'Designed a strategic transformation to improve EBITDA margin by reallocating capital from low-performing retail footprint toward R&D and product differentiation.',
        image: '/case-studies/bcg-cover.png',
        outcomes: ['$130M net profit impact', '$400M quality-led upside', '100-store closure stress test'],
        tasks: [
          {
            title: 'Task 1: Strategic Roadmap & Problem Structuring',
            description:
              'Created a MECE roadmap spanning problem structuring, market intelligence, and financial-modeling tracks.',
          },
          {
            title: 'Task 2: Competitive Strategy & Risk Assessment',
            description:
              'Compared defensive and offensive strategies by balancing cost efficiency, revenue lift, investment load, and attrition risk.',
          },
          {
            title: 'Task 3: Quantitative Profit Impact Modeling',
            description:
              'Stress-tested the full profitability stack including R&D spend, customer acquisition, and avoided operating costs.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1BhkJ8OqgAK6IXAiXiK1acRvSwSwSt9Rp?usp=sharing',
      },
    ],
  },
  id: {
    eyebrow: 'Analisis Mendalam Keuangan & Konsultasi',
    title: 'Studi Kasus',
    intro:
      'Portofolio terkurasi dari simulasi keuangan syariah, M&A, dan konsultasi strategis bersama Bloomberg, Citi, dan BCG. Setiap studi menampilkan metodologi, logika finansial, dan hasil eksekusi.',
    openTaskPreviewLabel: 'Buka Pratinjau Tugas Lengkap',
    ctaLabel: 'Mari Bangun Proyek Bersama',
    studies: [
      {
        company: 'Bloomberg',
        role: 'Simulasi Pengalaman Keuangan Syariah',
        title: 'Strategi Penerbitan Green Sukuk',
        summary:
          'Analisis langsung keuangan syariah menggunakan Bloomberg Terminal dan data Saudi Exchange, berujung pada struktur pembiayaan lengkap untuk kasus transisi hijau.',
        image: '/case-studies/bloomberg-cover.png',
        outcomes: ['Struktur penerbitan Sukuk $2 miliar', 'Desain kupon semi-tahunan 6,00%', 'Model hybrid Wakalah-Mudarabah'],
        tasks: [
          {
            title: 'Tugas 1: Dasar Keuangan Syariah & Kepatuhan',
            description:
              'Menerapkan kriteria screening syariah dan memvalidasi kesesuaian instrumen pada struktur Mudarabah, Murabahah, dan Musyarakah.',
          },
          {
            title: 'Tugas 2: Laporan Pasar & Analisis Penerbit',
            description:
              'Menganalisis perilaku pasar utang Saudi dan dinamika likuiditas penerbit untuk mengidentifikasi pola ketahanan pendapatan tetap.',
          },
          {
            title: 'Tugas 3: Analisis Komparatif Sukuk Sovereign',
            description:
              'Membandingkan Sukuk sovereign jangka pendek, menengah, dan panjang untuk mengevaluasi yield, sensitivitas durasi, dan profil imbal hasil.',
          },
          {
            title: 'Tugas Akhir: Strategi Penerbitan Green Sukuk',
            description:
              'Mendesain strategi Green Sukuk selaras Aramco dengan tenor panjang dan perlindungan tradeability melalui kontrol rasio aset berwujud.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1JDoY7eI-H6QOIR1Rg_K9oKLv2qmb6I_z?usp=sharing',
      },
      {
        company: 'Citi',
        role: 'Simulasi Analis Buy-Side M&A',
        title: 'Evaluasi Target & Paket Dukungan Transaksi',
        summary:
          'Membangun output investment banking siap analis untuk mengevaluasi perusahaan target dan mendukung pengambilan keputusan internal pada proses buy-side.',
        image: '/case-studies/citi-cover.png',
        outcomes: ['Model proyeksi 5 tahun', 'Analisis perusahaan pembanding', 'Memo ringkasan internal'],
        tasks: [
          {
            title: 'Profil Perusahaan',
            description: 'Menyusun profil terstruktur bisnis target, posisi strategis, dan konteks investasi.',
          },
          {
            title: 'Proyeksi Keuangan',
            description: 'Membangun model proyeksi lima tahun berbasis laporan laba rugi untuk mengestimasi arah kinerja inti.',
          },
          {
            title: 'Valuasi Relatif',
            description: 'Menyiapkan analisis comps untuk membandingkan level valuasi terhadap perusahaan sejenis yang relevan.',
          },
          {
            title: 'Memo Keputusan',
            description: 'Mensintesis temuan dalam format update internal yang ringkas untuk konsumsi komite investasi.',
          },
        ],
      },
      {
        company: 'BCG',
        role: 'Simulasi Asisten Konsultan Junior',
        title: 'Strategi Pertumbuhan Profitabilitas Telekomunikasi',
        summary:
          'Merancang transformasi strategis untuk meningkatkan margin EBITDA dengan realokasi modal dari jaringan ritel berkinerja rendah ke R&D dan diferensiasi produk.',
        image: '/case-studies/bcg-cover.png',
        outcomes: ['Dampak laba bersih $130 juta', 'Potensi upside berbasis kualitas $400 juta', 'Stress test penutupan 100 toko'],
        tasks: [
          {
            title: 'Tugas 1: Roadmap Strategi & Struktur Masalah',
            description: 'Membuat roadmap MECE yang mencakup struktur masalah, intelijen pasar, dan jalur financial modeling.',
          },
          {
            title: 'Tugas 2: Strategi Kompetitif & Asesmen Risiko',
            description: 'Membandingkan strategi defensif dan ofensif dengan menyeimbangkan efisiensi biaya, kenaikan pendapatan, beban investasi, dan risiko churn.',
          },
          {
            title: 'Tugas 3: Pemodelan Kuantitatif Dampak Profit',
            description: 'Melakukan stress test pada keseluruhan stack profitabilitas termasuk belanja R&D, akuisisi pelanggan, dan biaya operasi yang dihindari.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1BhkJ8OqgAK6IXAiXiK1acRvSwSwSt9Rp?usp=sharing',
      },
    ],
  },
  ar: {
    eyebrow: 'تحليلات معمقة في التمويل والاستشارات',
    title: 'دراسات الحالة',
    intro:
      'محفظة منتقاة من أعمال محاكاة في التمويل الإسلامي وعمليات الاندماج والاستحواذ والاستشارات الاستراتيجية مع Bloomberg وCiti وBCG. تُظهر كل دراسة المنهجية والمنطق المالي ونتائج التنفيذ.',
    openTaskPreviewLabel: 'فتح المعاينة الكاملة للمهام',
    ctaLabel: 'لنَبْنِ مشروعًا معًا',
    studies: [
      {
        company: 'Bloomberg',
        role: 'محاكاة خبرة التمويل الإسلامي',
        title: 'استراتيجية إصدار الصكوك الخضراء',
        summary:
          'تحليل تطبيقي للتمويل الإسلامي باستخدام Bloomberg Terminal وبيانات السوق السعودية، وانتهى ببناء هيكل تمويلي متكامل لحالة انتقال أخضر.',
        image: '/case-studies/bloomberg-cover.png',
        outcomes: ['هيكلة إصدار صكوك بقيمة 2 مليار دولار', 'تصميم كوبون نصف سنوي 6.00%', 'نموذج هجين وكالة-مضاربة'],
        tasks: [
          {
            title: 'المهمة 1: أساسيات التمويل الإسلامي والامتثال',
            description:
              'تطبيق معايير الفحص الشرعي والتحقق من ملاءمة الأدوات ضمن هياكل المضاربة والمرابحة والمشاركة.',
          },
          {
            title: 'المهمة 2: تقرير السوق وتحليل الجهة المصدرة',
            description:
              'تحليل سلوك سوق الدين السعودي وديناميكيات سيولة الجهة المصدرة لتحديد أنماط صمود أدوات الدخل الثابت.',
          },
          {
            title: 'المهمة 3: تحليل مقارن للصكوك السيادية',
            description:
              'مقارنة الصكوك السيادية قصيرة ومتوسطة وطويلة الأجل لتقييم العائد وحساسية المدة والملف الربحي.',
          },
          {
            title: 'المهمة النهائية: استراتيجية إصدار الصكوك الخضراء',
            description:
              'تصميم استراتيجية صكوك خضراء متوافقة مع توجه أرامكو بآجال طويلة وضوابط لقابلية التداول عبر التحكم بنسبة الأصول الملموسة.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1JDoY7eI-H6QOIR1Rg_K9oKLv2qmb6I_z?usp=sharing',
      },
      {
        company: 'Citi',
        role: 'محاكاة محلل Buy-Side في الاندماج والاستحواذ',
        title: 'تقييم الهدف وحزمة دعم الصفقة',
        summary:
          'إعداد مخرجات مصرفية استثمارية جاهزة للمحلل لتقييم الشركة المستهدفة ودعم القرار الداخلي ضمن عملية buy-side.',
        image: '/case-studies/citi-cover.png',
        outcomes: ['نموذج توقعات لخمس سنوات', 'تحليل الشركات المماثلة', 'مذكرة داخلية موجزة'],
        tasks: [
          {
            title: 'ملف الشركة',
            description: 'إعداد ملف منظم للشركة المستهدفة وموقعها الاستراتيجي وسياق الاستثمار.',
          },
          {
            title: 'التوقعات المالية',
            description: 'بناء نموذج توقعات لخمس سنوات يركز على قائمة الدخل لتقدير مسار الأداء الأساسي.',
          },
          {
            title: 'التقييم النسبي',
            description: 'إعداد تحليل الشركات المقارنة لقياس مستويات التقييم مقابل نظراء مناسبين.',
          },
          {
            title: 'مذكرة القرار',
            description: 'تلخيص النتائج في صيغة تحديث داخلي مختصرة لعرضها على لجنة الاستثمار.',
          },
        ],
      },
      {
        company: 'BCG',
        role: 'محاكاة مساعد مستشار مبتدئ',
        title: 'استراتيجية نمو ربحية قطاع الاتصالات',
        summary:
          'تصميم تحول استراتيجي لتحسين هامش EBITDA عبر إعادة تخصيص رأس المال من شبكة التجزئة ضعيفة الأداء نحو البحث والتطوير وتمييز المنتج.',
        image: '/case-studies/bcg-cover.png',
        outcomes: ['أثر صافي ربح 130 مليون دولار', 'فرصة صعود مدفوعة بالجودة 400 مليون دولار', 'اختبار ضغط لإغلاق 100 متجر'],
        tasks: [
          {
            title: 'المهمة 1: خارطة الطريق الاستراتيجية وهيكلة المشكلة',
            description: 'بناء خارطة MECE تشمل هيكلة المشكلة وذكاء السوق ومسارات النمذجة المالية.',
          },
          {
            title: 'المهمة 2: الاستراتيجية التنافسية وتقييم المخاطر',
            description: 'مقارنة الاستراتيجيات الدفاعية والهجومية عبر موازنة كفاءة التكلفة ونمو الإيرادات وحجم الاستثمار ومخاطر التسرب.',
          },
          {
            title: 'المهمة 3: نمذجة كمية لأثر الربحية',
            description: 'إجراء اختبار ضغط كامل لهيكل الربحية بما يشمل إنفاق البحث والتطوير واكتساب العملاء والتكاليف التشغيلية المتجنبة.',
          },
        ],
        previewLink: 'https://drive.google.com/drive/folders/1BhkJ8OqgAK6IXAiXiK1acRvSwSwSt9Rp?usp=sharing',
      },
    ],
  },
}

export default function CaseStudiesPage() {
  const { locale } = useAppSettings()
  const localized = caseStudiesByLocale[locale]

  return (
    <div className="finance-page-wrap" style={{ paddingTop: '6rem' }}>
      <section className="onepage-section hero-section" style={{ minHeight: 'auto' }}>
        <p className="eyebrow">{localized.eyebrow}</p>
        <h1 className="section-title">{localized.title}</h1>
        <p className="hero-copy" style={{ marginTop: '0.8rem', maxWidth: '76ch' }}>
          {localized.intro}
        </p>
      </section>

      <section className="onepage-section section-alt" style={{ minHeight: 'auto' }}>
        <div className="stack-grid">
          {localized.studies.map((study) => (
            <HoverCard key={study.company + study.title} style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 0.9fr) 1.1fr' }} className="case-study-grid">
                <div className="case-image-wrap" style={{ borderBottom: 0, borderRight: '1px solid var(--border)', minHeight: 260 }}>
                  <Image src={study.image} alt={`${study.company} case study cover`} width={1834} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="case-body">
                  <p className="mono-small" style={{ color: 'var(--brand)' }}>
                    {study.company} • {study.role}
                  </p>
                  <h2 className="card-title" style={{ marginTop: '0.4rem' }}>
                    {study.title}
                  </h2>
                  <p className="card-copy">{study.summary}</p>
                  <div className="chip-list">
                    {study.outcomes.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: '0.95rem', display: 'grid', gap: '0.7rem' }}>
                    {study.tasks.map((task) => (
                      <div key={task.title} style={{ borderLeft: '2px solid var(--brand-soft)', paddingLeft: '0.7rem' }}>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.35 }}>{task.title}</p>
                        <p style={{ color: 'var(--text-muted)', marginTop: '0.2rem', fontSize: '0.92rem' }}>{task.description}</p>
                      </div>
                    ))}
                  </div>

                  {study.previewLink && (
                    <div style={{ marginTop: '1rem' }}>
                      <OutlineAnchor href={study.previewLink}>{localized.openTaskPreviewLabel}</OutlineAnchor>
                    </div>
                  )}
                </div>
              </div>
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <GoldButton href="/#contact">{localized.ctaLabel}</GoldButton>
        </div>
      </section>

      <style>{`
        .case-study-grid {
          grid-template-columns: minmax(250px, 0.9fr) 1.1fr;
        }
        @media (max-width: 980px) {
          .case-study-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
