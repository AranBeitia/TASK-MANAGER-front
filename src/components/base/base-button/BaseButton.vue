<template>
  <div>
    <button :class="button" :disabled="isDisabled">{{ buttonText }}</button>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { button } from './BaseButton.css.js'

const props = defineProps<{
  buttonText: string
  isDisabled?: boolean
}>()
</script>
