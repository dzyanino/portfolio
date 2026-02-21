<script setup lang="ts">
import { useI18n } from "vue-i18n";
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();
</script>

<template>
  <Suspense>
    <UApp :locale="locales[locale]">
      <RouterView />
    </UApp>
  </Suspense>
</template>
