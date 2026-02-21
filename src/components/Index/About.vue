<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { PageFeatureProps } from "@nuxt/ui";
import { lgAndLarger } from "../../plugins/breakpoints";

const { t, tm } = useI18n();
</script>

<template>
  <UPageSection
    :headline="t('about.headline')"
    :title="t('about.title')"
    :description="t('about.description')"
    :orientation="lgAndLarger ? 'horizontal' : 'vertical'"
    reverse
    :features="tm('about.features') as PageFeatureProps[]"
  >
    <img
      src="/src/assets/images/self-portrait.png"
      width="352"
      height="647"
      alt="Illustration"
      class="w-full rounded-lg"
    />
  </UPageSection>
</template>
