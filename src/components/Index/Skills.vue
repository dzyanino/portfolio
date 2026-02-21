<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { TimelineItem } from "@nuxt/ui";
import { lgAndLarger } from "../../plugins/breakpoints";

const { t, tm } = useI18n();
</script>

<template>
  <UPageSection
    :headline="t('skills.headline')"
    :title="t('skills.title')"
    :description="t('skills.description')"
  >
    <UPageGrid class="lg:w-1/2 mx-auto">
      <UPageCard
        :title="t('skills.spotlight.title')"
        :description="t('skills.spotlight.description')"
        icon="i-lucide-flame"
        orientation="horizontal"
        spotlight
        spotlight-color="primary"
        class="col-span-full relative overflow-hidden"
      >
        <div
          v-show="lgAndLarger"
          class="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span
            class="text-[min(50vh,50vw)] leading-none text-white dark:text-slate-900"
            style="transform: translateX(90%)"
          >
            
          </span>
        </div>
      </UPageCard>
    </UPageGrid>
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
