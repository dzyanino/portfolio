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
        headline: " Who am I?",
        title: "May be your next hire / co-worker",
        description:
          "From my full name, Doneli Dzyanino MANASINTSOA, I'm from the « Red Island », a.k.a, Madagascar . I like to think about how things work under the pile of abstractions, instead of how they look.",
        features: [
          {
            title: "I'm REALLY interested in computer graphics",
            description:
              "We can talk about it all day. I still have so many things I don't know about that and on rendering processes.",
            icon: "i-lucide-shapes",
          },
          {
            title: "You guessed it right, gaming!",
            description:
              "What can be a software developer without its passion for gaming.",
            icon: "i-lucide-gamepad-2",
          },
          {
            title: "I do some drawings BTW ",
            description:
              "Still far from what I want to achieve, but… well, it's honest work.",
            icon: "i-lucide-pencil-line",
          },
        ],
      },
      skills: {
        headline: " I don't know everything, I only know what I know. ",
        title: "Tools I use so far…",
        description: "Always trying to improve myself.",
        spotlight: {
          title: "Currently learing Godot",
          description: "In my journey of wanting to make my own games.",
        },
        skills: [
          {
            date: "Web Technologies",
            title: "Frontend",
            description:
              "HTML - CSS - Javascript/Typescript - TailwindCSS - Vue - Astro - shadcn-vue - NuxtUI - Vuetify",
            icon: "i-lucide-panels-top-left",
          },
          {
            date: "Web Technologies",
            title: "Backend and Meta-frameworks",
            description:
              "Node - Bun - Nuxt - Express - Nitropack - Elysia.js - REST API - PostgreSQL - Supabase - Beekeeper",
            icon: "i-lucide-server-cog",
          },
          {
            date: "Low Level Stuff",
            title: "Other programming languages",
            description: "Go - C/C++ ",
            icon: "i-lucide-memory-stick",
          },
          {
            date: "Systems",
            title: "OS and Networking",
            description:
              "Linux - Containers - Wireshark - GNS3 - Virtualization - Embed Systems",
            icon: "i-lucide-cpu",
          },
          {
            date: "Other",
            title: "Various tools",
            description: "Git - Docker - Podman - Forgejo",
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
        headline: " Qui suis-je ?",
        title: "Peut-être votre prochain collègue / recrue",
        description:
          "De mon nom complet, Doneli Dzyanino MANASINTSOA, je viens de la « Grande Île », alias Madagascar . J'aime passer mon temps à me demander comment les choses marchent en arrière plan et ne pas penser au premier.",
        features: [
          {
            title: "L'infographie m'interrèsse BEAUCOUP",
            description:
              "On pourrait en parler pendant des heures. J’ai encore plein de choses à découvrir dessus, ou sur leur processus de rendu.",
            icon: "i-lucide-shapes",
          },
          {
            title: "Vous vous en doutiez, le gaming !",
            description:
              "Difficile d’être développeur logiciel sans sa passion pour les jeux vidéo.",
            icon: "i-lucide-gamepad-2",
          },
          {
            title: "Je dessine un peu aussi ",
            description:
              "Je suis encore loin de mon but, mais bon… je fais de mon mieux.",
            icon: "i-lucide-pencil-line",
          },
        ],
      },
      skills: {
        headline: " Je ne sais pas tout, je sais seulement ce que je sais. ",
        title: "Les outils que j’utilise…",
        description: "Toujours en train de progresser.",
        spotlight: {
          title: "Actuellement en train d’apprendre Godot",
          description: "Dans mon envie de créer mes propres jeux.",
        },
        skills: [
          {
            date: "Technologies Web",
            title: "Frontend",
            description:
              "HTML - CSS - JavaScript/TypeScript - TailwindCSS - Vue - Astro - shadcn-vue - NuxtUI - Vuetify",
            icon: "i-lucide-panels-top-left",
          },
          {
            date: "Technologies Web",
            title: "Backend et Méta-frameworks",
            description:
              "Node - Bun - Nuxt - Express - NitroPack - Elysia.js - API REST - PostgreSQL - Supabase - Beekeeper",
            icon: "i-lucide-server-cog",
          },
          {
            date: "Bas niveau",
            title: "Autres langages de programmation",
            description: "Go - C/C++",
            icon: "i-lucide-memory-stick",
          },
          {
            date: "Systèmes",
            title: "OS et réseaux",
            description:
              "Linux - Conteneurs - Wireshark - GNS3 - Virtualisation - Systèmes embarqués",
            icon: "i-lucide-cpu",
          },
          {
            date: "Divers",
            title: "Outils variés",
            description: "Git - Docker - Podman - Forgejo",
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
