<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();
const { t } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("header.about"),
    to: "#about",
    // active: route.hash === "#about",
    active: false,
  },
  {
    label: t("header.skills"),
    to: "#skills",
    // active: route.hash === "#skills",
    active: false,
  },
  {
    label: t("header.contact"),
    to: "#contact",
    // active: route.hash === "#contact",
    active: false,
  },
]);

function moveToTop() {
  //eslint-disable-next-line
  window.scrollTo({ top: 0, behavior: "smooth" });
}

watch(
  () => route.hash,
  (newHash) => {
    if (!newHash) {
      moveToTop();
      return;
    }

    try {
      //eslint-disable-next-line
      const el = document.querySelector(newHash);
      if (el) {
        const yOffset = 0;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;//eslint-disable-line
        window.scrollTo({ top: y, behavior: "smooth" });//eslint-disable-line
      }
    } catch (error) {//eslint-disable-line
      //eslint-disable-next-line
      console.warn("Invalid selector:", newHash);
    }
  },
  { immediate: true },
);
</script>

<template>
  <UHeader>
    <template #title>
      <span @click="moveToTop">dzyanino</span>
    </template>

    <UNavigationMenu
      :items
      variant="link"
    >
      <template #item="{ item }">
        <a
          :href="item.to as string"
          :class="{ 'text-primary': item.active }"
        >
          {{ item.label }}
        </a>
      </template>
    </UNavigationMenu>

    <template #right>
      <LocaleSelector />
      <UTooltip :text="t('header.cv')">
        <a
          href="/CV-MANASINTSOA-Doneli-Dzyanino.pdf"
          download
          target="_self"
          style="text-decoration: none"
        >
          <UButton
            color="neutral"
            variant="outline"
            icon="i-lucide-file-down"
            :aria-label="t('header.cv')"
            class="cursor-pointer"
          />
        </a>
      </UTooltip>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items
        orientation="vertical"
      >
        <template #item="{ item }">
          <a
            :href="item.to as string"
            :class="{ 'text-primary': item.active }"
          >
            {{ item.label }}
          </a>
        </template>
      </UNavigationMenu>
    </template>
  </UHeader>
</template>
