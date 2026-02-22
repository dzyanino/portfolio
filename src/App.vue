<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { en, fr } from "@nuxt/ui/locale";

const { locale } = useI18n();

const uiLocale = computed(() => {
  switch (locale.value) {
    case "en": return en;
    case "fr": return fr;
    default:  return en;
  }
});
</script>

<template>
  <Suspense>
    <UApp :locale="uiLocale">
      <RouterView />
    </UApp>
  </Suspense>
</template>
