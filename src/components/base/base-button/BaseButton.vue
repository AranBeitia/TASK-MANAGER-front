<template>
  <div>
    <button :class="button" :disabled="isDisabled"><slot></slot></button>
  </div>
</template>

<script setup lang="ts">
import { button } from './BaseButton.css.js'

const props = defineProps<{
  isDisabled?: boolean
}>()
</script>
