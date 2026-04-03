import type { I18nOptions } from "vue-i18n";

export const i18nConfigs: I18nOptions = {
  legacy: false,
  locale: "en",
  availableLocales: ["en", "fr"],
  fallbackLocale: "en",
  messages: {
    /**
     * English messages
     */
    en: {
      header: {
        about: "About",
        skills: "Skills",
        contact: "Contact",
        cv: "Download my resume",
      },
      hero: {
        headline: " Salama, I'm",
        title: "Doneli Dzyanino",
        description: "Software Engineer  OSS enthousiast :)",
        "main-button": "Start a project",
        "alt-button": "More about me",
      },
      about: {
        headline: "󱇫 All right, let's do this one last time.",
        title: "My name is Doneli D. MANASINTSOA",
        description:
          "I'm from the « Red Island », a.k.a, Madagascar. And for the past 20+ years, I've been exploring quite a few interests.",
        features: [
          {
            title: "Computer graphics",
            description: "We can talk about it all day.",
            icon: "i-lucide-shapes",
          },
          {
            title: "Gaming!",
            description:
              "What can be a software developer without their passion for gaming.",
            icon: "i-lucide-gamepad-2",
          },
          {
            title: "Manga and light novels",
            description: "Yeah just an average weeb.",
            icon: "i-lucide-book-open-text",
          },
          {
            title: "And some drawings btw",
            description:
              "Still far from what I want to achieve, but… well, it's honest work.",
            icon: "i-lucide-pencil-line",
          },
        ],
      },
      skills: {
        headline: " I don't know everything, I just know what I know.",
        title: "Tools I use so far…",
        description: "Trying to improve myself.",
        skills: [
          {
            title: "Programming languages",
            description: "JavaScript/TypeScript - Go - C/C++ - Dart",
            icon: "i-lucide-code",
          },
          {
            title: "Web - Frontend",
            description:
              "HTML - CSS - TailwindCSS - Vue - Astro - shadcn-vue - NuxtUI - Vuetify",
            icon: "i-lucide-panels-top-left",
          },
          {
            title: "Web - Backend",
            description: "Nuxt - Express - Nitro - Elysia.js",
            icon: "i-lucide-server-cog",
          },
          {
            title: "Mobile development",
            description: "Flutter",
            icon: "i-lucide-tablet-smartphone",
          },
          {
            title: "Databases",
            description: "PostgreSQL - MariaDB - SQLite",
            icon: "i-lucide-database",
          },
          {
            title: "Systems & Networking",
            description:
              "GNU/Linux - Wireshark - GNS3 - Containers - Virtualization",
            icon: "i-lucide-cpu",
          },
          {
            title: "Others",
            description: "Git - Docker - Podman - Forgejo - Godot",
            icon: "i-lucide-ellipsis",
          },
        ],
      },
      contact: {
        title: "Reach me out",
        description: "Let's make that tingling idea a reality.",
        links: [
          {
            label: "dzyanino@gmail.com",
            color: "neutral",
            icon: "i-lucide-mail",
            to: "mailto:dzyanino@gmail.com",
          },
          {
            label: "dzyanino",
            color: "neutral",
            icon: "i-lucide-github",
            variant: "subtle",
            to: "https://github.com/dzyanino",
            target: "_blank",
          },
        ],
      },
      footer: {
        left: "Made with NuxtUI",
        right: "Test",
      },
    },

    /**
     * French messages
     */
    fr: {
      header: {
        about: "À propos",
        skills: "Compétences",
        contact: "Contact",
        cv: "Télécharger mon CV",
      },
      hero: {
        headline: " Salama, je suis",
        title: "Doneli Dzyanino",
        description: "Ingénieur Logiciel  Fan d'OSS :)",
        "main-button": "Commencer un projet",
        "alt-button": "En savoir plus sur moi",
      },
      about: {
        headline: "󱇫 Allez, je vous la refais une dernière fois.",
        title: "Je m'appelle Doneli Dzyanino MANASINTSOA",
        description:
          "Je viens de la « Grande Île », alias Madagascar. Et pendant les +20 dernières années, j'ai exploré pas mal de centres d'intérêts.",
        features: [
          {
            title: "L'infographie",
            description: "On pourrait en parler pendant des heures.",
            icon: "i-lucide-shapes",
          },
          {
            title: "Le gaming !",
            description:
              "Difficile d’être développeur logiciel sans sa passion pour les jeux vidéo.",
            icon: "i-lucide-gamepad-2",
          },
          {
            title: "Les mangas et light novels",
            description: "Ouais juste un weeb comme les autres.",
            icon: "i-lucide-book-open-text",
          },
          {
            title: "Et un peu de dessin aussi",
            description:
              "Je suis encore loin de mon but, mais bon… je fais de mon mieux.",
            icon: "i-lucide-pencil-line",
          },
        ],
      },
      skills: {
        headline: " Je ne sais pas tout, je sais juste ce que je sais.",
        title: "Les outils que j'utilise…",
        description: "Essayant de progresser.",
        skills: [
          {
            title: "Langages de programmation",
            description: "JavaScript/TypeScript - Go - C/C++ - Dart",
            icon: "i-lucide-code",
          },
          {
            title: "Web - Frontend",
            description:
              "HTML - CSS - TailwindCSS - Vue - Astro - shadcn-vue - NuxtUI - Vuetify",
            icon: "i-lucide-panels-top-left",
          },
          {
            title: "Web - Backend",
            description: "Nuxt - Express - Nitro - Elysia.js",
            icon: "i-lucide-server-cog",
          },
          {
            title: "Développement mobile",
            description: "Flutter",
            icon: "i-lucide-tablet-smartphone",
          },
          {
            title: "Bases de données",
            description: "PostgreSQL - MariaDB - SQLite",
            icon: "i-lucide-database",
          },
          {
            title: "Systèmes & Réseaux",
            description:
              "GNU/Linux - Wireshark - GNS3 - Conteneurs - Virtualisation",
            icon: "i-lucide-cpu",
          },
          {
            title: "Autres",
            description: "Git - Docker - Podman - Forgejo - Godot",
            icon: "i-lucide-ellipsis",
          },
        ],
      },
      contact: {
        title: "Contactez-moi",
        description:
          "Transformons cette idée qui vous trotte dans la tête en réalité.",
        links: [
          {
            label: "dzyanino@gmail.com",
            color: "neutral",
            icon: "i-lucide-mail",
            to: "mailto:dzyanino@gmail.com",
          },
          {
            label: "dzyanino",
            color: "neutral",
            icon: "i-lucide-github",
            variant: "subtle",
            to: "https://github.com/dzyanino",
            target: "_blank",
          },
        ],
      },
      footer: {
        left: "Réalisé avec NuxtUI",
        right: "Test",
      },
    },
  },
};
