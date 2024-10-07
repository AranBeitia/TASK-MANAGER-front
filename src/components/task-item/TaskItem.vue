<template>
  <div :class="ItemContainer">
    <p>{{ task.title }}</p>
    <div>
      <button>Completar</button>
      <button>Borrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItemContainer, CardSection } from './TaskItem.css.js'
import { Task } from '@/types'

const props = defineProps<{
  task: Task
}>()
</script>

<style scoped></style>
