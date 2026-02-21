<script setup lang="ts">
import { ref } from "vue";
import type { SelectItem } from "@nuxt/ui";

const locales = ref<SelectItem[]>([
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
]);
</script>

<template>
  <USelect v-model="$i18n.locale" :items="locales" />
</template>
