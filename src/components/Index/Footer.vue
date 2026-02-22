<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "HackerRank",
    to: "https://hackerrank.com/profile/dzyanino",
    target: "_blank",
  },
  {
    label: "Arch Wiki",
    to: "https://wiki.archlinux.org/title/User:Dzyanino",
    target: "_blank",
  },
  {
    label: "Itch.io",
    to: "https://dzyanino.itch.io/",
    target: "_blank",
  },
];
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">© 2026 Doneli Dzyanino MANASINTSOA</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-lucide-facebook"
        color="neutral"
        variant="ghost"
        to="https://facebook.com/dzyanino.doneli"
        target="_blank"
        aria-label="Facebook"
      />
      <UButton
        icon="i-lucide-twitter"
        color="neutral"
        variant="ghost"
        to="https://x.com/dzyanino"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-lucide-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/dzyanino"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
