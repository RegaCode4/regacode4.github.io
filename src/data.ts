import { Project, Experience, SkillCategory, Testimonial } from './types';

// ============================================================
// DATA UTAMA PORTFOLIO
// File ini adalah satu-satunya tempat untuk mengubah konten
// portfolio. Tidak perlu menyentuh file komponen lain.
// ============================================================

// ------------------------------------------------------------
// PROJECTS — Tambah / edit / hapus proyek di sini
// Setiap objek mewakili satu kartu proyek di halaman Projects.
//
// Field wajib:
//   id          : string unik, huruf kecil tanpa spasi (ex: 'my-project')
//   title       : judul proyek lengkap
//   shortDescription : teks singkat yang tampil di kartu
//   description : penjelasan teknis panjang (tampil di drawer "Lihat Detail")
//   tags        : array teknologi yang dipakai
//   category    : 'Fullstack' | 'Frontend' | 'Mobile' | 'DevOps'
//                 (nilai ini dipakai oleh filter tab di ProjectShowcase)
//   githubUrl   : link ke repo GitHub
//   demoUrl     : link live demo — isi '#' jika belum ada
//   featured    : true = tampilkan badge ⭐ Unggulan
//   achievements: array poin pencapaian (tampil di drawer detail)
// ------------------------------------------------------------
export const projectsData: Project[] = [
  {
    id: 'kargoin',
    title: 'KargoIn - Sistem Manajemen Logistik & CRM',
    shortDescription: 'Platform fullstack terintegrasi untuk optimasi pengiriman, manajemen kontainer, pelacakan real-time, dan manajemen klien.',
    description: 'Aplikasi Enterprise SaaS yang membantu perusahaan logistik mengelola siklus hidup pengiriman secara lengkap. Fitur mencakup live-tracking armada via geofencing, optimalisasi rute, sistem invoice otomatis, portal klien dengan analitik, dan notifikasi WhatsApp/Email terintegrasi.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS', 'Socket.io', 'Prisma'],
    category: 'Fullstack',
    githubUrl: 'https://github.com/RegaCode4/kargoin-logistics',
    demoUrl: '#',
    featured: true,
    achievements: [
      'Mempercepat proses perencanaan rute armada hingga 40% menggunakan algoritma pengurutan cerdas.',
      'Meningkatkan visibilitas klien dengan live dashboard pelacakan real-time via WebSocket.',
      'Sistem invoicing otomatis yang menghemat 15+ jam kerja manual per minggu untuk bagian keuangan.'
    ]
  },
  {
    id: 'collabdocs',
    title: 'CollabDocs - Real-time Collaborative Board & Editor',
    shortDescription: 'Papan tulis digital interaktif & editor dokumen teks kaya yang mendukung kolaborasi multi-pengguna secara real-time.',
    description: 'Platform produktivitas mutakhir yang memungkinkan puluhan pengguna bekerja bersamaan pada dokumen atau kanvas visual yang sama tanpa konflik state, didukung oleh algoritma Yjs CRDT dan integrasi WebSocket yang kokoh.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Yjs', 'Y-Websocket', 'Express', 'Node.js', 'MongoDB'],
    category: 'Fullstack',
    githubUrl: 'https://github.com/RegaCode4/collabdocs',
    demoUrl: '#',
    featured: true,
    achievements: [
      'Implementasi penyebaran dokumen secara CRDT sehingga resolusi konflik penulisan mencapai 99.9%.',
      'Mengurangi latensi sinkronisasi antar-pengguna hingga di bawah 80 milidetik.',
      'Dilengkapi dengan visualisasi kursor aktif multi-pengguna dan catatan obrolan kontekstual.'
    ]
  },
  {
    id: 'gitscribe',
    title: 'GitScribe - AI Commit & Release Note Generator',
    shortDescription: 'Alat berbasis AI untuk menganalisis perubahan file Git, memformulasikan pesan commit, serta memproduksi Catatan Rilis.',
    description: 'Sebuah generator pesan commit semantik dan catatan rilis otomatis yang didukung oleh Gemini API. Menggunakan analisis AST file yang dimodifikasi untuk memberikan ringkasan perubahan kode yang bermakna dan akurat.',
    tags: ['React', 'TypeScript', 'Gemini SDK', 'Node.js', 'TailwindCSS', 'Express'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RegaCode4/gitscribe',
    demoUrl: '#',
    featured: true,
    achievements: [
      'Mengintegrasikan model Gemini SDK untuk parsing diff file berukuran besar secara modular.',
      'Mendukung konvensi Semantic Commit standard (feat, fix, docs, style, refactor).',
      'Menghemat waktu developer hingga 25% dalam menyusun dokumentasi versi rilis perangkat lunak.'
    ]
  },
  {
    id: 'smartrent',
    title: 'SmartRent - Headless Property Management System',
    shortDescription: 'Dashboard manajemen properti sewa, pembayaran otomatis, dan portal laporan kerusakan bagi penyewa.',
    description: 'Aplikasi manajemen kontrakan, kos-kosan, dan apartemen multi-tenant. Menggunakan static-site generation (SSG) untuk loading cepat bagi pengunjung umum dan dynamic dashboard untuk administrasi transaksi bulanan.',
    tags: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'Supabase', 'Chart.js'],
    category: 'Frontend',
    githubUrl: 'https://github.com/RegaCode4/smartrent',
    featured: false,
    achievements: [
      'Menyajikan rendering tabel kompleks dengan filter dinamis dan integrasi grafik keuangan berkemampuan tinggi.',
      'Penurunan loading time hingga 50% di bawah koneksi 3G berkat efisiensi splitting modul.',
      'Portal pengaduan penyewa dengan sistem unggah foto instan.'
    ]
  }
];

// ------------------------------------------------------------
// EXPERIENCES — Tambah / edit riwayat pekerjaan di sini
// Urutan array = urutan tampil di timeline (paling atas = terbaru)
//
// Field wajib:
//   id      : string unik (ex: 'exp4')
//   role    : nama jabatan / posisi
//   company : nama perusahaan
//   location: kota + negara (ex: 'Padang, Sumatera Barat, Indonesia')
//   period  : rentang waktu (ex: '2024 - Sekarang')
//   current : true jika ini pekerjaan aktif saat ini (dot hijau di timeline)
//   description : ringkasan tanggung jawab
//   bullets : array pencapaian spesifik (maks 3-4 poin idealnya)
//   skills  : array nama teknologi yang dipakai di posisi ini
// ------------------------------------------------------------
export const experiencesData: Experience[] = [
  {
    id: 'exp1',
    role: 'Lead Full Stack Web Developer',
    company: 'Nusantara Tech Solutions',
    location: 'Padang, Sumatera Barat, Indonesia (Remote)',
    period: '2024 - Sekarang',
    current: true,
    description: 'Memimpin tim pengembang beranggotakan 5 orang untuk merancang dan meluncurkan platform SaaS e-commerce ritel berkinerja tinggi, mengoptimalkan pipeline CI/CD serta arsitektur database.',
    bullets: [
      'Merancang ulang arsitektur monolit web lama menjadi sistem API microservices modular berbasis Node.js dan Express, meningkatkan throughput transaksional sebesar 120%.',
      'Merancang database relasional PostgreSQL dengan optimalisasi query terindeks, mengurangi waktu kueri rata-rata dari 1.2 detik menjadi kurang dari 150 milidetik.',
      'Membangun framework antarmuka internal yang sangat interaktif dan responsif menggunakan React, TailwindCSS, dan Motion.'
    ],
    skills: ['React', 'TypeScript', 'PostgreSQL', 'Express', 'TailwindCSS', 'CI/CD']
  },
  {
    id: 'exp2',
    role: 'Full Stack Web Developer',
    company: 'Solusi Digital Kreatif',
    location: 'Padang, Sumatera Barat, Indonesia (Hybrid)',
    period: '2022 - 2024',
    current: false,
    description: 'Mengembangkan aplikasi web dan dashboard administrasi interaktif untuk klien fintech dan logistik. Bertanggung jawab penuh atas visualisasi antarmuka dan RESTful API back-end.',
    bullets: [
      'Mendesain UI/UX dashboard analitik modern dengan bagan dinamis (Recharts, D3) yang ramah pengguna, meningkatkan retensi aplikasi harian sebesar 35%.',
      'Menerapkan otorisasi berjenjang (RBAC) dan enkripsi data JWT/OAuth2 yang kokoh untuk melindungi data finansial sensitif pengguna.',
      'Mengurangi konsumsi server runtime NodeJS hingga 30% melalui strategi caching berlapis dengan Redis.'
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'D3.js']
  },
  {
    id: 'exp3',
    role: 'Junior Web Developer & Freelancer',
    company: 'TechLabs & Mandiri Projects',
    location: 'Padang, Sumatera Barat, Indonesia',
    period: '2020 - 2022',
    current: false,
    description: 'Membangun situs web bisnis, landing page pemasaran berkinerja tinggi, dan fungsionalitas e-commerce UMKM yang responsif di seluruh perangkat mobile & desktop.',
    bullets: [
      'Berhasil menyelesaikan lebih dari 15 proyek web lepas dengan rating kepuasan klien 98%.',
      'Memvisualisasikan landing page yang dioptimalkan SEO, meraih skor performa Lighthouse rata-rata sebesar 95+.',
      'Mengintegrasikan sistem pembayaran lokal Indonesia (Midtrans) pada berbagai CMS dan website e-commerce kustom.'
    ],
    skills: ['Vanilla JS', 'TailwindCSS', 'Bootstrap', 'Node.js', 'MySQL', 'SEO Optimization']
  }
];

// ------------------------------------------------------------
// SKILLS — Ubah level keahlian atau tambah skill baru di sini
//
// Struktur: array kategori, masing-masing punya array skills.
// Untuk menambah KATEGORI baru: tambah objek { name, skills[] }
// Untuk menambah SKILL baru dalam kategori: tambah objek di
// dalam array skills kategori yang sesuai.
//
// Field skill:
//   name     : nama teknologi/skill yang ditampilkan
//   level    : angka 0-100 (persentase progress bar)
//   iconName : label internal — saat ini belum dipakai untuk render
//              ikon, tapi bisa dimanfaatkan nanti jika ingin
//              menambahkan ikon SVG per skill
// ------------------------------------------------------------
export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Technologies',
    skills: [
      { name: 'React / Next.js', level: 90, iconName: 'React' },
      { name: 'TypeScript', level: 85, iconName: 'TypeScript' },
      { name: 'Tailwind CSS', level: 95, iconName: 'Tailwind' },
      { name: 'Redux / Zustand', level: 80, iconName: 'Redux' },
      { name: 'HTML5 & CSS3', level: 95, iconName: 'HTML5' }
    ]
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js / Express', level: 88, iconName: 'Node' },
      { name: 'PostgreSQL', level: 82, iconName: 'Postgres' },
      { name: 'MongoDB', level: 85, iconName: 'Mongo' },
      { name: 'Rest API & GraphQL', level: 90, iconName: 'API' },
      { name: 'Prisma / Sequelize ORM', level: 84, iconName: 'ORM' }
    ]
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 92, iconName: 'Git' },
      { name: 'Docker', level: 75, iconName: 'Docker' },
      { name: 'CI/CD Pipelines', level: 78, iconName: 'CICD' },
      { name: 'Supabase / Firebase', level: 85, iconName: 'Cloud' },
      { name: 'Linux / VPS Deployment', level: 80, iconName: 'Linux' }
    ]
  }
];

// ------------------------------------------------------------
// TESTIMONIALS — Tambah testimoni klien / rekan kerja di sini
// (saat ini belum ditampilkan di halaman, tapi data sudah siap)
//
// Field wajib:
//   id        : string unik (ex: 't3')
//   name      : nama pemberi testimoni
//   role      : jabatan mereka
//   company   : nama perusahaan mereka
//   content   : isi kutipan testimoni
//   avatarUrl : URL foto profil (opsional) — gunakan Unsplash atau
//               upload foto sendiri ke folder /assets lalu isi
//               path relatifnya, contoh: '/assets/avatar-budi.jpg'
// ------------------------------------------------------------
export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Budi Santoso',
    role: 'CEO & Founder',
    company: 'KargoCepat Indonesia',
    content: 'Kerja keras Adip dalam merevolusi dashboard logistik kami benar-benar melampaui harapan kami. Pelacakan armada berjalan seketika secara real-time dan klien kami menyukai perubahan visual barunya.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 't2',
    name: 'Sarah Wijaya',
    role: 'Product Manager',
    company: 'Solusi Digital Kreatif',
    content: 'Sebagai pengembang full-stack, Adip memiliki naluri visual UI/UX yang sangat baik dipadukan dengan pemahaman struktur database yang efisien. Sangat mandiri dan komunikatif.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
