<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { TimelineItem } from "@nuxt/ui";

const { t, tm } = useI18n();
</script>

<template>
  <UPageSection
    :headline="t('skills.headline')"
    :title="t('skills.title')"
    :description="t('skills.description')"
  >
    <UTimeline
      :items="tm('skills.skills') as TimelineItem[]"
      :reverse="true"
      :ui="{
        item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-right',
      }"
      class="w-1/2 lg:w-1/3 mx-auto translate-x-[calc(50%-1rem)]"
    />
  </UPageSection>
</template>
