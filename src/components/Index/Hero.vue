<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import type { ButtonProps } from "@nuxt/ui";

const { t } = useI18n();

const links = computed<ButtonProps[]>(() => [
  {
    label: t("hero.main-button"),
    to: "#contact",
    icon: "i-lucide-wrench",
  },
  {
    label: t("hero.alt-button"),
    to: "#about",
    variant: "subtle",
  },
]);
</script>

<template>
  <UPageHero
    :headline="t('hero.headline')"
    :title="t('hero.title')"
    :description="t('hero.description')"
    orientation="vertical"
    :links
    class="backdrop-blur-[3px]"
  >
    <div class="flex w-2/3 h-full mx-auto items-center justify-center">
      <img
        src="/src/assets/images/hero.png"
        alt="hero-image"
        class="rounded-lg ring ring-default"
      />
    </div>
  </UPageHero>
</template>
