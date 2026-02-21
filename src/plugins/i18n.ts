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
        headline: "Salama, I'm",
        title: "Doneli Dzyanino",
        description: "Software Engineer & OSS enthousiast :)",
        "main-button": "Let's get started",
        "alt-button": "More about me",
      },
      about: {
        headline: "Who am I?",
        title: "May be your next co-worker/hire",
        description:
          "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
        features: [],
      },
      skills: {
        headline: '"I don\'t know everything, I only know what I know."',
        title: "Tools I use so far...",
        description:
          "...and on which I got familiar with. With some that I just started recently.",
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
        description: "Where to get in touch with me or places I'm related to.",
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
        about: "A propos",
        skills: "Compétences",
        contact: "Contact",
        cv: "Télécharger mon CV",
      },
      hero: {
        headline: "Salama, Je suis",
        title: "Doneli Dzyanino",
        description: "Ingénieur Logiciel & Fan d'OSS :)",
        "main-button": "C'est parti",
        "alt-button": "En savoir plus sur moi",
      },
      about: {
        headline: "Qui suis-je?",
        title: "May be your next co-worker/hire",
        description:
          "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur.",
        features: [],
      },
      skills: {
        headline: '"Je ne sais pas tout, je sais seulement ce que je sais."',
        title: "Outils utilisés...",
        description:
          "...and on which I got familiar with. With some that I just started recently.",
        spotlight: {
          title: "J'apprends actuellement Godot",
          description: "In my journey of wanting to make my own games.",
        },
        skills: [
          {
            date: "Technologies Web",
            title: "Frontend",
            description:
              "HTML - CSS - Javascript/Typescript - TailwindCSS - Vue - Astro - shadcn-vue - NuxtUI - Vuetify",
            icon: "i-lucide-panels-top-left",
          },
          {
            date: "Technologies Web",
            title: "Backend et Meta-frameworks",
            description:
              "Node - Bun - Nuxt - Express - Nitropack - Elysia.js - REST API - PostgreSQL - Supabase - Beekeeper",
            icon: "i-lucide-server-cog",
          },
          {
            date: "Bas niveau",
            title: "Autres langages de programmation",
            description: "Go - C/C++ ",
            icon: "i-lucide-memory-stick",
          },
          {
            date: "Systèmes",
            title: "Systèmes d'exploitations et Réseaux",
            description:
              "Linux - Conteneurs - Wireshark - GNS3 - Virtualisation - Systèmes Embarqués",
            icon: "i-lucide-cpu",
          },
          {
            date: "Autre",
            title: "Outils divers",
            description: "Git - Docker - Podman - Forgejo",
            icon: "i-lucide-ellipsis",
          },
        ],
      },
      contact: {
        title: "Discutons",
        description: "Mes places sur le web ou des endroits qui me concernent.",
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
        left: "Fait avec NuxtUI",
        right: "Test",
      },
    },
  },
};
