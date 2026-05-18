<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div>
    <UBanner
      :title="t('banner.message')"
      close
    >
      <template #actions>
        <UButton
          to="https://keepandroidopen.org/"
          target="_blank"
          trailing-icon="i-lucide-arrow-right"
          :label="t('banner.action')"
          size="xs"
          color="neutral"
        />
        <UTooltip
          :ui="{
            content: 'h-full',
          }"
          :delay-duration="0"
          arrow
        >
          <template #content>
            <span class="max-w-sm wrap-break-word">{{ t('banner.tooltip') }}</span>
          </template>
          <UButton
            icon="i-lucide-circle-question-mark"
            size="xs"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>
      </template>
    </UBanner>
    <Header />

    <UMain>
      <Meteor
        :count="30"
        class="z-0"
      />
      <Hero />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
    </UMain>

    <USeparator
      type="solid"
      class="h-px"
    />

    <Footer id="footer" />
  </div>
</template>
