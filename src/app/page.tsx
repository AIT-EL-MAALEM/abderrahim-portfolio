"use client";

import { useState } from "react";

const content = {
  en: {
    nav: ["Home", "About", "Services", "Projects", "Contact"],
    eyebrow: "ABDERRAHIM AIT-EL-MAALEM",
    title: "Building Digital",
    titleGold: "Experiences.",
    description:
      "I build modern websites and smart digital solutions that help businesses grow.",
    primary: "Explore My Work",
    secondary: "Let's Talk",
    available: "Available for opportunities",
    about: "More Than Just Code",
    aboutText:
      "I go beyond website development by providing complete digital solutions, from website design and development to custom business systems and IT equipment.",

    businessFirst: "Business First",
    businessFirstText:
      "I focus on understanding business needs and creating digital solutions that support growth.",
       howIWork: "How I Work",
       howIWorkText:
      "I understand your goals and present a demo before moving forward with the project.",
    trust: "Trust & Confidentiality",
    trustText:
      "I value transparency, protect your business information and respect confidentiality.",

    services: "What I Do",
    servicesText: "Digital solutions designed around your goals.",
    cards: [
     ["Web Development & Design", "Designing and developing modern, responsive and user-friendly websites."],
     ["Business Management Systems", "Custom systems to manage stock, sales and daily business operations."],
     ["E-commerce Solutions", "Building online stores that help businesses sell and grow."],
     ["IT Equipment & Services", "Providing computers, hardware and technology equipment for businesses."],
      ],
    projects: "Selected Projects",
    projectsText: "A look at what I create and what I am building.",
    projectCards: [
  {
    title: "Integrated Business Management System",
    description: "A complete system to manage inventory, sales and daily business operations.",
    status: "Coming Soon",
  },
  {
    title: "Complete IT Solutions for Businesses",
    description: "Providing businesses with computers, IT equipment and integrated technology solutions.",
    status: "Coming Soon",
  },
],
    contact: "Have a project in mind?",
    contactText: "Let's turn your idea into something meaningful.",
    contactButton: "Get In Touch",
  },
  fr: {
    nav: ["Accueil", "À propos", "Services", "Projets", "Contact"],
    eyebrow: "ABDERRAHIM AIT-EL-MAALEM",
    title: "Créer des expériences",
    titleGold: "Digitales.",
    description:
      "Je crée des sites web modernes et des solutions numériques intelligentes qui accompagnent le développement des entreprises.",
    primary: "Voir mes projets",
    secondary: "Me contacter",
    available: "Disponible pour de nouvelles opportunités",
    about: "Bien plus que du code",
    aboutText:
      "Je vais au-delà du simple développement web en proposant des solutions numériques complètes, de la conception et du développement de sites web à la création de systèmes de gestion sur mesure et à la fourniture d’équipements informatiques.",

    businessFirst: "Le Business Avant Tout",
    businessFirstText:
       "Je comprends les besoins des entreprises et crée des solutions digitales qui soutiennent leur croissance.",
    howIWork: "Ma Méthode de Travail",
    howIWorkText:
       "Je comprends vos objectifs et présente une démo avant de commencer le projet.",
    trust: "Confiance et Confidentialité",
    trustText:
       "Je privilégie la transparence et veille à la confidentialité de vos informations professionnelles.",

   services: "Mes Services",
   servicesText: "Des solutions numériques adaptées à vos objectifs.",
   projectCards: [
  {
    title: "Système Intégré de Gestion d'Entreprise",
    description: "Une solution complète pour gérer les stocks, les ventes et les opérations quotidiennes.",
    status: "Bientôt disponible",
  },
  {
    title: "Solutions Informatiques Complètes pour Entreprises",
    description: "Fourniture d'ordinateurs, d'équipements informatiques et de solutions technologiques intégrées.",
    status: "Bientôt disponible",
  },
],
   cards: [
     ["Développement & Design Web", "Conception et développement de sites web modernes, responsives et faciles à utiliser."],
     ["Systèmes de Gestion", "Des systèmes sur mesure pour gérer les stocks, les ventes et les activités quotidiennes."],
     ["Solutions E-commerce", "Création de boutiques en ligne pour aider les entreprises à vendre et à se développer."],
     ["Équipements & Services Informatiques", "Fourniture d'ordinateurs, de matériel et d'équipements informatiques pour les entreprises."],
    ],
    projects: "Projets sélectionnés",
    projectsText: "Découvrez mes réalisations et mes projets en cours.",
    contact: "Un projet en tête ?",
    contactText: "Transformons votre idée en quelque chose de concret.",
    contactButton: "Me contacter",
  },
  ar: {
    nav: ["الرئيسية", "من أنا", "الخدمات", "المشاريع", "تواصل معي"],
    eyebrow:"عبد الرحيم  آيت المعلم",
    title: "نصنع تجارب",
    titleGold: "رقمية مميزة.",
    description:
      "أُصمّم وأطوّر مواقع إلكترونية حديثة وحلولاً رقمية ذكية تساعد الشركات على النمو.",
    primary: "اكتشف أعمالي",
    secondary: "تواصل معي",
    available: "متاح لفرص عمل جديدة",
    about: "أكثر من مجرد كتابة كود",
    aboutText:
     " أتجاوز تطوير المواقع الإلكترونية من خلال تقديم حلول رقمية متكاملة، بدءاً من تصميم وتطوير المواقع، وصولاً إلى إنشاء أنظمة مخصصة لإدارة الأعمال وتوفير المعدات المعلوماتية.",
      
businessFirst: "الأعمال أولاً",
businessFirstText:
  "أركز على فهم احتياجات الأعمال وتقديم حلول رقمية تساعد على تحسين الأداء ودعم النمو.",
howIWork: "منهجية العمل",
howIWorkText:
  "أبدأ بفهم أهدافك واحتياجاتك، ثم أقدم نموذجاً أولياً قبل البدء في تنفيذ المشروع.",
trust: "الثقة والسرية",
trustText:
  "أحرص على الشفافية واحترام خصوصية العملاء وحماية معلومات مشاريعهم.",

    services: "خدماتي",
    servicesText: "حلول رقمية مصممة وفقاً لأهدافك.",
    cards: [
     ["تصميم وتطوير المواقع", "تصميم وتطوير مواقع عصرية ومتجاوبة وسهلة الاستخدام."],
     ["أنظمة تسيير الأعمال", "إنشاء أنظمة مخصصة لتسيير المخزون والمبيعات والعمليات اليومية للشركات."],
     ["حلول التجارة الإلكترونية", "إنشاء متاجر إلكترونية تساعد الشركات على البيع والتوسع."],
     ["المعدات والخدمات المعلوماتية", "توفير الحواسيب والمعدات والتجهيزات التقنية للشركات."],
    ],
    projects: "أبرز المشاريع",
    projectsText: "اكتشف أعمالي والمشاريع التي أعمل عليها.",
    projectCards: [
  {
    title: "نظام متكامل لإدارة الأعمال",
    description: "نظام شامل لتسيير المخزون والمبيعات والعمليات اليومية للشركات.",
    status: "قريباً",
  },
  {
    title: "حلول معلوماتية متكاملة للشركات",
    description: "توفير الحواسيب والمعدات المعلوماتية والحلول التقنية المتكاملة للشركات.",
    status: "قريباً",
  },
],
    contact: "هل لديك مشروع؟",
    contactText: "دعنا نحول فكرتك إلى مشروع حقيقي.",
    contactButton: "تواصل معي",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr" | "ar">("en");
  const t = content[lang];
  const rtl = lang === "ar";

  return (
    
    <main
      dir={rtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#100f0e] text-white selection:bg-[#c5a46d] selection:text-black"
    >
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
        <a href="#" className="text-xl font-bold tracking-wide">
          AA<span className="text-[#c5a46d]">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={["#home", "#about", "#services", "#projects", "#contact"][i]}
              className="transition hover:text-[#c5a46d]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {(["en", "fr", "ar"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${
                lang === l
                  ? "bg-[#c5a46d] text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[680px] max-w-7xl items-center overflow-hidden px-6 py-20 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#684638]/20 blur-[110px]" />

        <div className="relative z-10 grid w-full items-center gap-16 lg:grid-cols-2">
          <div>
           
            <div className="mb-8">
              <div className="flex flex-nowrap items-center gap-4">
                <span className="h-px w-10 shrink-0 bg-[#c5a46d]" />
                <span className="whitespace-nowrap text-[clamp(15px,2.2vw,28px)] font-semibold tracking-[0.08em] text-[#c5a46d]">
                 {t.eyebrow}
                </span>
              </div>
           </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
              {t.title}
              <span className="mt-2 block text-[#c5a46d]">
                {t.titleGold}
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/55">
              {t.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#c5a46d] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#dfc18d]"
              >
                {t.primary} <span className="ml-1">→</span>
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-sm transition hover:border-[#c5a46d] hover:text-[#c5a46d]"
              >
                {t.secondary}
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 text-xs text-white/45">
              <span className="h-2 w-2 rounded-full bg-[#c5a46d]" />
              {t.available}
            </div>
          </div>

          {/* PERSONAL PHOTO PLACEHOLDER */}
          <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[45%] bg-[#684638]/20 blur-3xl" />

               <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-3xl border border-[#c5a46d]/30 bg-[#211a17]">
                 <img
                    src="/aloha.png"
                    alt="Abderrahim Aitelmaalem"
                    className="h-full w-full object-cover object-center"
                 />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-7 pt-16 text-center text-sm tracking-[0.2em] text-white">
                    ABDERRAHIM AITELMAALEM
              </div>
          </div>

  <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-t-[48%] rounded-b-3xl border border-[#c5a46d]/30" />
</div>
        </div>
      </section>

      {/* ABOUT */}
     

<section id="about" className="border-t border-white/10 px-6 py-28 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <p className="text-xs font-semibold tracking-[0.25em] text-[#c5a46d]">
      01 — ABOUT
    </p>

    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
      {t.about}
    </h2>

    <p className="mt-7 max-w-2xl text-lg leading-9 text-white/55">
      {t.aboutText}
    </p>

    <div className="mt-14 grid gap-10 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold">{t.businessFirst}</h3>
        <p className="mt-3 leading-7 text-white/55">
          {t.businessFirstText}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">{t.howIWork}</h3>
        <p className="mt-3 leading-7 text-white/55">
          {t.howIWorkText}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">{t.trust}</h3>
        <p className="mt-3 leading-7 text-white/55">
          {t.trustText}
        </p>
      </div>
    </div>
  </div>
</section>



      {/* SERVICES */}
      <section id="services" className="bg-[#171310] px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#c5a46d]">
            02 — SERVICES
          </p>
          <h2 className="mt-5 text-4xl font-semibold">{t.services}</h2>
          <p className="mt-4 text-white/50">{t.servicesText}</p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.cards.map(([title, description], i) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c5a46d]/50"
              >
                <span className="text-sm text-[#c5a46d]">
                  0{i + 1} /
                </span>
                <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  {description}
                </p>
                <div className="mt-8 h-px w-10 bg-[#c5a46d] transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      
<section id="projects" className="px-6 py-28 lg:px-12">
  <div className="mx-auto max-w-7xl">
    <p className="text-xs font-semibold tracking-[0.25em] text-[#c5a46d]">
      03 — PORTFOLIO
    </p>

    <h2 className="mt-5 text-4xl font-semibold">{t.projects}</h2>
    <p className="mt-4 text-white/50">{t.projectsText}</p>

    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {t.projectCards.map((project, i) => (
        <div
          key={i}
          className="flex min-h-72 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#563b32]/40 to-[#171310] p-8 transition duration-300 hover:border-[#c5a46d]/40"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#c5a46d]">
              PROJECT 0{i + 1}
            </span>
            <span className="rounded-full border border-[#c5a46d]/30 px-3 py-1 text-[10px] text-[#c5a46d]">
              {project.status}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl border border-[#c5a46d]/20 bg-[#211a17] px-8 py-16 text-center sm:px-16">
          <p className="text-xs tracking-[0.25em] text-[#c5a46d]">
            04 — LET'S CONNECT
          </p>
          <h2 className="mt-6 text-4xl font-semibold">{t.contact}</h2>
          <p className="mt-5 text-white/50">{t.contactText}</p>
          
<a
  href="https://wa.me/212628571345?text=Hello%20Abderrahim%2C%20I%27m%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#c5a46d] px-8 py-3 text-sm font-semibold text-[#171310] transition hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.45 0 .09 5.36.09 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.94 11.94 0 0 0 5.79 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.2-1.25-6.2-3.48-8.41ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.88 9.88 0 0 1-1.52-5.24c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
  </svg>
  {t.contactButton}
</a>

        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/35">
        © 2026 Abderrahim Aitelmaalem. All rights reserved.
      </footer>
      <a
  href="#home"
  aria-label="Back to top"
  className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#c5a46d]/40 bg-[#1c1714] text-[#c5a46d] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#c5a46d] hover:text-[#171310]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
</a>
    </main>
  );
}