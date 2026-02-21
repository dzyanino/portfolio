<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { ButtonProps } from "@nuxt/ui";

const { t, tm } = useI18n();
</script>

<template>
  <UPageSection>
    <UPageCTA
      :title="t('contact.title')"
      :description="t('contact.description')"
      variant="soft"
      :links="tm('contact.links') as ButtonProps[]"
    />
  </UPageSection>
</template>
